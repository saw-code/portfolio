import React from 'react';
import style from "../skills/Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Portfolio from "./portfolio/Portfolio";

const MyWorks = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Portfolio title="JS" description={text}/>
          <Portfolio title="CSS" description={text}/>
          <Portfolio title="React" description={text}/>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;