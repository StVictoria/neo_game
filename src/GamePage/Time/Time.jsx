import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Time = ({ isGameStarted, isVictory, setIsGameFinished }) => {
  const [timeLimit, setTimeLimit] = useState(180); // seconds

  const timerRef = useRef(null);

  const getRemainingTime = () => {
    let remainingMinutes = Math.floor(timeLimit / 60);
    let remainingSeconds = String(timeLimit % 60);
    return `${remainingMinutes}:${remainingSeconds.padStart(2, "0")}`;
  };

  const finishGame = () => {
    clearInterval(timerRef.current);
    setIsGameFinished(true);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLimit((prevTime) => {
        if (prevTime === 0) {
          finishGame();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    isVictory && finishGame();
  }, [isVictory]);

  useEffect(() => {
    if (isGameStarted) {
      startTimer();
    }
  }, [isGameStarted]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return <div>{getRemainingTime()}</div>;
};

Time.propTypes = {
  isGameStarted: PropTypes.bool,
  isVictory: PropTypes.bool,
  setIsGameFinished: PropTypes.func,
};

export default Time;
