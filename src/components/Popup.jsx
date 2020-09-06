import React from 'react'

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="popup__title">{props.type} сотрудника</h2>
        <div className="wrapper">
          <button className="popup__back" onClick={props.onClose}>
            Назад к списку
          </button>
          <input type="text" placeholder="Введите имя сотрудника" className="popup__input" />
          <input type="text" placeholder="Введите фамилию сотрудника" className="popup__input" />
          <button className="popup__save">Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default Popup
