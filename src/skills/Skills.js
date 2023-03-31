import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
  let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
  "A accusamus, architecto assumenda blanditiis commodi consectetur " +
  "eum fugit hic illo incidunt maiores modi molestias mollitia nulla" +
  " quidem quis rerum, voluptate voluptatibus!"

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title="JS" description={text}/>
          <Skill title="CSS" description={text}/>
          <Skill title="React" description={text}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;