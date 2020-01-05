import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    const { onClick, text } = props
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const random = () => Math.floor(Math.random() * 6)

const App = (props) => {
    const [selected, setSelected] = useState(random)
    const [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0))
    
    const handleClick = () => {
        const voteCopy = [...vote]
        voteCopy[selected] += 1
        setVote(voteCopy)
    }

    return (
        <div>
            <h3>Anecdote of the Day</h3>
            <p>{props.anecdotes[selected]}</p>
            <p><b>This Anecdote has: {vote[selected]} votes</b></p>
            <Button text='Next Anecdote' onClick={ () => setSelected(random) } />
            <Button text='Vote this Anecdote' onClick={ () => handleClick() } />
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)