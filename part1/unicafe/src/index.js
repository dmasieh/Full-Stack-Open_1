import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Refactored buttonn into a component to be 
// called later, as done earlier in the lesson
const Button = (props) => (
	<button onClick={props.onClick}>
		{props.text}
	</button>
)

const VoteStats = (props) => {
	if(props.good >= 1 && (props.neutral + props.bad === 0)){
        return (
			<>
				<h3>{props.stafTitle}</h3>	
				<p>Good Votes: {props.good}</p>
				<p>{props.totText}: {props.good}</p>
				<p>There was only Good Votes, an Average of 1 and Positive Feedback!</p>
				<p>.....so far</p>
			</>	
		)
	} else if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return <h1>No Feedback Given Yet</h1>
    } else {
        return (
			<>
				<h3>{props.stafTitle}</h3>	
				<p>Good votes: {props.good}</p>
				<p>Neutral votes: {props.neutral}</p>
				<p>Bad votes: {props.bad}</p>
				<p>{props.totText}: {props.good + props.neutral + props.bad}</p>
				<p>Average Score {
					(
						(props.good) + (props.bad * -1) 
					) 
						/
					( 
						(props.good) + (props.bad) + (props.neutral) 
					)
				}
				</p>
				<p>Percentage of Positive Feedback: {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
			</>
		)
	}
}	   

const App = () => {
  	// save clicks of each button to own state
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)

  	return (
    	<div>
			<h3>Please Give Feedback</h3>
			<Button text='Good' onClick={() => setGood(good + 1)} />
			<Button text='Neutral' onClick={() => setNeutral(neutral+ 1)} />
			<Button text='Bad' onClick={() => setBad(bad + 1)} />
			<VoteStats 
				totText='Total # of Votes' 
				stafTitle='Statistics of Feedback'
				good={good} 
				neutral={neutral} 
				bad={bad} 
			/>
		</div>
  	)
}

ReactDOM.render(<App />, document.getElementById('root'));