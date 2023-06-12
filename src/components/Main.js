import React from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((user) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    })
    .catch((err) => console.log(err));
  },[]
  )

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
          <img className="profile__avatar" alt="Аватарка" src={userAvatar} />
        </div>
        <div className="profile__heading">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
        </div>
        <p className="profile__subtitle">{userDescription}</p>
        <button className="profile__add-btn" type="button" aria-label="Добавить место" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))
        }
      </section>
    </main>
  )
}