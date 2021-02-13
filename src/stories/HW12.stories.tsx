import HW12 from '../p2-homeworks/h12/HW12'
import React from 'react'
import {Provider} from 'react-redux'
import store from '../p2-homeworks/h10/bll/store'

export default {
  title: 'HW12'
}

export const HW12Story = () => {
  return <Provider store={store}>
    <HW12/>
  </ Provider>
}