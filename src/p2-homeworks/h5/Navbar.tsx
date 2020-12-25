import React, {FunctionComponent} from 'react';
import s from "./Navbar.module.css";
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";

interface OwnProps {
  onClick: ()=> void
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {

  return (
    <div className={s.navbar}>
      {Object
        .keys(PATH)
        .map((category) => {
          return <div onClick={props.onClick}>
            <NavLink
              key={category}
              to={PATH[category].link}
              className={s.navItem}
              activeClassName={s.active}
            >
              {PATH[category].name}
            </NavLink>
          </div>


        })
      }
    </div>);
};

export default Navbar;
