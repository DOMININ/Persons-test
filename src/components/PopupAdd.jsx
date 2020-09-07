/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const PopupAdd = ({ onClose, onUpdateData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const addPerson = async () => {
    const onlyWords = /^[a-zа-яё]+$/i;

    if (onlyWords.test(firstName) && onlyWords.test(lastName)) {
      const persona = {
        firstName,
        lastName,
      };

      await axios.post('http://localhost:3001/persons/', persona);

      onUpdateData();
    } else {
      alert('В полях могут быть только буквы');
    }
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="popup__title">Добавление сотрудника</h2>
        <div className="wrapper">
          <button className="popup__back" onClick={onClose}>
            Назад к списку
          </button>
          <input
            type="text"
            placeholder="Введите имя сотрудника"
            className="popup__input"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите фамилию сотрудника"
            className="popup__input"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button className="popup__save" onClick={() => addPerson()}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupAdd;
