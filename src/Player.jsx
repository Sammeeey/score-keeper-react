// import './Player.css'

import { useState } from "react"

function Player({ score, finalScore, playerNum, playerId, onPlayerUpdate, gameOver }) {

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
            if (player.id === playerId && player.score >= finalScore){
                return ({...player, isWinner: true})
            } else {
                return player
            }
        }))}

    return (
        <div>
            <span>Player{playerNum}: {score}</span>
            <button type="button" onClick={() => {incrementScore(); checkWinner()}} disabled={gameOver}>+1</button>
            {isWinner && <span>WINNER!</span>}
        </div>
    )
}

export default Player
