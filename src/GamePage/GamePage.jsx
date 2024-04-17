import { useEffect, useState } from "react";
import styles from "./GamePage.module.scss";
import Time from "./Time/Time";
import Game from "./Game/Game";
import Results from "./Results/Results";

const cards = [
  { id: 1, img: "///", value: 100 },
  { id: 2, img: "///", value: 100 },
  { id: 3, img: "///", value: 200 },
  { id: 4, img: "///", value: 200 },
  // { id: 5, img: "///", value: 300 },
  // { id: 6, img: "///", value: 300 },
  // { id: 7, img: "///", value: 400 },
  // { id: 8, img: "///", value: 400 },
  // { id: 9, img: "///", value: 500 },
  // { id: 10, img: "///", value: 500 },
  // { id: 11, img: "///", value: 600 },
  // { id: 12, img: "///", value: 600 },
  // { id: 13, img: "///", value: 700 },
  // { id: 14, img: "///", value: 700 },
  // { id: 15, img: "///", value: 800 },
  // { id: 16, img: "///", value: 800 },
  // { id: 17, img: "///", value: 900 },
  // { id: 18, img: "///", value: 900 },
  // { id: 19, img: "///", value: 1000 },
  // { id: 20, img: "///", value: 1000 },
];

const GAME_STATUSES = {
  PRESTART: "prestart",
  STARTED: "started",
  FINISHED: "finished",
};

const GamePage = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUSES.PRESTART); // prestart, started, finished
  const [isVictory, setIsVictory] = useState(false);

  const [matchedCards, setMatchedCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]); // [{id: number, value: number}, {...}]

  const cardsAmount = cards.length;

  useEffect(() => {
    if (matchedCards.length === cardsAmount) {
      setIsVictory(true);
      setGameStatus(GAME_STATUSES.FINISHED);
      setMatchedCards([]);
      setOpenedCards([]);
    }
  }, [matchedCards.length]);

  return (
    <div className={styles.gamePage}>
      <header className={styles.header}>
        <div>Open Welcome</div>
        <Time
          isGameStarted={gameStatus === GAME_STATUSES.STARTED}
          isVictory={isVictory}
          onFinish={() => setGameStatus(GAME_STATUSES.FINISHED)}
        />
        <div>Matched: {matchedCards.length}</div>
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
