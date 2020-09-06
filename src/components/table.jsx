import React, { useState, useEffect } from 'react'
import axios from 'axios'
import avatar from '../img/avatar.jpg'
import Popup from './Popup'

const Table = () => {
  const apiUrl = 'http://localhost:3001/persons'
  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl)
      setData(result.data)
    }

    fetchData()
  }, [])

  const setOpenPopup = () => {
    setPopup(true)
  }

  const setClosePopup = () => {
    setPopup(false)
  }

  const deletePerson = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`).then((res) => {
      console.log(res) // статус

      const newData = data.filter((person) => person.id !== id)
      setData(newData)
    })
  }

  return (
    <section className="personal">
      <table className="personal__staff">
        <thead className="personal__staff-header">
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="personal__staff-body">
          {data.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <img src={avatar} alt="Аватар" className="personal__staff-body-avatar" />
                  {person.firstName}
                </td>
                <td>{person.lastName}</td>
                <td>
                  <button className="personal__staff-body-edit"></button>
                  <button
                    className="personal__staff-body-delete"
                    onClick={() => deletePerson(person.id)}></button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot className="personal__staff-footer">
          <tr>
            <td colSpan="3">
              <button className="personal__staff-footer-add" onClick={setOpenPopup}>
                Добавить сотрудника
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {popup && <Popup type="Создание" onClose={setClosePopup} />}
    </section>
  )
}

export default Table
