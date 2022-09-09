import React, { useRef } from 'react'

export default function TextInput () {

  const inputEl = useRef(null)
  const onButtonClick = () => {
    console.log(inputEl)
    console.log(inputEl)
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>focus input</button>
    </>
  )
}
