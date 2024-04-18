import { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import TypeElement from "../common/TypeElement/TypeElement";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./WelcomeWindow.module.scss";

const WelcomePage = ({ isWelcomeShowed, onClose }) => {
  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowStartButton(true);
    }, 17000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className={cn(styles.welcomeWindow, {
        [styles.hidden]: !isWelcomeShowed,
      })}
    >
      <div className={styles.firstLine}>
        <TypeElement strings={["Hello and welcome to the game!"]} />
      </div>
      <TypeElement
        delay={3000}
        strings={["Here you need to find matching pairs of different cards."]}
      />
      <TypeElement
        delay={7000}
        strings={[
          "And if you complete it in limited time, I will pay you some tokens called NEO.",
        ]}
      />
      <TypeElement delay={13000} strings={["Pretty obvious, huh"]} />
      <div className={styles.lastLine}>
        <TypeElement delay={15000} strings={["Are you ready?"]} />
      </div>

      <div
        className={cn(styles.startButtonWrapper, {
          [styles.show]: showStartButton,
        })}
      >
        <Button text="LET'S START" onClick={onClose} />
      </div>

      <button className={styles.skip} onClick={onClose}>
        SKIP
      </button>

      {/* <div className={styles.noticeMessage}>
        <p>
          <b>NOTICE: </b>it is just a pet project. NEO works in Ropsten Testnet.
        </p>
        <p>Progress is saved in your browser local data.</p>
        <p>If you clear the data, you will loose the progress :(</p>
      </div> */}
    </div>
  );
};

WelcomePage.propTypes = {
  isWelcomeShowed: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WelcomePage;
