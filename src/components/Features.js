import React from 'react'
import { Nav, Offcanvas, Container, NavDropdown, Form, Navbar, Button, FormControl, Col, Row, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import sekolah from '../assets/sekolah.jpg'
import kampus from '../assets/kampus.jpg'
import table from '../assets/table.jpg'
import pemerintahan from '../assets/pemerintahan.jpg'
import komputer from '../assets/komputer.jpg'
import sertifikat from '../assets/sertifikat.jpg'
import konsul from '../assets/konsul.jpg'
import kertas from '../assets/kertas.jpg'
import percetakan from '../assets/percetakan.jpg'
import tulis from '../assets/tulis.jpg'
import mesin from '../assets/mesin.jpg'
import konstruksi from '../assets/konstruksi.jpg'
import jalan from '../assets/jalan.jpg'
import jembatan from '../assets/jembatan.jpg'
import layang from '../assets/layang.jpg'




export default function Features() {
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

{/* Penunjang  Pendidikan */}
<Container className="skill">
        <h1>Penunjang Pendidikan</h1>
        <p>Soft skill education training, psychology test, tutoring, etc</p>
        <Row>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={sekolah} />
  <Card.Body>
<Card.Title>Sekolah</Card.Title>
  </Card.Body>
</Card></Col>
        
        
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={kampus} />
  <Card.Body>
    <Card.Title>Kampus</Card.Title>
  </Card.Body>
</Card>
</Col>
            
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={table}/>
  <Card.Body>
    <Card.Title>Perusahaan & Umum</Card.Title>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pemerintahan}/>
  <Card.Body>
    <Card.Title>Pemerintahan</Card.Title>
  </Card.Body>
</Card>
</Col>
        </Row>
</Container>

{/* End  Penunjang */}

{/* Awal Jasa */}
<Container className="skill">
        <h1>Jasa</h1>
        <p>Soft skill education training, psychology test, tutoring, etc</p>
        <Row>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={komputer} />
  <Card.Body>
<Card.Title>Pendidikan Komputer</Card.Title>
  </Card.Body>
</Card></Col>
        
        
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={sekolah} />
  <Card.Body>
    <Card.Title>Sekolah,Kampus,Perusahaan dan Institusi Umum</Card.Title>
  </Card.Body>
</Card>
</Col>
            
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={sertifikat}/>
  <Card.Body>
    <Card.Title>Jasa Sertifikasi</Card.Title>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={konsul}/>
  <Card.Body>
    <Card.Title>Konsultasi Manajemen</Card.Title>
  </Card.Body>
</Card>
</Col>
        </Row>
</Container>
{/* End Jasa */}

{/* Awal Perdagangan */}
<Container className="skill">
        <h1>Perdagangan</h1>
        <p>Soft skill education training, psychology test, tutoring, etc</p>
        <Row>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={kertas} />
  <Card.Body>
<Card.Title>Perdagangan kertas</Card.Title>
  </Card.Body>
</Card></Col>
        
        
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={percetakan} />
  <Card.Body>
    <Card.Title>Hasil percetakan dan penerbitan</Card.Title>
  </Card.Body>
</Card>
</Col>
            
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={tulis}/>
  <Card.Body>
    <Card.Title>Alat tulis dan menggambar</Card.Title>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mesin}/>
  <Card.Body>
    <Card.Title>Perdagangan dan mesin besar</Card.Title>
  </Card.Body>
</Card>
</Col>
        </Row>
</Container>
{/* End Perdagangan */}

{/* Awal Konstruksi */}
<Container className="skill">
        <h1>Konstruksi</h1>
        <p>Soft skill education training, psychology test, tutoring, etc</p>
        <Row>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={konstruksi} />
  <Card.Body>
<Card.Title>Konstruksi gedung dan perkantoran</Card.Title>
  </Card.Body>
</Card></Col>
        
        
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={jalan} />
  <Card.Body>
    <Card.Title>Konstruksi jalan raya</Card.Title>
  </Card.Body>
</Card>
</Col>
            
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={jembatan}/>
  <Card.Body>
    <Card.Title>Konstruksi jembatan</Card.Title>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={layang}/>
  <Card.Body>
    <Card.Title>Konstruksi jalan layang</Card.Title>
  </Card.Body>
</Card>
</Col>
        </Row>
</Container>
{/* End Konstruksi */}

</>


  )
}
