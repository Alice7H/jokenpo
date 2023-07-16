import { Options } from "../types/Options"

export const player1 = {
  id: '1232',
  name: 'Player 1',
  wins: 0,
  loses: 0,
  ready: false,
  choose: Options.rock,
}
export const player2 = {
  id: '3217',
  name: 'Player 2',
  wins: 0,
  loses: 0,
  ready: false,
  choose: Options.rock,
}

export const calculateWinner = (choices: Options[]) => {
  if(choices[0] == choices[1]){
    return ('Empate');
  }else if(
    choices[0] == 0 && choices[1] == 1 ||
    choices[0] == 1 && choices[1] == 2 ||
    choices[0] == 2 && choices[1] == 0
    ) {
    return ('Jogador 1 ganhou');
  }else {
    return ('Jogador 2 ganhou');
  }
}