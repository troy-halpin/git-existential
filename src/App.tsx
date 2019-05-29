import * as React from 'react'
import './App.css'
const existential_data = require('./devs_gazing_into_the_abyss.json')

interface AppProps {}

const getRandomValue = () => Math.floor(existential_data.length * Math.random())

export const App: React.FC<AppProps> = () => {
  const [index, setIndex] = React.useState(getRandomValue())
  return (
    <div className="app">
      <div>{existential_data[index].subject}</div>
      <div>{`-${existential_data[index].name}`}</div>
      <button
        onClick={() => setIndex(getRandomValue())}
        style={{ margin: '8px', padding: '8px' }}
      >
        Git Existential
      </button>
    </div>
  )
}
