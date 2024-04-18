import { useEffect, useState } from "react";
import styles from "./GamePage.module.scss";
import Time from "./Time/Time";
import Game from "./Game/Game";
import Results from "./Results/Results";
import { GAME_STATUSES, cards } from "../data";

const GamePage = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUSES.PRESTART); // prestart, started, finished
  const [isVictory, setIsVictory] = useState(false);

  const [matchedCards, setMatchedCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]); // [{id: number, value: number}, {...}]

  const [neoTokensAmount, setNeoTokensAmount] = useState(0);

  const cardsAmount = cards.length;

  useEffect(() => {
    setNeoTokensAmount(+localStorage.getItem("neo_tokens"));
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardsAmount) {
      setIsVictory(true);
      setGameStatus(GAME_STATUSES.FINISHED);
      setMatchedCards([]);
      setOpenedCards([]);
      setNeoTokensAmount((prevAmount) => {
        const newAmount = prevAmount + 1;
        localStorage.setItem("neo_tokens", newAmount);
        return newAmount;
      });
    }
  }, [matchedCards.length]);

  return (
    <div className={styles.gamePage}>
      <header className={styles.header}>
        <div>Matched: {matchedCards.length}</div>
        <Time
          isGameStarted={gameStatus === GAME_STATUSES.STARTED}
          isVictory={isVictory}
          onFinish={() => setGameStatus(GAME_STATUSES.FINISHED)}
        />
        <div>NEO tokens: {neoTokensAmount}</div>
      </header>
      <div className={styles.gameField}>
        {gameStatus === GAME_STATUSES.STARTED ? (
          <Game
            cards={cards}
            openedCards={openedCards}
            matchedCards={matchedCards}
            setOpenedCards={setOpenedCards}
            setMatchedCards={setMatchedCards}
          />
        ) : gameStatus === GAME_STATUSES.FINISHED ? (
          <Results
            isVictory={isVictory}
            setIsVictory={setIsVictory}
            onStart={() => setGameStatus(GAME_STATUSES.STARTED)}
          />
        ) : (
          <div className={styles.preStartText}>
            <p>You have only 1 min to win.</p>
            <p>If it is ok, press</p>
            <button
              className={styles.startButton}
              onClick={() => setGameStatus(GAME_STATUSES.STARTED)}
            >
              START
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
