import { MouseEvent} from "react";

interface Item {
  id: string;
  name: string;
  imageSrc: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

interface ICardItem {
  object: Item;
}

export function CardItem({object}: ICardItem) {
  return(
    <div className="card-item">
      <button type="button"onClick={object.onClick} id={object.id}>
        <img src={object.imageSrc} className="logo" alt={object.name} />
      </button>
      <p>{object.name}</p>
    </div>
  );
}