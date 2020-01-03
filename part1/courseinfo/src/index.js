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

    // Just modifying what we pass in to the components so that it still works using the above ARRAY!
    return (
        <div>
        	<Header course={course}/>
            <Content  
                part1={parts[0].name}
                part2={parts[1].name}
                part3={parts[2].name}
                exercises1={parts[0].exercises}  
                exercises2={parts[1].exercises}  
                exercises3={parts[2].exercises}  
            />

            <Total 
                exercises1={parts[0].exercises}  
                exercises2={parts[1].exercises}  
                exercises3={parts[2].exercises}
            />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))