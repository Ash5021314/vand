export default {
  getDoors: () => {
    return fetch('/items')
      .then(res => res.json())
      .then(data => data)
  },
  deleteDoors: (_id) => {
    return fetch(`/door/${_id}`,
      {method: 'delete'})
      .then(res => res.json())
      .then(data => data)
  },
  updateDoor: (door) => {
    return fetch(`/door/${door._id}`,
      {
        method: "put",
        body: JSON.stringify(door),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
      .then(data => data)
  },
  createDoor: (door) => {
    return fetch(`/door/`,
      {
        method: "post",
        body: JSON.stringify(door),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
      .then(data => data)
  }
}