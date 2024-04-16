import styles from './Button.module.scss'
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string
};

const Button = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button
