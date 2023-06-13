import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDelete}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.find(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    setCards(cards.filter(c => c._id !== card._id));
  }

  React.useEffect(() => {
    api.getCardsInfo()
    .then((items) => {
      setCards(items);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" alt="Аватарка" src={currentUser.avatar} />
        </div>
        <div className="profile__heading">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
        </div>
        <p className="profile__subtitle">{currentUser.about}</p>
        <button className="profile__add-btn" type="button" aria-label="Добавить место" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))
        }
      </section>
    </main>
  )
}