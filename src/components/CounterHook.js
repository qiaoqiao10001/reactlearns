import React, { useState, useEffect } from 'react'

export default function Counter (props) {
  const [initNum, setInitNum] = useState(() => {
    let { initialState } = props
    if (initialState > 100) {
      return initialState + 100
    } else {
      return initialState + 10
    }

  })

  useEffect(() => {
    console.log(num, 'effect 执行')
    // return () => {
    //   cleanup
    // };
  });

  const [num, setnum] = useState(0);
  const iTc = {
    name: 'zq',
    age: 23
  }
  const [tc, setTc] = useState(iTc)
  const handleClick = () => {
    setnum(() => {
      if (num < 2) {
        return num + 1
      } else {
        // debugger
        // const newNum = num += 3
        return num + 3
      }
    })
  }
  const handleClick2 = () => {
    // setTc(() => {
    //   return {
    //     ...iTc,
    //     name: 'dada'
    //   }
    //   // tc.name = 'dada'
    //   // ...tc
    // })
    setTc({ ...iTc, name: 'jija' })
  }
  const handleClick3 = () => {
    setInitNum(initNum + 1)
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={handleClick}>add</button>

      <p>{tc.name}</p>
      <p>{tc.age}</p>
      <button onClick={handleClick2}>add2</button>


      <p>{initNum}</p>
      <button onClick={handleClick3}>add3</button>
    </div>
  )
}