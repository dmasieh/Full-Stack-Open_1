import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
	<button onClick={props.onClick}>
		{props.text}
	</button>
)

// Now refactored each statistic into it's own component
const Statistic = (props) => <p><b>{props.category}</b>: {props.count}</p>

const Statistics = (props) => {
	if(props.good >= 1 && (props.neutral + props.bad === 0)){
        return (
			<>
				<h3>{props.title}</h3>	
				<Statistic category='Good Votes' count={props.good} />
				<Statistic category={props.total} count={props.good} />
				<p>There was only Good Votes, an Average of 1 and Positive Feedback.....so far</p>
			</>	
		)
	} else if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return <h1>No Feedback Given Yet</h1>
    } else {
        return (
			<>
				<h3>{props.title}</h3>	
				<Statistic category='Good Votes' count={props.good} />
				<Statistic category='Neutral votes' count={props.neutral} />
				<Statistic category='Bad votes' count={props.bad} />
				<Statistic category={props.total} count={props.good + props.neutral + props.bad} />
				<Statistic category='Average Score' count={(props.good + (props.bad * -1)) / (props.good + props.bad + props.neutral)} />
				<Statistic category={props.positive} count={((props.good / (props.good + props.neutral + props.bad)) * 100)+'%'} />
			</>
		)
	}
}	   

const App = () => {
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)

  	return (
    	<div>
			<h3>Please Give Feedback</h3>
			<Button text='Good' onClick={() => setGood(good + 1)} />
			<Button text='Neutral' onClick={() => setNeutral(neutral+ 1)} />
			<Button text='Bad' onClick={() => setBad(bad + 1)} />
			<Statistics 
				title='Statistics of Feedback'
				total='Total # of Votes'
				positive='Percentage of Positive Feedback'
				good={good} neutral={neutral} bad={bad} 
			/>
		</div>
  	)
}

ReactDOM.render(<App />, document.getElementById('root'));