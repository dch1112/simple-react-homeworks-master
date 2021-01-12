import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FunctionComponent, ReactNode} from "react";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: ReactNode[] = options
    ? options.map((item, index) => {
      return <option
        key={index}
        className={s.superSelectOption}
      >
        {item}
      </option>
    })
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // onChange,
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  return (
    <select
      onChange={onChangeCallback} {...restProps}
      className={s.superSelectSelect}
    >
      {mappedOptions}
    </select>
  );
}

export default SuperSelect;
