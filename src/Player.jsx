// import './Player.css'

import { useState } from "react"


function Player({playerNum, winningScore, score, updateScore}) {
    let isWinner = score >= winningScore

    // const updateScore = () => {
    //     setScores(previousScore => previousScore + 1)
    // }


    return (
        <div>
        <span>{`Player${playerNum}:`} {score}</span>
        <button type="button" onClick={updateScore}>+1</button>
        {isWinner ? 'WINNER' : null}
        </div>
    )
}

export default Player
