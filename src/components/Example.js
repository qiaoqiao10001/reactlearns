import React, { useState, useEffect } from 'react'

export default function Example () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect')
    document.title = `you click ${count} times`
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clickme</button>
    </div>
  )
}
