export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className="popup__image-holder">
        <button className = "popup__close-btn" type="button" aria-label="Закрыть попап" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card?.link || '#'} alt="Картинка из карточки" />
        <p className="popup__image-name">{props.card?.name || ''}</p>
      </div>
    </div>
  )
}