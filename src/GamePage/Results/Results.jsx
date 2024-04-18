import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import styles from "./Results.module.scss";
import { useEffect, useState } from "react";
import { USER_TOKENS_AMOUNT } from "../../../utils/data";

const Results = ({ isVictory, setIsVictory, onStart }) => {
  const [tokensAmount, setTokensAmount] = useState(0);

  useEffect(() => {
    setTokensAmount(localStorage.getItem(USER_TOKENS_AMOUNT));
  }, []);

  const playAgain = () => {
    onStart();
    setIsVictory(false);
  };

  return (
    <div className={styles.resultsWrapper}>
      {isVictory ? (
        <>
          <p className={styles.congrats}>CONGRATULATIONS, YOU WON!!!</p>
          <p>
            And got <span className={styles.congrats}>+1</span> token. Want
            more?
          </p>
        </>
      ) : (
        <p>I&#39;m sorry, you are out of time :(</p>
      )}
      <Button text="PLAY AGAIN" onClick={playAgain} />
      {tokensAmount && (
        <button className={styles.transferButton}>
          Transfer tokens to your wallet
        </button>
      )}
    </div>
  );
};

Results.propTypes = {
  isVictory: PropTypes.bool,
  setIsVictory: PropTypes.func,
  onStart: PropTypes.func,
};

export default Results;
