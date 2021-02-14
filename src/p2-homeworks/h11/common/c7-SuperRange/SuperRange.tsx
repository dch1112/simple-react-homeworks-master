import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Slider} from '@material-ui/core'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (event: ChangeEvent<{}>, value: number | number[]) => void | undefined
  value?: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
  {
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange, onChangeRange,
    className, value,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e) // сохраняем старую функциональность

    onChangeRange && onChangeRange(e, +e.currentTarget.value)
  }

  const finalRangeClassName = `${s.range} ${className ? className : ''}`

  return (
    <>

      <Slider
        className={finalRangeClassName}
        value={value}
        onChange={onChangeRange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
      {/*<input*/}
      {/*  type={'range'}*/}
      {/*  onChange={onChangeCallback}*/}
      {/*  className={finalRangeClassName}*/}

      {/*  {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
      {/*/>*/}
    </>
  )
}

export default SuperRange
