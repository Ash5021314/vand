import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Footer from '../Components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Interior from './Interior'
import Iron from './Iron'
import './Catalogs.css'
import { connect } from 'react-redux'
import { getDoors } from '../store/actions/doorsAction'

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
  const [ doors, setDoors ] = useState([])
  const classes = useStyles()
  let selectedCategory = 'interior'

  useEffect(() => {
    props.getDoors()
  }, [])

  useEffect(() => {
    if (props.location.pathname === '/catalogs/iron') {
      selectedCategory = 'iron'
    }

    setDoors(props.doors.filter(item => item.category === selectedCategory))
  }, [ props.doors ])

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
                if ('interior' === res.category) {
                  return <Interior key={index} res={res}/>
                }
                return <Iron key={index} res={res}/>
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

const mapStateToProps = state => {
  return {
    doors: state.doors,
  }
}

export default connect(mapStateToProps, { getDoors })(Catalogs)
