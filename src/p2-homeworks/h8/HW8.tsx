import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
  {_id: 0, name: "Кот", age: 3},
  {_id: 1, name: "Александр", age: 66},
  {_id: 2, name: "Коля", age: 16},
  {_id: 3, name: "Виктор", age: 44},
  {_id: 4, name: "Дмитрий", age: 40},
  {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
  const [people, setPeople] = useState(initialPeople);

  const finalPeople = <table>
    <td>Name</td>
    <td>Age</td>
    {people.map(p => (
      <tr key={p._id}>
        <td>{p.name}</td>
        <td>{p.age}</td>
      </tr>
    ))}

  </table>


  const sortUp = () => {
    setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
  }
  const sortDown = () => {
    setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
  }
  const checkAge = (age: number) => {
    setPeople(homeWorkReducer(initialPeople, {type: "check", payload: age}))
  }

  return (
    <div>
      <hr/>
      homeworks 8

      {/*should work (должно работать)*/}

      {finalPeople}
      <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
      <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
      <div><SuperButton onClick={() => checkAge(18)}>check 18</SuperButton></div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  );
}

export default HW8;
