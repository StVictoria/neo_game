import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Time = ({ isGameStarted, setIsGameFinished }) => {
  const [timeLimit, setTimeLimit] = useState(4); // seconds

  let timer;

  const getRemainingTime = () => {
    let remainingMinutes = Math.floor(timeLimit / 60);
    let remainingSeconds = String(timeLimit % 60);
    return `${remainingMinutes}:${remainingSeconds.padStart(2, "0")}`;
  };

  const startTimer = () => {
    timer = setInterval(() => {
      setTimeLimit((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setIsGameFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (isGameStarted) {
      startTimer();
    }
  }, [isGameStarted]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, []);

  return <div>{getRemainingTime()}</div>;
};

Time.propTypes = {
  isGameStarted: PropTypes.bool,
  setIsGameFinished: PropTypes.func,
};

export default Time;
