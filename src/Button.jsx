import styles from './Button.module.scss'
import PropTypes from 'prop-types';

const Button = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
};

export default Button
