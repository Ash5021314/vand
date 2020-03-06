import React, {useState} from 'react'
import data from '../data'
import Button from '@material-ui/core/Button'
import Table from 'react-bootstrap/Table'
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

const AdminSlider = () => {
  const [selectedDoor, setSelectedDoor] = useState(null)

  const onLittleChange = (value, arrayName, name, index) => {
    setSelectedDoor(data.images.slideImages)
    setSelectedDoor((selectedDoor) => {
      const newArray = [...selectedDoor]
      console.log(newArray)
      const field = newArray[index]
      field[name] = value

      return {
        ...selectedDoor,
        [arrayName]: newArray,
      }
    })
  }
  const classe = useStyle()
  return (
    <>
      <Table striped bordered hover>
        <thead>
        <tr className="text-light bg-dark">
          <th>Дополнительные фото</th>
          <th>Обнавить</th>
          <th>Удалить</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <input type="file"/>
          </td>
          <td>
            <Button variant="contained" color="primary">
              Добавить
            </Button>
          </td>
        </tr>
        {data.images.slideImages && data.images.slideImages.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  alt="Remy Sharp"
                  src={item.name}
                  className={classe.adminDoor}
                />
                <input type="file" name="sliderImage"
                       onChange={(event) => {
                         onLittleChange(event.target.value, 'slideImages', 'name', index)
                       }}
                />
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
          )
        })}
        </tbody>
      </Table>
    </>
  )
}

export default AdminSlider