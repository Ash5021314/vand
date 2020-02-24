import React, {useState} from 'react'
import {Navbar} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './Header.css'
import {Link} from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бесплатный вызов замерщика</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>Заполните все поля</p>
          <Form className='flexCenter'>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ваше имя"/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Ваш телефон"/>
            </Form.Group>
            <Button className="custom-bg" type="submit" onClick={handleClose}>
              вызвать
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Navbar fixed="top" collapseOnSelect expand="md" className="backGround top" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            VANDOORS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-auto">
                <Link to="/">Главная</Link>
                <Link to="/advantage">Наши преимущества</Link>
                <Link to="/catalog">Каталог</Link>
                <Link to="/contact">Расположение</Link>
            </Nav>
            <Button className="custom-bg" onClick={handleShow}>Вызвать замерщика</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header