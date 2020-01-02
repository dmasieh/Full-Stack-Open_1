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
            <Part exerciseNum='1' exerciseName={props.part1} exerciseCount={props.exercises1} />
            <Part exerciseNum='2' exerciseName={props.part2} exerciseCount={props.exercises2} />
            <Part exerciseNum='3' exerciseName={props.part3} exerciseCount={props.exercises3} />
        </div>
	)
}


const Total = (props) => {
    console.log(props)
    //console logs only display in browser console, not terminal console
    return(
        <div>
            <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    // instead of creating 6 more constant variables, let's just create 3 that are objects, that pass in 2 key-value pairs each
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

    // Just modifying what we pass in to the components so that it still works using the above
    return (
        <div>
        	<Header course={course}/>
            <Content 
                part1={part1.name} 
                part2={part2.name}
                part3={part3.name}   
                exercises1={part1.exercises}  
                exercises2={part2.exercises}  
                exercises3={part3.exercises}  
            />

            <Total 
                exercises1={part1.exercises}  
                exercises2={part2.exercises}  
                exercises3={part3.exercises}
            />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))