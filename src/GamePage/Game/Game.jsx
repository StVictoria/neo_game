import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Game.module.scss";
import { useEffect, useState } from "react";

const Game = ({
  cards,
  openedCards,
  setOpenedCards,
  matchedCards,
  setMatchedCards,
}) => {
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    const cardsCopy = [...cards];
    for (let i = cardsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }
    setShuffledCards(cardsCopy);
  }, []);

  // card: {id: number, value: number}
  const onCardClick = (card) => {
    if (!openedCards[0]) {
      // если нет открытых карточек
      setOpenedCards([card]); // устанавливаем первую
    } else {
      // если открыта уже одна карточка
      setOpenedCards((prevOpened) => {
        const newOpenedState = [...prevOpened, card]; // добавляем новую карточку в текущий массив к 1й открытой
        if (card.value === newOpenedState[0].value)
          // и если они совпадают, то добавляем в массив match их айди
          setMatchedCards((prevMatched) => [
            ...prevMatched,
            newOpenedState[0].id,
            newOpenedState[1].id,
          ]);
        return newOpenedState;
      });
      setOpenedCards([]); // очищаем массив с открытыми карточками, тк их должно быть не больше двух
    }
  };

  const renderCards = () => {
    return shuffledCards.map((card) => {
      const isOpened =
        openedCards[0]?.id === card.id ||
        openedCards[1]?.id === card.id ||
        matchedCards.includes(card.id);
      return (
        <div
          key={card.id}
          id={card.id}
          className={cn(styles.card, {
            [styles.opened]: isOpened,
          })}
          onClick={() => onCardClick({ id: card.id, value: card.value })}
        >
          {isOpened ? card.value : "?"}
        </div>
      );
    });
  };

  return <div className={styles.gameWrapper}>{renderCards()}</div>;
};

Game.propTypes = {
  cards: PropTypes.array,
  openedCards: PropTypes.any,
  matchedCards: PropTypes.arrayOf(PropTypes.number),
  setOpenedCards: PropTypes.func,
  setMatchedCards: PropTypes.func,
};

export default Game;
