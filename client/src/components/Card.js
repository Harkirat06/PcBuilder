import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Cardd({ item, nombre, imagen, onClick, precio, esMarketing, context }) {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  
  return (
    <Card className="w-100 col-lg-6 col-md-8 col-sm-10">
      <Card.Img variant="top" src={"/image/" + imagen} className="productImg" />
      <Card.Body>
        <Card.Title className="productName">{nombre}</Card.Title>
        <Card.Text className="mb-2">
          {precio.amazon && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  onClick("amazon");
                } else {
                  openInNewTab(item.link.amazon);
                }
              }}
            >
              <div>Amazon:</div><div> {precio.amazon.toFixed(2)} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.ebay && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  onClick("ebay");
                } else {
                  openInNewTab(item.link.ebay);
                }
              }}
            >
              <div>Ebay:</div><div> {precio.ebay.toFixed(2)} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.segundaMano && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  onClick("segundaMano");
                }
              }}
            >
              <div>Segunda mano:</div><div> {precio.segundaMano.toFixed(2)} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2 d-flex justify-content-end">
          {esMarketing && (
            <Button variant="primary" size="sm">
              <FaShoppingCart className="icon" />
            </Button>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
