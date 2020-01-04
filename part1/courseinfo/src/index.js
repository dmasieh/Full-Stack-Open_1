import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    //console logs only display in browser console, not terminal console
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    console.log(props)
    //console logs only display in browser console, not terminal console
    return <p>Part {props.exerciseNum}: {props.exerciseName}, {props.exerciseCount} exercises</p>
}

const Content = (props) => {
    console.log(props)
    //console logs only display in browser console, not terminal console
	return (
		<div>
            <Part exerciseNum='1' exerciseName={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
            <Part exerciseNum='2' exerciseName={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
            <Part exerciseNum='3' exerciseName={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
        </div>
	)
}

const Total = (props) => {
    console.log(props)
    //console logs only display in browser console, not terminal console
    return <p>Total Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const App = () => {
    // Finally, we'll only pass in one variable constant, and still do the split out calls in the above components
    const course = {
        name: 'Half Stack application development',
        parts: [{
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
        }]
    }

    return (
        <div>
        	<Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))