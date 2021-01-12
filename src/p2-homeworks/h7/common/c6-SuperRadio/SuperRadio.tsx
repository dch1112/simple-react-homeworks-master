import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, ReactNode} from "react"
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && options && onChangeOption(e.currentTarget.value)
  }

  const mappedOptions: ReactNode[] = options ? options.map((o, i) => (
    <label
      key={i}
      className={s.superRadioLabel}
    >
      <input
        type={"radio"}
        name={name}
        checked={value === options[i]}
        value={o}
        onChange={onChangeCallback}
        className={s.superRadioInput}
      />
      {o}
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  );
}

export default SuperRadio
