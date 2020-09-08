/* eslint-disable react/prop-types */
import React from 'react';

const Toast = ({ status }) => {
  const code = {
    200: 'success',
    400: 'incorrect',
    404: 'not-found',
    500: 'server-error',
  };

  return (
    <div className={`notification-container ${code[status]}`}>
      {status === 200 ? (
        <p className="notification-message">Сотрудник удален!</p>
      ) : (
        <p className="notification-message">Ошибка программы, повторите позже</p>
      )}
    </div>
  );
};

export default Toast;
