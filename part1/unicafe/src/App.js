import React, { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) =><tr><td>{text}</td><td>{value}</td></tr>

const Statistic = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  const average = (total / 3).toFixed(1);
  const positive = ((good / total) * 100).toFixed(1);

  if(total > 0){
    return (
      <>
        <h2>Statistic</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      <h2>Statistic</h2>
      <div>No feedback given</div>
    </>
  )
  
}

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