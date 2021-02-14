import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(100)

  const superRangeChange = (event: ChangeEvent<{}>, value: number | number[]) => {
    if (typeof value === 'number') {
      if (value < value2) setValue1(value)
    } else {
      if (value[0] < value2) setValue1(value[0])
      if (value1 < value[1]) setValue2(value[1])
    }
  }

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div>
        <SuperRange
          onChangeRange={superRangeChange}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>

      <div>
        <SuperDoubleRange
          onChangeRange={superRangeChange}
          valueArr={[value1, value2]}
          // сделать так чтоб value1 и value2 изменялось
        />
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
