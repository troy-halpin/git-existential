import * as React from 'react'
import './App.css'
const existential_devs = require('./data/devs_gazing_into_the_abyss.json')
const existential_philosphers = require('./data/philosophers_gazing_into_the_abyss.json')

interface AppProps {}

const getRandomValue = (length: number) => Math.floor(length * Math.random())

export const App: React.FC<AppProps> = () => {
  const [index, setIndex] = React.useState(
    getRandomValue(existential_devs.length)
  )
  const [isDev, setIsDev] = React.useState(true)
  return (
    <div className="app">
      <div className="message">
        {isDev ? (
          <>
            <div>{existential_devs[index].subject}</div>
            <div>{`-${existential_devs[index].name}`}</div>
          </>
        ) : (
          <>
            <div>{existential_philosphers[index].quote}</div>
            <div>{`-${existential_philosphers[index].author}`}</div>
          </>
        )}
      </div>
      <div className="button-list">
        <button
          className="button"
          onClick={() => {
            setIndex(getRandomValue(existential_devs.length))
            setIsDev(true)
          }}
        >
          Git Existential
        </button>
        <button
          className="button"
          onClick={() => {
            setIndex(getRandomValue(existential_philosphers.length))
            setIsDev(false)
          }}
        >
          Get Existential
        </button>
      </div>
    </div>
  )
}
