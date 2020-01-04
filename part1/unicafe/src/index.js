import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Refactored buttonn into a component to be 
// called later, as done earlier in the lesson
const Button = (props) => (
	<button onClick={props.onClick}>
		{props.text}
	</button>
)

const App = () => {
  	// save clicks of each button to own state
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)

  	return (
    	<div>
			<h3>give feedback</h3>
			<Button text='Good' onClick={() => setGood(good + 1)} />
			<Button text='Neutral' onClick={() => setNeutral(neutral+ 1)} />
			<Button text='Bad' onClick={() => setBad(bad + 1)} />
			<h3>statistics</h3>		    		
			<p>good votes: {good}</p>
			<p>neutral votes: {neutral}</p>
			<p>bad votes: {bad}</p>
		</div>
  	)
}

ReactDOM.render(<App />, document.getElementById('root'));