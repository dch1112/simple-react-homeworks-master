import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Slider} from '@material-ui/core'
import s from '../c7-SuperRange/SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (event: ChangeEvent<{}>, value: number | number[]) => void | undefined
  valueArr?: [number, number]
  min?: number
  max?: number
  step?: number
  disable?: boolean
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, valueArr, className,
    min, max, step, disable,
    // min, max, step, disable, ...
  }
) => {
  // сделать самому, можно подключать библиотеки

  const finalRangeClassName = `${s.range} ${className ? className : ''}`

  return (
    <>
      <Slider
        className={finalRangeClassName}
        value={valueArr}
        onChange={onChangeRange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        min={min}
        max={max}
        step={step}
        disabled={disable}
      />
    </>
  )
}

export default SuperDoubleRange
