import React, { useState, useEffect } from 'react'
import axios from 'axios'
import avatar from '../img/avatar.jpg'
import PopupAdd from './PopupAdd'
import PopupEdit from './PopupEdit'
import Toast from './Toast'

const Table = () => {
  const apiUrl = 'http://localhost:3001/persons'
  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false)
  const [popupEdit, setPopupEdit] = useState(false)
  const [personEdit, setPersonEdit] = useState({})
  const [toast, setToast] = useState(false)
  const [toastStatus, setToastStatus] = useState()

  const fetchData = async () => {
    const result = await axios(apiUrl)
    setData(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const setOpenPopup = () => {
    setPopup(true)
  }

  const setClosePopup = () => {
    setPopup(false)
    setPopupEdit(false)
  }

  const setOpenPopupEdit = (id, name, lname) => {
    setPopupEdit(true)
    setPersonEdit({ id, name, lname })
  }

  const updateData = () => {
    setClosePopup()
    fetchData()
  }

  const deletePerson = (id, name, lname) => {
    const askToDelete = window.confirm(`Удалить сотрудника ${name} ${lname}?`)

    if (askToDelete) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then((res) => {
          setToastNotif(res.status)

          const newData = data.filter((person) => person.id !== id)
          setData(newData)
        })
        .catch((error) => {
          setToastNotif(error.response.status)
        })
    }
  }

  const setToastNotif = (status) => {
    setToastStatus(status)
    setToast(true)
    setTimeout(() => setToast(false), 2000)
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
                  <button
                    className="personal__staff-body-edit"
                    onClick={() =>
                      setOpenPopupEdit(person.id, person.firstName, person.lastName)
                    }></button>
                  <button
                    className="personal__staff-body-delete"
                    onClick={() =>
                      deletePerson(person.id, person.firstName, person.lastName)
                    }></button>
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
      {popup && <PopupAdd onUpdateData={updateData} onClose={setClosePopup} />}
      {popupEdit && (
        <PopupEdit person={personEdit} onUpdateData={updateData} onClose={setClosePopup} />
      )}
      {toast && <Toast status={toastStatus} />}
    </section>
  )
}

export default Table
