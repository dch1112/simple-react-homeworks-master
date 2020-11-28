import React from "react";
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  };// need to fix

  return (

      <div className={s[props.affair.priority]}
        // className={`${props.affair.priority === 'high' ? s.high : ''}
        // ${props.affair.priority === 'middle' ? s.middle : ''}
        // ${props.affair.priority === 'low' ? s.low : ''}`}
      >
        {props.affair.name}

        <button onClick={deleteCallback}>X</button>
      </div>


  );
}

export default Affair;