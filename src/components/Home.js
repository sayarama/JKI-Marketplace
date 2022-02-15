import React from "react";
import { Nav, Offcanvas, Container, NavDropdown, Form, Navbar, Button, FormControl } from "react-bootstrap";
import logo from "../assets/jki.jpg";
import iconHammer from "../assets/hammer.png";
import iconUser from "../assets/user.png";
import iconList from "../assets/list.png";
import { Link } from "react-router-dom";


export default function Home() {
  return (
  <>
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand className="headLogo" href="#">JKI Marketplace</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">JKI Marketplace</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">About</Nav.Link>
          <Nav.Link href="#action2">Features</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

<div className="header">
  <h1>We Provide Experts To Help Your Needs</h1>
  <p>PT.Jaya Konsultan Indonesia</p>
  <Link className="button" to="/features">Read More</Link> 
</div>

<div className="content">
  <h1>Apa yang kami berikan?</h1>
  <div className="inner-content">

    <div className="image">
      <img className="icon" src={iconHammer} alt=""/>
        <p>Konstruksi Terbaik</p>
    </div>

    <div className="image">
      <img className="icon" src={iconUser} alt=""/>
        <p>Kualitas Jasa Terbaik</p>
    </div>

    <div className="image">
      <img className="icon" src={iconList} alt=""/>
        <p>Banyak Pilihan Jasa</p>
    </div>
  </div>
</div>

<div className="section">
  <img className="imgLogo" src={logo} alt="" />
  <div>
    <h2>Sedikit Tentang Kami</h2>
    <p>Kami memulai fokus dalam pelatihan Soft Skill & Hard SKill sejak 2011, terus bertumbuh lebih baik lagi hingga saat ini dalan PT.Jaya Konsultan Indonesia.</p>
    <Link className="more" to="/about">Selengkapnya</Link>
  </div>
</div>

<div className="sectionChild">
  <img className="imgLogo" src={logo} alt="" />
  <div>
    <p>Pt.Jaya Konsultan Indonesia,fokus pada manfaat Karena Kami yakin Sukses yang sebenarnya adalah bagaimana kita memberi manfaat dan mambahagiakan banyak orang-orang.Semoga kita dapat bersinergi dan memberikan banyak manfaat untuk seluruh orang</p>
  </div>
</div>

<Form className="kontak">
  <h2>Kontak Kami</h2>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Note</Form.Label>
    <Form.Control type="Note" placeholder="Note" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<footer>Copyright 2022 Pt.Jaya Konsultan Indonesia</footer>




 </>


  );
}
