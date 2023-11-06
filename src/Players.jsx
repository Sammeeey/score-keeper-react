// import './Players.css'

import { useState } from "react"
import Player from "./Player"

const getUuid = () => crypto.randomUUID()


function Players({amount=4, finalScore=3}) {
    const playerAmountArr = [...Array(amount).keys()]

    const [players, setPlayers] = useState(playerAmountArr.map(player => ({id: getUuid(), score: 0, isWinner: false})))

    const resetScores = () => {
        setPlayers(prevPlayers => prevPlayers.map(player => (
            {...player, score: 0}
        )))
    }

    const gameOver = players.find(player => player.isWinner)

    return (
        <>
        {players.map((player, i) => (
            <Player key={player.id}  score={player.score} finalScore={finalScore} playerNum={i+1} playerId={player.id} onPlayerUpdate={setPlayers} gameOver={gameOver} />
            ))}
        <button type="button" onClick={resetScores}>reset</button>
        </>
    )
}

export default Players
