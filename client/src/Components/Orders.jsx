import React from 'react'
import Message from '../message'
import Table from 'react-bootstrap/Table'
import Button from '@material-ui/core/Button'

const Orders = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
        <tr className="text-light bg-dark">
          <th>Имя</th>
          <th>Телефон</th>
          <th>Удалить</th>
        </tr>
        </thead>
        <tbody>
        {
          Message.map((value, index) => {
            return (
              <tr key={index}>
                <td>
                  {value.name}
                </td>
                <td>
                  {value.phone}
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
            )
          })
        }

        </tbody>
      </Table>
    </>
  )
}

export default Orders