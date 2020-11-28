import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";


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
      <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={keyPressHandler}/>
      <button onClick={addUser}>add</button>
      <div className={s.errorText}>{error}</div>
      <div>Total users: {totalUsers}</div>
    </div>
  );
}

export default Greeting;
