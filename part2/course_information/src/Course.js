import React from 'react';

const Header = ({course}) => <h1>{course}</h1>

const Part = (props) => <p>{props.content}</p>

const Content = ({parts}) => (
  <div>
    {
      parts && parts.map( elem => 
        (
          elem.name && <Part key={elem.name} content={elem.name + ' ' + (elem.exercises ? elem.exercises : '')} /> 
        )
      )
    }
  </div>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, value) =>{
    return (value.name && value.exercises>0 ) ? sum +value.exercises : sum
  }, 0)

  return (
    <b>total of {total} exercises</b>
  );
}

const Course = ({course}) => {
  return (
		<div>
			<Header course={course.name} />
      <Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

export default Course;