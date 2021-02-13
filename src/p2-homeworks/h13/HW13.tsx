import React, {ChangeEvent, FunctionComponent, useState} from 'react'
import Request from './Request'
import {requestAPI} from './requests-api'

const HW13: FunctionComponent = (props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [request, setRequest] = useState<string>('')

  const onButtonClick = () => {
    setRequest('Loading...')
    requestAPI.request(checked)
      .then(res => {
        console.log({...res})
        setRequest(`receive response: ${JSON.stringify(res.data.errorText)}`)
      })
      .catch(rej => {
        console.log({...rej})
        setRequest(`receive error: ${JSON.stringify(rej.response ? rej.response.data.errorText : rej.message)}`)
      })
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
  }

  return (<>
    <hr/>
    <div>homeworks 13</div>
    <Request
      onButtonClick={onButtonClick}
      onInputChange={onInputChange}
      checked={checked}
      request={request}
    />
  </>)
}

export default HW13
