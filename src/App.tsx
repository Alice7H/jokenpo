import { useState } from 'react';
import './App.css'
import { CountDownTimer } from './components';
import { Form } from './components/Player/Form';
import { Player } from './types/Player';
import { calculateWinner, player1, player2 } from './utils/helper';

export default function App() {
  const [players, setPlayers] = useState<Player[]>([player1, player2]);
  const firstPlayer = players[0];

  const getResult = ( newPlayer: Player) => {
    setPlayers([...players].map(object => {
      return object.id === newPlayer.id ? newPlayer : object;
    }))
  }

   const calculateResults = () => {
    const choices = players.map(player => player.choose);
    const result = calculateWinner(choices);
    alert(result);
    window.location.reload();
  }

  return (
    <>
      <h1>JoKenPo</h1>
      <div className='board'>
        { !firstPlayer.ready
          ? <Form key={firstPlayer.id} getResult={getResult} initialPlayer={firstPlayer} />
          : (players.map(player => (player !== firstPlayer && !player.ready)
            && <Form key={player.id} getResult={getResult} initialPlayer={player} />
          ))
        }
        {players[1].ready &&  <CountDownTimer calculateResults={calculateResults} />}
      </div>
    </>
  )
}
