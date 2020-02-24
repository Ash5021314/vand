import React, {useEffect, useState} from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import doors from '../interiorDoors.json'

const InteriorDoors = () => {
  const [door, setDoors] = useState([])
  useEffect(() => {
    setDoors(doors)
  }, [])
  return (
    <>
      <h2 className="prodHeader">Межкомнатные двери</h2>
      <CardDeck>
        {!door.length ? <h2>Loading...</h2> : (
          <Row>
            {
              door.reverse().slice(0, 4).map((res, index) => {
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
                        <Card.Text>
                          {res.description.substring(0, 100) + '․․․'}
                        </Card.Text>
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
        <Button variant="info" className="buttonCenter">увидеть больше</Button>
      </CardDeck>
    </>
  )
}

export default InteriorDoors