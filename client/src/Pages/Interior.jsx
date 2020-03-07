import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const Interior = ({res}) => {
  console.log(res)
  return (
    <Col
      xs={6}
      md={3}
    >
      <Link to="/DoorDesc">
        <Card className="mb-5">
          <div className="flip-box fixed-item">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Card.Img
                  variant="top"
                  src={res.frontImage}
                  style={
                    {
                      height: '100%',
                    }
                  }
                />
              </div>
              <div className="flip-box-back">
                <Card.Img
                  variant="top"
                  src={res.otherColor[0].image}
                  style={{height: '100%'}}
                  alt={'a'}
                />
              </div>
            </div>
          </div>
          <Card.Body className="alignCenter">
            <Card.Title style={{color: 'grey', textDecoration: 'none'}}>{res.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="text-muted alignCenter ">
              {res.priceFront} <span>р.</span>
            </div>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  )
}

export default Interior