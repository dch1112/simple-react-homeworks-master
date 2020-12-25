import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import s from './Routes.module.css'
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export type PathType = {
  [key: string]: {
    link: string
    name: string
  }
}

export const PATH: PathType = {
  PRE_JUNIOR: {link: "/pre-junior", name: "preJunior"},
  JUNIOR: {link: "/junior", name: "Junior"},
  JUNIOR_PLUS: {link: "/junior-plus", name: "Junior Plus"},
  // add paths
}

function Routes() {
  return (
    <div className={s.content}>
       {/*Switch выбирает первый подходящий роут*/}
      <Switch>

        в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR
        exact нужен чтоб указать полное совподение (что после "/" ничего не будет)
        <Route path={"/"} exact render={() => <Redirect to={PATH["PRE_JUNIOR"].link}/>}/>

        <Route path={PATH["PRE_JUNIOR"].link} render={() => <PreJunior/>}/>
        <Route path={PATH["JUNIOR"].link} render={() => <Junior/>}/>
        <Route path={PATH["JUNIOR_PLUS"].link} render={() => <JuniorPlus/>}/>
        // add routes

        у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
        <Route render={() => <Error404/>}/>

      </Switch>
    </div>
  );
}

export default Routes;
