export default function Card (props) {
  return (
    <div className="card">
      <img className="card__image" src={props.card.link} onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__heart-area">
          <button className="card__heart-btn" type="button" aria-label="Оценить"></button>
          <p className="card__heart-count">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="card__trash-btn" type="button" aria-label="Удалить"></button>
    </div>
  )

  function handleClick() {
    props.onCardClick(props.card);
  }
}