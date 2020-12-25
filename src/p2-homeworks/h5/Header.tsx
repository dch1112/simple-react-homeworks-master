import React, {useState} from "react";
import s from './Header.module.css'
import Navbar from "./Navbar";

function Header() {
  const [isVisible, setVisible] = useState<boolean>(false)
  return (
    <div className={s.header}>
      <div className={s.dropbtn} onClick={() => setVisible(!isVisible)}>
        Select category
      </div>
      {isVisible && <Navbar onClick={() => setVisible(false)}/>}
    </div>
  );
}

export default Header;
