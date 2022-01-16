import React from 'react';

const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.content}</p>

const Content = (props) => (
  <div>
    {
      props.parts.map( elem => 
        (
          <Part key={elem.name} content={elem.name + ' ' + elem.exercises} /> 
        )
      )
    }
  </div>
)

const Total = (props) => {
  let total = 0;

  props.parts.forEach(value => {
    total += value.exercises
  }) 

  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
