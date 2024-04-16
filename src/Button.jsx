import styles from './Button.module.scss'

// eslint-disable-next-line
const Button = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button
