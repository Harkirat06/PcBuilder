import React, { useState, useContext, useEffect } from "react";
import { Button, Card, Container, Modal, Form, Alert } from "react-bootstrap";
import { buildPorPrecio, getListas } from "./Axios";
import "./PcBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasCustom from "./OffCanvasCustom";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

function PcBuilder({ context }) {
  const {
    listasComponentes,
    setListasComponentes,
    setShow,
    build,
    elementosSeleccionados,
    setElementosSeleccionados,
    setBuild,
    listaComponente,
    setListaComponente,
    nombreLista,
    setNombreLista,
    show,
    user,
    imagen,
    setImagen
  } = useContext(context);

  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [lista1, setLista1] = useState({})
  const [lista2, setLista2] = useState({}) 
  const [mesa, setMesa] = useState(false)

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    getListas(build[0]).then((r) => {
      setListasComponentes(()=>{
        let list1 = {}
        let list2 = {}
        let propiedades = Object.keys(r.data)
        for(let i = 0; i<11; i++){
          if(i<8){
            list1[propiedades[i]] = r.data[i]
          }else{
            list2[propiedades[i]] = r.data[i]
          }
        }
        setLista1(()=>{
          let e = {...list1}
          return e
        })
        setLista2(()=>{
          let e = {...list2}
          return e
        })
        return r.data
      });
      if(mesa){
        setImagen("/image/mesa.png")
      }else{
        setImagen("/image/PC.png")
      }
      console.log("Actualizada listas");
    });
  }, [build]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let secondHand = false;

  const [presupuesto, setPresupuesto] = useState(0);

  const handleBoton = (lista) => {
    switch(lista){
      case "placasList": 
        setImagen("/image/PC_placa.png");
        break;
      case "ramList":
        setImagen("/image/PC_ram.png");
        break;
      case "cpuList":
        setImagen("/image/PC_cpu.png");
        break;
      case "gpuList":
        setImagen("/image/PC_gpu.png");
        break;
      case "disipadorList":
        setImagen("/image/PC_disipador.png");
        break;
      case "cajaList":
        setImagen("/image/PC_caja.png");
        break;
      case "discoList":
        setImagen("/image/PC_disco.png");
        break;
      case "fuenteList":
        setImagen("/image/PC_fuente.png");
        break;
      case "monitorList":
        setImagen("/image/mesa_monitor.png");
        break;
      case "tecladoList":
        setImagen("/image/mesa_teclado.png");
        break;
      case "ratonList":
        setImagen("/image/mesa_raton.png");
        break;
    }
    setNombreLista(lista);
    setListaComponente(listasComponentes[lista]);
    setShow(true);
  };
  const handleAutocomplete = () => {
    buildPorPrecio(presupuesto, build).then((selectedBuild) => {
      //if (selectedBuild.Error) {return console.log("PENE"+selectedBuild)}
      if (selectedBuild && selectedBuild.Error) {
        // Si buildPorPrecio devuelve un objeto Error, muestra un pop-up con el mensaje de error
        setMensaje(selectedBuild.Error);
        setShowError(true);
      } else {
        setBuild(() => {
          let conf = { ...selectedBuild };
          return [conf];
        });
        setElementosSeleccionados(() => {
          let elementos = { ...elementosSeleccionados[0] };
          Object.keys(selectedBuild).forEach((propiedad) => {
            if (propiedad != "0") {
              if (propiedad == "sata" || propiedad == "m2") {
                if (elementos["disco"] == "Elemento no seleccionado") {
                  elementos["disco"] = [];
                }
                selectedBuild[propiedad].forEach((item) => {
                  if (!item.price) {
                    console.log(
                      "ERROR: " +
                        item +
                        " of type " +
                        propiedad +
                        " does not have price!"
                    );
                  }
                  const selectedType = getPriceType(item);
                  elementos["disco"] = elementos["disco"].concat({
                    nombre: item.nombre,
                    selectedType: selectedType,
                    link: item.link[selectedType],
                    selectedPrice: item.precio[selectedType],
                  });
                });
              } else {
                const item = selectedBuild[propiedad];
  
                if (!item.price) {
                  console.log(
                    "ERROR: " +
                      item +
                      " of type " +
                      propiedad +
                      " does not have price!"
                  );
                }
                const selectedType = getPriceType(item);
                elementos[propiedad] = {
                  nombre: item.nombre,
                  selectedType: selectedType,
                  link: item.link[selectedType],
                  selectedPrice: item.precio[selectedType],
                };
              }
            }
          });
          return [elementos];
        });
        handleClose();
      }
    });

    
  };

  const getPriceType = (item) => {
    console.log("Item: " + item)
    let minPrice = 0;
    if (item.precio.segundaMano) {
      minPrice = Math.min(
        item.precio.amazon,
        item.precio.ebay,
        item.precio.segundaMano
      );
    } else {
      minPrice = Math.min(item.precio.amazon, item.precio.ebay);
    }
    if (minPrice == item.precio.amazon) {
      return "amazon";
    } else if (minPrice == item.precio.ebay) {
      return "ebay";
    } else {
      return "segundaMano";
    }
  };

  const handleNombre = (lista) => {
    return lista.replace("List", "");
  };

  const deleteSelection = (propiedad, item) => {
    if (Array.isArray(elementosSeleccionados[0][propiedad])) {
      setElementosSeleccionados((prevElementosSeleccionados) => {
        let elementos = { ...prevElementosSeleccionados[0] };
        const updatedArray = elementos[propiedad].filter(
          (i) => i.nombre !== item
        );
        elementos[propiedad] =
          updatedArray.length > 0 ? updatedArray : "Elemento no seleccionado";
        return [elementos];
      });
      setBuild((prevBuild) => {
        let conf = { ...prevBuild[0] };
        if (conf["sata"] && Array.isArray(conf["sata"])) {
          conf["sata"] = conf["sata"].filter((i) => i.nombre !== item);
        }

        if (conf["m2"] && Array.isArray(conf["m2"])) {
          conf["m2"] = conf["m2"].filter((i) => i.nombre !== item);
        }

        setShow(false);
        return [conf];
      });
    } else {
      setElementosSeleccionados((prevElementosSeleccionados) => {
        let elementos = { ...prevElementosSeleccionados[0] };
        elementos[propiedad] = "Elemento no seleccionado";
        return [elementos];
      });
      setBuild((prevBuild) => {
        let conf = { ...prevBuild[0] };
        delete conf[propiedad];
        setShow(false);
        return [conf];
      });
    }
  };

  let i = 0;

  const handleSeleccion = (propiedad) => {
    if (elementosSeleccionados[0][propiedad] !== "Elemento no seleccionado") {
      if (Array.isArray(elementosSeleccionados[0][propiedad])) {
        let i = 0;
        return elementosSeleccionados[0][propiedad].map((item) => {
          return (
            <Card.Text key={i++}>
              {i + "." + " " + item.nombre}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteSelection(propiedad, item.nombre)}
              >
                <strong>X</strong>
              </Button>
            </Card.Text>
          );
        });
      } else {
        return (
          <Card.Text>
            {elementosSeleccionados[0][propiedad].nombre}
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteSelection(propiedad)}
            >
               <strong>X</strong>
            </Button>
          </Card.Text>
        );
      }
    } else {
      return <Card.Text>{"Elemento no seleccionado"}</Card.Text>;
    }
  };

  return (
    <div className="PcBuilder">
      <div className="header">
        <a>
          <img className="logo" />
        </a>
        <Button
          onClick={() => navigate("/SelectBuild")}
          className="custom-color"
          variant="outline-primary"
        >
          Volver a Selección
        </Button>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Parte izquierda */}
          <div className="col-md-5">
            <div>
              <div className="imagen">
                <img
                  src={imagen} // Coloca la URL de tu imagen
                  alt="Imagen"
                  className="img-fluid"
                />
                <Button onClick={handleShow} className="autocomplete">
                  Autobuild
                </Button>
              </div>
            </div>
          </div>

          {/* Parte derecha */}
          <div className="col-md-7">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div cstyle={{ position: "absolute", top: 0, right: 0 }}>
                <OffCanvasCustom context={context} mesa={mesa} />
                <div className="container justify-content-center align-items-center">
                  <div className="row g-4">
                    {!mesa &&
                      Object.keys(lista1).map((lista) => {
                        let nombre = handleNombre(lista);
                        return (
                          <div
                            className="col-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                            key={i++}
                          >
                            <Card onClick={() => handleBoton(lista)}>
                              <Card.Img
                                variant="top"
                                src={"/image/" + nombre + "Icon.png"}
                              />
                              <Card.Body>{handleSeleccion(nombre)}</Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                      {mesa &&
                      Object.keys(lista2).map((lista) => {
                        let nombre = handleNombre(lista);
                        return (
                          <div
                            className="col-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                            key={i++}
                          >
                            <Card onClick={() => handleBoton(lista)}>
                              <Card.Img
                                variant="top"
                                src={"/image/" + nombre + "Icon.png"}
                              />
                              <Card.Body>{handleSeleccion(nombre)}</Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                    <Container className="contenedor">
                      <Button
                        size="large"
                        onClick={() => {
                          setMesa((prev)=>{
                            if(!prev){
                              setImagen("/image/mesa.png")
                            }else{
                              setImagen("/image/PC.png")
                            }
                            return !prev
                          })
                        }}
                        className="flecha"
                      >
                        {mesa ? 
                        <GrFormPreviousLink />
                        :
                        <GrFormNextLink />}
                      </Button>
                      <Button
                        size="large"
                        onClick={() => navigate("/paginaPagar")}
                        className="autocomplete"
                      >
                        Finalizar build
                      </Button>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Presupuesto para completar la build</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Presupuesto</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej: 1000"
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(e.target.value);
            }}
          />
          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              {mensaje}
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="submit" onClick={handleAutocomplete}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PcBuilder;
