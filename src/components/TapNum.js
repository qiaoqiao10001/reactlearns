import React from 'react'
import { useState, useEffect } from 'react'

export default function TapNum () {
  const [age, setAge] = useState(0)
  function showed () {
    console.log('showed')
  }
  function hidden () {
    console.log('hidden')
  }
  function pageWatcher () {
    if (document.hidden) {
      hidden()
    } else {
      showed()
    }
  }
  useEffect(() => {
    // 这里直接移除监听函数因为useEffect外层直接是箭头函数
    window.addEventListener('visibilitychange', pageWatcher)
    return () => {
      window.removeEventListener('visibilitychange', pageWatcher)

    }
  })
  // const handleClick = () => {
  //   setNum(num + 1)
  // }
  return (
    <div>
      <p>{age}</p>
      {/* <button onClick={handleClick}>+</button> */}
    </div>
  )
}
