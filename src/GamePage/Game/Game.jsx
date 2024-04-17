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
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    setShuffledCards(cardsCopy);
  }, []);

  const onCardClick = (card) => {
    if (!openedCards[0]) {
      setOpenedCards([card]);
    } else {
      setOpenedCards((prevOpened) => {
        const newOpenedState = [...prevOpened, card];
        if (card.value === newOpenedState[0].value)
          setMatchedCards((prevMatched) => [
            ...prevMatched,
            newOpenedState[0].id,
            newOpenedState[1].id,
          ]);
        return newOpenedState;
      });

      setOpenedCards([]);
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
