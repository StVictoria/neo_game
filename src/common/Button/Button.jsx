import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ link, text }) => {
  return link.length !== 0 ? (
    <Link className={styles.button} to={link}>
      {text}
    </Link>
  ) : (
    <button className={styles.button}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
