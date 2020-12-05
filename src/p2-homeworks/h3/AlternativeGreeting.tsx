import React, {useState} from "react";
import {UserType} from "./HW3";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AlternativeGreetingPropsType = {
  users: Array<UserType>
}

const AlternativeGreeting: React.FC<AlternativeGreetingPropsType> = ({users}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      {!!users.length && <SuperButton onClick={() => setVisible(!visible)}>{visible ? "Hide users" : "Show users"}</SuperButton>}
      {visible && users.map(user => <div key={user._id}>
        {user.name}
      </div>)}

    </div>
  );
}

export default AlternativeGreeting;
