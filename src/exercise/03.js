// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider {...props} value={value} />
}

function useCountContext() {
  return React.useContext(CountContext)
}

function CountDisplay() {
  const [count] = useCountContext()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCountContext()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
