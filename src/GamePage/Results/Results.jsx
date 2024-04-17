import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import styles from "./Results.module.scss";

const Results = ({ isVictory }) => {
  return (
    <div className={styles.resultsWrapper}>
      {isVictory ? (
        <>
          <p>
            <b>CONGRATULATIONS, YOU WON!!!</b>
          </p>
          <p>And got +1 token. Want more?</p>
        </>
      ) : (
        <p>I&#39;m sorry, you are out of time :(</p>
      )}
      <Button text="START AGAIN" />
      <button className={styles.transferButton}>
        Transfer tokens to your wallet
      </button>
    </div>
  );
};

Results.propTypes = {
  isVictory: PropTypes.bool,
};

export default Results;