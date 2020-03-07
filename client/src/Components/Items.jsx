import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import './Items.css'
import doors from '../doors'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Items = () => {
  const [ironDoor, setIronDoors] = useState({})
  const [interiorDoor, setInteriorDoors] = useState({})


  let iron = doors.filter(item => {
    if (item.category === 'iron') {
      return item
    }
  })
  let interior = doors.filter(item => {
    if (item.category === 'interior') {
      return item
    }
  })
  useEffect(() => {
    setIronDoors(iron)
    setInteriorDoors(interior)
  }, [])
  return (
    <>
      <Container>
        <h2 className="prodHeader">Межкомнатные двери</h2>
        <CardDeck>
          {!ironDoor.length ? <h2>Loading...</h2> : (
            <Row style={{width: '100%'}}>
              {
                ironDoor.reverse().slice(0, 4).map((res, index) => {
                  return (<Col xs={6} md={3} key={index}>
                      <Card>
                        <div className="flip-box">
                          <div className="flip-box-inner">
                            <div className="flip-box-front">
                              <Card.Img variant="top" src={res.frontImage}
                                        style={{height: '100%'}}/>
                            </div>
                            <div className="flip-box-back">
                              <Card.Img variant="top" src={res.backImage}
                                        style={{height: '100%'}}/>
                            </div>
                          </div>
                        </div>
                        <Card.Body className="alignCenter">
                          <Card.Title>{res.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <div className="text-muted alignCenter ">{res.price} <span>р.</span></div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          )}
          <Button variant="info" className="buttonCenter"><Link to="catalogs/iron2"
                                                                style={{color: 'white', textDecoration: 'none'}}>увидеть
            больше</Link></Button>
        </CardDeck>
        <h2 className="prodHeader">Входные двери</h2>
        <CardDeck>
          {!interiorDoor.length ? <h2>Loading...</h2> : (
            <Row>
              {
                interiorDoor.reverse().slice(0, 4).map((res, index) => {
                  return (<Col xs={6} md={3} key={index}>
                      <Card>
                        <div className="flip-box">
                          <div className="flip-box-inner">
                            <div className="flip-box-front">
                              <Card.Img variant="top" src={res.frontImage}
                                        style={{height: '100%'}}/>
                            </div>
                            <div className="flip-box-back">
                              <Card.Img variant="top" src={res.backImage}
                                        style={{height: '100%'}}/>
                            </div>
                          </div>
                        </div>
                        <Card.Body className="alignCenter">
                          <Card.Title>{res.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <div className="text-muted alignCenter ">{res.price} <span>р.</span></div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          )}
          <Button variant="info" className="buttonCenter"><Link to="catalogs/iron"
                                                                style={{color: 'white', textDecoration: 'none'}}>увидеть
            больше</Link></Button>
        </CardDeck>
      </Container>

    </>
  )
}

export default Items