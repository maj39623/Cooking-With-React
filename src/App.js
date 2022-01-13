import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks"

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={ {backgroundColor: theme} }> 
    Counter
    <Counter initialCount={0} />
    Counter Hooks 
    <CounterHooks initialCount={3} />
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'
    })}>Toggle Theme</button>
    <div>Test Commit</div>
    </ThemeContext.Provider>
  )
}

export default App;
