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
    console.log(playerAmountArr)

    const [players, setPlayers] = useState(playerAmountArr.map(player => ({id: getUuid(), score: 0})))

    return (
        <>
        {players.map((player, i) => (
            <Player key={player.id} finalScore={finalScore} playerNum={i+1} />
            ))}
        <Player />
        </>
    )
}

export default Players
