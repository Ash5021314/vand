import React from 'react'
import Table from 'react-bootstrap/Table'
import data from '../data'

import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  save: {
    float: 'right',
  },
  adminDoor: {
    height: '200px',
    marginLeft: '20px',
    marginRight: '50px',
  },
  adminBackDoor: {
    height: '100px',
    marginLeft: '20px',
    marginRight: '50px',
  },
  flex: {
    display: 'flex',
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexDirectionEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-End',
  },
  titleP: {
    fontWeight: 'bold',
  },
}))
const AboutAdmin = () => {
  const classe = useStyle()
  return (
    <>
      <Table striped bordered hover>
        <thead>
        <tr className="text-light bg-dark">
          <th>Имя</th>
          <th>Обнавить</th>
          <th>Удалить</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <img
              alt="Remy Sharp"
              src={data.images.about}
              className={classe.adminDoor}
            />
            <input type="file"/>
          </td>
          <td>
            <Button variant="contained" color="primary">
              Обнавить
            </Button>
          </td>
          <td>
            <Button variant="contained" color="secondary">
              Удалить
            </Button>
          </td>
        </tr>


        </tbody>
      </Table>
    </>
  )
}

export default AboutAdmin