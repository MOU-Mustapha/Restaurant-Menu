import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

function NavBar({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    filterBySearch(searchValue);
    setSearchValue("");
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="بحث...."
                className="mx-2"
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button onClick={() => handleSearch()} variant="outline-light">
                بحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
