// import './Player.css'

import { useState } from "react"

function Player({ finalScore, playerNum }) {
    const [score, setScore] = useState(0)

    const incrementScore = () => {
        setScore(previousScore => previousScore + 1)
    }

    const isWinner = score >= finalScore

    return (
        <div>
            <span>Player{playerNum}: {score}</span>
            <button type="button" onClick={incrementScore}>+1</button>
            {isWinner && <span>WINNER!</span>}
        </div>
    )
}

export default Player
