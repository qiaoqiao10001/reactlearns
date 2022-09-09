import React, { useReducer } from 'react'

const initState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }

    case 'minus':
      return { count: state.count - 1 }

    default:
      break;
  }
}


export default function Counter2 () {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: 'minus' })} >=</button>
      <button onClick={() => dispatch({ type: 'add' })}> +</button>
    </>
  )
}