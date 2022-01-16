import React from 'react';

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Content = (props) => (
  <div>
    <p>
      {props.content1}
    </p>
    <p>
      {props.content2}
    </p>
    <p>
      {props.content3}
    </p>
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content
        content1={part1 + ' ' + exercises1}
        content2={part2 + ' ' + exercises2}
        content3={part3 + ' ' + exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;
