import { useState } from "react";
import styles from "./Game.module.scss";
import Time from "../Time/Time";

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  return (
    <div className={styles.gamePage}>
      <header className={styles.header}>
        <div>Open Welcome</div>
        <Time
          isGameStarted={isGameStarted}
          setIsGameFinished={setIsGameFinished}
        />
        <div>NEO tokens: 8</div>
      </header>
      <div className={styles.gameField}>
        {!isGameStarted ? (
          <div className={styles.preStartText}>
            <p>You have only 1 min to win.</p>
            <p>If it is ok, press</p>
            <button
              className={styles.startButton}
              onClick={() => setIsGameStarted(true)}
            >
              START
            </button>
          </div>
        ) : isGameFinished ? (
          <div>RESULTS</div>
        ) : (
          <div>GAME STARTED</div>
        )}
      </div>
    </div>
  );
};

export default Game;
