import React from 'react'
import s from './HW12.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../h10/bll/store'
import {changeThemeC} from './bll/themeReducer'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'

const themes = ['dark', 'red', 'some']

function HW12() {
  const theme = useSelector<AppStoreType, string>(store => store.theme.theme) // useSelector
  const dispatch = useDispatch()

  const onChangeCallback = (theme: string) => {
    dispatch(changeThemeC(theme))
  }
  // useDispatch, onChangeCallback

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12
            </span>
      <div>
        <SuperSelect
          options={themes}
          onChangeOption={onChangeCallback}
          value={theme}
        />
      </div>
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr/>
    </div>
  )
}

export default HW12
