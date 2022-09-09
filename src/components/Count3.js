import React, { useState } from 'react'
import Count3Child from './Count3Child'
export default function Count3 () {
  const [num, setNum] = useState(1);
  // const handleClick = useCallback(() => {
  //   setNum(num + 2)
  // }, [])
  const handleClick = () => {
    setNum(num + 2)
  }
  const childClick = (val) => {
    console.log(val)
    setNum(num - 1)
  }
  return (
    <>
      <Count3Child click={childClick} />
      <div>{num}</div>
      <button onClick={handleClick}>+</button>
    </>
  )
}
