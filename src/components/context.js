import React from "react";
export const themes = {
  light: {
    color: 'red',
    background: '#ccc'
  },
  dark: {
    color: 'yellow',
    background: 'blue'
  }
}

export const ThemeContext = React.createContext(themes)
