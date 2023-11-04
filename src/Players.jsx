// import './Players.css'

import { useState } from "react"
import Player from "./Player"

const getUuid = () => crypto.randomUUID()

const players = [
    {id: getUuid(), score: 0},
    {id: getUuid(), score: 0},
    {id: getUuid(), score: 0},
]

function Players({amount, finalScore}) {
    const playerAmountArr = [...Array(amount).keys()]

    const [players, setPlayers] = useState(playerAmountArr.map(player => ({id: getUuid(), score: 0})))

    return (
        <>
        {players.map((player, i) => (
            <Player key={player.id}  score={player.score} finalScore={finalScore} playerNum={i+1} playerId={player.id} onPlayerUpdate={setPlayers} />
            ))}
        <button type="button">reset</button>
        </>
    )
}

export default Players
