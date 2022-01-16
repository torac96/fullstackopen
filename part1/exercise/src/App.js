import React from 'react';

const Header = (props) => <h1>{props.course}</h1>

const Total = (props) => <p>Number of exercises {props.total}</p>

const Part = (props) => <p> {props.content.name} {props.content.exercises} </p>

const Content = (props) => (
  <div>
    <Part content={props.content1} />
    <Part content={props.content2} />
    <Part content={props.content3} />
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        content1={part1}
        content2={part2}
        content3={part3}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;
