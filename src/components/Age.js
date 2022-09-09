import React, { useState, useEffect } from 'react'

export default function Age () {
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log('useEffect')
  }, [])
  useEffect(() => {
    console.log('开始监听')
    return () => {
      console.log('取消监听')
    };
  }, [age]);
  function handleClick () {
    setAge(10)
  }
  return (
    <div onClick={handleClick}>{age} </div>
  )
}
