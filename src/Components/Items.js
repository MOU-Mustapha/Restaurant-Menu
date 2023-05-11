import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Items = ({ itemsData }) => {
  return (
    <Fade left>
      <Row>
        {itemsData.length ? (
          itemsData.map((item) => {
            return (
              <Col sm="12" className="mb-2" key={item.id}>
                <Card className="d-flex flex-row bg-transparent">
                  <Card.Img variant="top" src={item.img} className="img-item" />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <span className="item-title d-block">{item.title}</span>
                      <span className="item-price d-block">{item.price}</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="item-description mt-3 d-block">
                        {item.desc}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد أصناف</h3>
        )}
      </Row>
    </Fade>
  );
};

export default Items;
