import paperImg from '../../assets/paper.png'
import rockImg from '../../assets/rock.png'
import scissorImg from '../../assets/scissor.png'
import { Fragment, MouseEvent } from 'react';
import { CardItem } from './CardItem/CardItem';

interface ICard {
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

export interface Item {
  id: string;
  name: string;
  imageSrc: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

export function Card ({onClick}: ICard) {
  const options = [
    {
      id: 'rock',
      name: 'Pedra',
      imageSrc: rockImg,
      onClick: onClick,
    },
    {
      id: 'scissor',
      name: 'Tesoura',
      imageSrc: scissorImg,
      onClick: onClick,
    },
    {
      id: 'paper',
      name: 'Papel',
      imageSrc: paperImg,
      onClick: onClick,
    }
  ]

  const index = Math.floor(Math.random() * 1000).toString();

  return (
    <div className="card">
      {
        options.map(opt =>
        <Fragment key={opt.id + index}>
          <CardItem
            object={opt}
          />
        </Fragment>
      )}
    </div>
  )
}