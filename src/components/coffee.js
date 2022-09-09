import React from 'react'
import ToolBar from './child/toolbar'
import { ThemeContext, themes } from './context'


export default function Coffee () {
  return (
    <ThemeContext.Provider value={themes.light}>
      <ToolBar />
    </ThemeContext.Provider>
  )
}