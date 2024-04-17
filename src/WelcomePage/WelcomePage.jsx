import { useEffect, useState }from "react";
import Button from "../common/Button/Button";
import TypeElement from "../common/TypeElement/TypeElement";
import cn from "classnames";
import styles from "./WelcomePage.module.scss";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowStartButton(true);
    }, 17000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <>
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
          "And if you complete it in limited time, I will pay you some coins called NEO.",
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
        <Button link='game' text="LET'S START" />
      </div>

      <Link to='game' className={styles.skip}>SKIP</Link>
    </>
  );
};

export default WelcomePage;
