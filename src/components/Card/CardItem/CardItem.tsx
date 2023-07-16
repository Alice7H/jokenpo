import { Item } from "../Card";

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