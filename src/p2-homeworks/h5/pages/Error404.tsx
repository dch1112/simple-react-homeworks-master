import React from "react";
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";

function Error404() {
  return (
    <div className={s.errorPage}>
      <div>404</div>
      <div>Page not found!</div>
      <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
      <div className={s.homepage}><NavLink to={'/'}>Homepage</NavLink></div>
    </div>
  );
}

export default Error404;
