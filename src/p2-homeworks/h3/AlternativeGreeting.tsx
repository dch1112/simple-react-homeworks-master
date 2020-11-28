import React, {useState} from "react";
import {UserType} from "./HW3";

type AlternativeGreetingPropsType = {
  users: Array<UserType>
}

const AlternativeGreeting: React.FC<AlternativeGreetingPropsType> = ({users}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      {!!users.length && <button onClick={() => setVisible(!visible)}>{visible ? "Hide users" : "Show users"}</button>}
      {visible && users.map(user => <div key={user._id}>
        {user.name}
      </div>)}

    </div>
  );
}

export default AlternativeGreeting;
