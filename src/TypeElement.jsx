import { ReactTyped } from "react-typed";
import PropTypes from 'prop-types';

TypeElement.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number
};

const TypeElement = ({ strings, delay }) => {
  return (
    <p>
      <ReactTyped
        startWhenVisible
        strings={strings}
        typeSpeed={40}
        showCursor={false}
        startDelay={delay || 0}
        // cursorChar="&#9608;"
      />
    </p>
  );
};

export default TypeElement;
