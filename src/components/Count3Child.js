import React from 'react'

function Child (props) {
  const { click } = props
  console.log(click, 'child3count')
  console.log('子组件触发')
  const handleClick = () => {
    click('minus')
  }
  return (
    <div>Count3Child
      <button onClick={handleClick}>子组件-</button>
    </div>
  )
}
// 当父组件更新时候没有props影响到子组件时候 子组件不会更新
const Count3Child = React.memo(Child)
export default Count3Child