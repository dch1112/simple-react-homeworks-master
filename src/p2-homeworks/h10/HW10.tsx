import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import loadingAnimation from "./loading-animation.gif"
import style from './HW10.module.css'

function HW10() {
  const state = useSelector<AppStoreType, LoadingStateType>(state => state.loading)
  const dispatch = useDispatch()
  const loading = state.isLoading;

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => dispatch(loadingAC(false)), 2000)
    console.log("loading...");
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      {loading
        ? (
          <div>
            <img
              src={loadingAnimation}
              alt="Loading Animation"
              className={style.loadingAnimation}
            />
          </div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  );
}

export default HW10;
