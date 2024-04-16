import { ReactTyped } from "react-typed";

// eslint-disable-next-line
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
