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
    return (
        <p>
            Part {props.exerciseNum}: {props.exerciseName}, {props.exerciseCount} exercises
        </p>
    )
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
    return(
        <div>
            <p>Total Number of exercises: {
                props.parts[0].exercises +
                props.parts[1].exercises + 
                props.parts[2].exercises
            }
            
            </p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    // Instead of creating 3 constant objects like earlier, how about just creating a single array constant that can be iterated through!
    const parts = [
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

    // Just modifying what we pass in to the components so that We're doing more work splitting
    // out the array values in the above components
    return (
        <div>
        	<Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))