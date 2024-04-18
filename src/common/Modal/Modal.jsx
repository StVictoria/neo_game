import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={cn(styles.modalWrapper, { [styles.opened]: isOpen })}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={onClose} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
