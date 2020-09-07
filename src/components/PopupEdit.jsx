import React, { useState } from 'react'
import axios from 'axios'

const PopupEdit = ({ onUpdateData, onClose, person }) => {
  const [inputNameValue, setInputNameValue] = useState(person.name)
  const [inputLNameValue, setInputLNameValue] = useState(person.lname)

  const inputNameHandler = (e) => {
    setInputNameValue(e.target.value)
  }
  const inputLNameHandler = (e) => {
    setInputLNameValue(e.target.value)
  }

  const editPerson = async () => {
    let onlyWords = /^[a-zа-яё]+$/i

    if (onlyWords.test(inputNameValue) && onlyWords.test(inputLNameValue)) {
      const persona = {
        firstName: inputNameValue,
        lastName: inputLNameValue,
      }
      await axios.put(`http://localhost:3001/persons/${person.id}`, persona)

      onUpdateData()
    } else {
      alert('В полях могут быть только буквы')
    }
  }

  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="popup__title">Редактирование сотрудника</h2>
        <div className="wrapper">
          <button className="popup__back" onClick={onClose}>
            Назад к списку
          </button>
          <input
            type="text"
            placeholder="Введите имя сотрудника"
            className="popup__input"
            value={inputNameValue}
            onChange={(e) => inputNameHandler(e)}
            autoFocus
          />
          <input
            type="text"
            placeholder="Введите фамилию сотрудника"
            className="popup__input"
            value={inputLNameValue}
            onChange={(e) => inputLNameHandler(e)}
          />
          <button className="popup__save" onClick={editPerson}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupEdit
