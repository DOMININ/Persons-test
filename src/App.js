import React from 'react'
import './App.scss'
import avatar from './img/avatar.jpg'

const App = () => {
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
          <tr>
            <td>
              <img src={avatar} alt="Аватар" className="personal__staff-body-avatar" />
              Иван
            </td>
            <td>Иванов</td>
            <td>
              <button className="personal__staff-body-edit"></button>
              <button className="personal__staff-body-delete"></button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={avatar} alt="Аватар" className="personal__staff-body-avatar" />
              Петр
            </td>
            <td>Петров</td>
            <td>
              <button className="personal__staff-body-edit"></button>
              <button className="personal__staff-body-delete"></button>
            </td>
          </tr>
        </tbody>
        <tfoot className="personal__staff-footer">
          <tr>
            <td colSpan="3">
              <button className="personal__staff-footer-add">Добавить сотрудника</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="overlay">
        <div className="popup">
          <h2 className="popup__title">Создание сотрудника</h2>
          <div className="wrapper">
            <button className="popup__back">Назад к списку</button>
            <input type="text" placeholder="Введите имя сотрудника" className="popup__input" />
            <input type="text" placeholder="Введите фамилию сотрудника" className="popup__input" />
            <button className="popup__save">Сохранить</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
