import React from 'react'
import { Nav, Offcanvas, Container, NavDropdown, Form, Navbar, Button, FormControl, Col, Row } from "react-bootstrap";
import gedung from '../assets/gedung.jpg';
import legalitas from '../assets/legalitas.png'

export default function About() {
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

<Container>
  <Row>
  <Col>
  <h1>Tentang Kami</h1>
  <p>Kami memulai fokus dalam pelatihan Soft Skill & Hard Skill sejak
2011, terus bertumbuh lebih baik lagi hingga saat ini dalam
PT.Jaya Konsultan Indonesia.
Dengan Superteam, Motivator, Coach & Tutor yang
berpengalaman Lebih dari Sepuluh Tahun dalam dunia
pelatihan dan pendidikan. Kami juga telah bekerjasama dengan
ratusan perusahaan, instansi, kampus, sekolah dan telah
menghadirkan training kepada lebih dari 300.000 orang. Kami
berfokus pada pelatihan dan pengembangan Soft Skill, Hard
Skill serta menyediakan produk da jasa yang berkualitas serta
mengikuti perkembangan dan teknologi.
Kami yakin sepenuhnya bahwa Setiap
Perusahaan, Lembaga yang maju
karena yang dibangun Prioritas
adalah kualitas manusianya.
Kami akan terus tumbuh bersama Anda
dan saling menumbuhkan</p>
  </Col>
  <Col>
  <img src={gedung} alt=""/>
  </Col>
  </Row>
</Container>

<div className='profile'>
  <h1>Company Profile</h1>
  <ul>
    <li>Kegiatan Penunjang Pendidikan</li>
    <li>Pendidikan Lainnya Pemerintah</li>
    <li>Jasa Pendidikan Komputer</li>
    <li>Teknologi Informasi dan Komunikasi</li>
    <li>Jasa Sertifikasi</li>
    <li>Aktivasi Konsultan dan Manajemen Lainnya</li>
    <li>Perdagangan Kertas,Karton dan Barang dari Kertas/Karton</li>
    <li>Perdagangan Hasil Percetakan dan Penerbitan</li>
    <li>Perdagangan Alat Tulis Menulis dan Gambar</li>
    <li>Perdagangan Besar Mesin,Peralatan dan Perlengkapan Lainnya</li>
    <li>Konstruksi Gedung Perkantoran</li>
    <li>Konstruksi Jalan Raya</li>
    <li>Konstruksi Jembatan dan Jalan Layang</li>
  </ul>
</div>
    
<div className='legalitas'>
  <h1>Legalitas Pt.Jaya Konsultan Indonesia</h1>
  <img src={legalitas} alt=''/>
</div>
    
    </>
  )
}
