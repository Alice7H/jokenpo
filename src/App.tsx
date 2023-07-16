import { useState } from 'react';
import './App.css'
import { CountDownTimer, Restart, ShowPlayer } from './components';
import { Player } from './types/Player';
import { calculateWinner, player1, player2 } from './utils/helper';

import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [players, setPlayers] = useState<Player[]>([player1, player2]);
  const firstPlayer = players[0];
  const lastPlayer = players[1];

  const getResult = ( newPlayer: Player) => {
    setPlayers([...players].map(object => {
      return object.id === newPlayer.id ? newPlayer : object;
    }))
  }

  const optionsToast: ToastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    closeOnClick: true,
    theme: "dark",
  }

   const calculateResults = () => {
    const choices = players.map(player => player.choose);
    const result = calculateWinner(choices);
    toast.success(result, optionsToast);
  }

  return (
    <>
      <h1>JoKenPô</h1>
      <div className='board'>
        { !firstPlayer.ready
          ? <ShowPlayer key={firstPlayer.id} getResult={getResult} initialPlayer={firstPlayer} />
          : (players.map(player => (player !== firstPlayer && !player.ready)
            && <ShowPlayer key={player.id} getResult={getResult} initialPlayer={player} />
          ))
        }
        {lastPlayer.ready && (
          <>
            <CountDownTimer calculateResults={calculateResults} />
            <Restart />
          </>
         )
        }
      </div>
      <ToastContainer />
    </>
  )
}
