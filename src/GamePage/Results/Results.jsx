import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import styles from "./Results.module.scss";

const Results = ({ isWon }) => {
  return (
    <div className={styles.resultsWrapper}>
      {isWon ? (
        <p>
          <b>Congratulations, you won!!!</b>
        </p>
      ) : (
        <p>I&#39;m sorry, you are out of time :(</p>
      )}
      <Button text="START AGAIN" />
      <button className={styles.transferButton}>
        TRANSFER TOKENS TO YOUR WALLET
      </button>
    </div>
  );
};

Results.propTypes = {
  isWon: PropTypes.bool,
};

export default Results;
