export default function PopupWithForm (props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Закрыть попап" onClick={props.onClose}></button>
        <h2 className={`popup__title ${props.titleExtraStyleClass}`}>{props.title}</h2>
        <form className="popup__form" name={`${props.name}`}>
          {props.children}
          <button type="submit" className="popup__submit-btn">{props.buttonContent || 'Сохранить'}</button>
        </form>
      </div>
    </div>
  )
}