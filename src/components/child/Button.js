import React, { useContext } from 'react'
import { ThemeContext } from '../context'

export default function ThemeButton () {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div style={theme}>Theme</div>
  )
}
