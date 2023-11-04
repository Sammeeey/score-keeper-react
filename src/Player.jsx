// import './Player.css'

import { useState } from "react"

function Player({ score, finalScore, playerNum, playerId, onPlayerUpdate }) {

    const incrementScore = () => {
        onPlayerUpdate(previousPlayers => previousPlayers.map(player => {
            if (player.id === playerId){
                return ({...player, score: player.score +1})
            } else {
                return player
            }
        }))
    }

    const isWinner = score >= finalScore

    const checkWinner = () => {
        onPlayerUpdate(previousPlayers => previousPlayers.map(player => {
            if (player.id === playerId){
                return ({...player, isWinner: true})
            } else {
                return player
            }
        }))}

    return (
        <div>
            <span>Player{playerNum}: {score}</span>
            <button type="button" onClick={() => {incrementScore(); checkWinner()}} disabled={isWinner}>+1</button>
            {isWinner && <span>WINNER!</span>}
        </div>
    )
}

export default Player
