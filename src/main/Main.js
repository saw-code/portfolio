import React from 'react';
import style from './Main.module.css';


const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={style.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>Дмитрий Пилявский</h1>
          <p>Frontend developer</p>
        </div>

        <div className={style.photo}></div>
      </div>
    </div>
  );
};

export default Main;