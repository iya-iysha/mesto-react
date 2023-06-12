export default function Card ({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <div className="card">
      <img className="card__image" src={card.link} onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__heart-area">
          <button className="card__heart-btn" type="button" aria-label="Оценить"></button>
          <p className="card__heart-count">{card.likes.length}</p>
        </div>
      </div>
      <button className="card__trash-btn" type="button" aria-label="Удалить"></button>
    </div>
  )
}