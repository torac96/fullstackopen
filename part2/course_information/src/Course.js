import React from 'react';

const Header = ({course}) => <h1>{course}</h1>

const Part = (props) => <p>{props.content}</p>

const Content = ({parts}) => (
  <div>
    {
      parts && parts.map( elem => 
        (
          elem.name && <Part key={elem.name} content={elem.name + ' ' + elem.exercises} /> 
        )
      )
    }
  </div>
)


const Course = ({course}) => {
  return (
		<div>
			<Header course={course.name} />
      <Content parts={course.parts} />
		</div>
	)
}

export default Course;