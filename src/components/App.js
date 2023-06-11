import logo from '../images/__logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithFom';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState();
  return (
    <div className="page">
      <div className="root">
        <Header logo={logo}/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="text" className="popup__input popup__input_type_name" id="name-input" placeholder="Имя" name="title" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
          </div>
          <div className="popup__section">
            <input type="text" className="popup__input popup__input_type_job" id="job-input" placeholder="О себе" name="subtitle" required minLength="2" maxLength="200" />
            <span className="popup__input-error job-input-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="text" className="popup__input popup__input_type_title" id="card-title" placeholder="Название" name="cardTitle" required minLength="2" maxLength="30" />
            <span className="popup__input-error card-title-error"></span>
          </div>
          <div className="popup__section">
            <input type="url" className="popup__input popup__input_type_link" id="card-link" placeholder="Ссылка на картинку" name="cardLink" required />
            <span className="popup__input-error card-link-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="url" className="popup__input popup__input_type_link" id="avatar-link" placeholder="Ссылка на картинку" name="avatarLink" required />
            <span className="popup__input-error avatar-link-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" buttonContent="Да" titleExtraStyleClass="popup__title_type_delete">
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
}

export default App;
