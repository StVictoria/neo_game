import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Button from "./Button";
import TypeElement from "./TypeElement";
import cn from "classnames";

function App() {
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
    <main className={styles.main}>
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
        <Button text="LET'S START" />
      </div>

      {/* link to go to game page */}
      <div className={styles.skip}>SKIP</div>
    </main>
  );
}

export default App;
