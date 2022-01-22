import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const Display = ({ title = '', text }) => {
  const hiTitle = (title !== '') ? <h1>{title}</h1> : '';
  return (
    <>
      { title !== '' &&
        <h1>{title}</h1>  
      }
      <div>{text}</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    const number = () => Math.floor(Math.random() * anecdotes.length);
    setSelected(number)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] = copy[selected] + 1
    setPoints(copy)
  }

  const highestVote = () => {
    const max = Math.max(...points);
    const index = points.indexOf(max);
    return anecdotes[index];
  }

  const max = points.reduce(function(prev, current) {
    return (prev > current) ? prev : current
  }) 

  return (
    <>
      <Display text={anecdotes[selected]} />
      <Display text={'has' + points[selected] + 'votes'} />
      <Button handleClick={() => handleVoteClick()} text="vote" />
      <Button handleClick={() => handleNextClick()} text="Next anecdote" />
      <Display title="Anecdote with most votes" text={highestVote()} />
    </>
  )
}

export default App;