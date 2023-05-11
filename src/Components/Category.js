import React from "react";
import { Row, Col } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterByCat, allCat }) => {
  return (
    <Row className="my-3 mb-5">
      <Col sm="12">
        <div className="text-center">
          <Roll left>
            {allCat.length
              ? allCat.map((cat) => {
                  return (
                    <button
                      key={Math.random()}
                      onClick={() => filterByCat(cat)}
                      className="btn-category mx-2"
                    >
                      {cat}
                    </button>
                  );
                })
              : null}
          </Roll>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
