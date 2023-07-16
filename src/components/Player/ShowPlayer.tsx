import { MouseEvent, useState} from "react";
import { Card } from "../index";
import { Options } from "../../types/Options";
import { Player } from "../../types/Player";

interface IForm {
  initialPlayer: Player;
  getResult: (p: Player) => void;
}

export function ShowPlayer({initialPlayer, getResult}: IForm) {
  const [player, setPlayer] = useState<Player>(initialPlayer);

  function handleClick(event: MouseEvent<HTMLElement>) {
    type selectedOption = keyof typeof Options;
    const selected = Options[event.currentTarget.id as selectedOption ];
    setPlayer({...player, choose: selected, ready: true});
    getResult({...player, choose: selected, ready: true});
  }

  return(
    <>
      <h2>Selecione sua opção {player.name}</h2>
      <Card onClick={handleClick} />
    </>
  );
}