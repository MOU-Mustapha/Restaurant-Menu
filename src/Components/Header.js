import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="text-center">
        <div className="title">قائمة الطعام</div>
        <div className="underline m-auto"></div>
      </Col>
    </Row>
  );
};

export default Header;
