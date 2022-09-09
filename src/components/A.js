import React, { Component } from 'react'

export default class A extends Component {
  constructor() {
    super()
    this.watcher = this.watcher.bind(this)
  }
  watcher () {
    console.log('点击调用')
    this.innerFn()
    console.log('点击调用')
  }
  innerFn () {
    console.log('innerFN')
  }
  componentDidMount () {
    // 这里的watcher方法调用了另外一个函数，所以需要使用箭头函数修改watcher方法里面的this指向
    document.addEventListener('click', this.watcher)
  }
  componentWillUnmount () {
    console.log('移除 componentWillUnmount')
    document.removeEventListener('click', this.watcher)
  }
  render () {
    return (
      <div id='big'>
        这是一大段文字
        这是一大段文字
        这是一大段文字
        这是一大段文字

      </div>

    )
  }
}
