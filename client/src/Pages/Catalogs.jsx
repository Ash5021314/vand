import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import allDoors from '../doors'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import {makeStyles} from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
}))
const Catalogs = props => {
  const [doors, setDoors] = useState([])
  const classes = useStyles()

  let selectedCategory = 'interior'
  useEffect(() => {
    if (props.location.pathname === '/catalogs/iron') {
      selectedCategory = 'iron'
    }
    setDoors(allDoors.filter(item => item.category === selectedCategory))
  }, [])
  // getDoors(url){
  //   fetch(url,{
  //   Response.
  //   setDoors(response)
  // }
  return (
    <>
      <Container>
        <h2 className="headTop">Каталог</h2>
        <CardDeck>
          {!doors.length ? (
            <h2>Loading...</h2>
          ) : (
            <Row>
              {doors.reverse().map((res, index) => {
                return (
                  <Col
                    xs={6}
                    md={3}
                    key={index}

                  >
                    <Link to="/DoorDesc">
                      <Card className="mb-5">
                        <div className="flip-box">
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
                                src={res.backImage}
                                style={{height: '100%'}}
                                alt={'a'}
                              />
                            </div>
                          </div>
                        </div>
                        <Card.Body className="alignCenter">
                          <Card.Title>{res.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <div className="text-muted alignCenter ">
                            {res.price} <span>р.</span>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </Row>
          )}
        </CardDeck>
        <div className={classes.root}>
          <Pagination count={10} size="large"/>
        </div>
      </Container>
      <Footer/>
    </>
  )
}

export default Catalogs
