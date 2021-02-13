import React, { FunctionComponent } from 'react';
import HW12 from '../../h12/HW12'
import HW13 from '../../h13/HW13'

interface OwnProps {}

type Props = OwnProps;

const JuniorPlus: FunctionComponent<Props> = (props) => {

  return (<div>
    <HW12 />
    <HW13 />
  </div>);
};

export default JuniorPlus;
