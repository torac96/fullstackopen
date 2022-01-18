import React, { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistic = ({good, neutral, bad}) => (
  <>
    <h2>Statistic</h2>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
  </>
)

const App = () => {
  const title="Give feedback"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App