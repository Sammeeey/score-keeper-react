// import './Players.css'

import { useState } from "react"
import Player from "./Player"

const getUuid = () => crypto.randomUUID()

const players = [
    {id: getUuid(), score: 0},
    {id: getUuid(), score: 0},
    {id: getUuid(), score: 0},
]

function Players({amount}) {
    const winningScore = 3
    const playerAmountArr = [...Array(amount).keys()]
    const [scores, setScores] = useState(playerAmountArr.map(player => ({id: getUuid(), score: 0})))

    const incrementScore = (id) => {
        setScores(previousScores => previousScores.map((score, i) => {
            if (score.score === id){
                previousScores[i].score += 1
            }
        }))
    }

    // const resetScores = () => {
    //   setStartScore(previousScore => previousScore = 0)    
    // }

    return (
        <>
        {scores.map((score, playerIndex) => (
            <Player key={score.id} playerNum={playerIndex+1} score={score.score} updateScore={() => incrementScore(score.id)} />
        ))}
        <button type="button"
        // onClick={resetScores}
        >reset</button>
        </>
    )
}

export default Players
