import React, {ChangeEvent, FunctionComponent} from 'react'

interface OwnProps {
  onButtonClick: () => void
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  request: string
}

type Props = OwnProps;

const Request: FunctionComponent<Props> = (props) => {

  return (<>
    <button
      onClick={props.onButtonClick}
    >
      Request
    </button>
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.onInputChange}
    />
    <div>{props.request}</div>
    </>);
};

export default Request;
