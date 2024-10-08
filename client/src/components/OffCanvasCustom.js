import Cardd from "./Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PcBuilder.css"
import { useContext, useState } from "react";
import { getListas } from "./Axios";

function OffCanvasCustom({ context, mesa  }) {
  const {
    show,
    setShow,
    listaComponente,
    setListasComponentes,
    setBuild,
    setElementosSeleccionados,
    elementosSeleccionados,
    nombreLista,
    setImagen
  } = useContext(context);
  let i = 0;
  const handleClose = () => {
    if(mesa){
      setImagen("/image/mesa.png")
    }else{
      setImagen("/image/PC.png")
    }
    setShow(false);
  }

  const handleBuild = (item, selectedType) => {
    let propiedad = nombreLista.replace("List", "");
    console.log(propiedad)

    setElementosSeleccionados(()=>{
      let elementos = {...elementosSeleccionados[0]}
      
      if (item.tecnologia) {
        if (elementos[propiedad] == "Elemento no seleccionado") {
          elementos[propiedad] = []
        }
        elementos[propiedad] = elementos[propiedad].concat({nombre: item.nombre, selectedType: selectedType, link: item.link[selectedType], selectedPrice: item.precio[selectedType]});
        console.log(selectedType);
        console.log("product of type " + propiedad + " stored: " + elementos[propiedad].slice(-1)[0].nombre + " " + elementos[propiedad].slice(-1)[0].selectedType + " " + elementos[propiedad].slice(-1)[0].selectedPrice)
      } else {
        elementos[propiedad] = {nombre: item.nombre, selectedType: selectedType, link: item.link[selectedType], selectedPrice: item.precio[selectedType]};
        console.log(selectedType)
        console.log("product of type " + propiedad + " stored: " + elementos[propiedad].nombre + " " + elementos[propiedad].selectedType + " " + elementos[propiedad].selectedPrice)
      }
      return [elementos]
    })

    setBuild((prevBuild) => {
      let conf = { ...prevBuild[0]};

      if (item.tecnologia) {
        item.tecnologia === "m.2" ? (propiedad = "m2") : (propiedad = "sata");

        if (conf[propiedad]) {
          conf[propiedad] = conf[propiedad].concat(item);
        } else {
          conf[propiedad] = [item];
        }
      } else {
        conf[propiedad] = item;
      }

      getListas(conf).then((res) => {
        setListasComponentes(res.data);
      });

      handleClose();

      return [conf]; // Devolver el nuevo objeto 'conf' como el nuevo estado 'newBuild'
    });
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      style={{ width: "50vw" }}
      className="offcanvas"
    >
      <Offcanvas.Header className="bg-dark text-white" closeButton>
        <Offcanvas.Title>Productos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={{"backgroundColor": "#e9eaea"}}>
        <div className="container justify-content-center align-items-center">
          <div className="row g-4">
            {listaComponente ? (
              listaComponente.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
                  key={i++}
                >
                  <Cardd
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio = {item.precio}
                    esMarketing={false}
                    context={context}
                    onClick={(selectedType) => handleBuild(item, selectedType)}
                  />
                </div>
              ))
            ) : (
              <h1>No hay productos disponibles</h1>
            )}
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default OffCanvasCustom;
