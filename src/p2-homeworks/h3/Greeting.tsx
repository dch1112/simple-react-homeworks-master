import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";


type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : ''; // need to fix with (?:)
  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser()
    }
  }
  return (
    <div>
      <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyPress={keyPressHandler} error={error}/>
      <div>
        <SuperButton onClick={addUser}>add</SuperButton>
      </div>
      {/*<div className={s.errorText}>{error}</div>*/}
      <div>Total users: {totalUsers}</div>
    </div>
  );
}

export default Greeting;
