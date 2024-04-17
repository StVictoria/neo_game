import { useState } from "react";
import WelcomePage from "./WelcomeWindow/WelcomeWindow";
import GamePage from "./GamePage/GamePage";

function App() {
  const [isWelcomeShowed, setIsWelcomeShowed] = useState(true);

  const handleCloseWelcomeWindow = () => {
    setIsWelcomeShowed(false);
  };

  return (
    <>
      <GamePage />
      <WelcomePage
        isWelcomeShowed={isWelcomeShowed}
        onClose={handleCloseWelcomeWindow}
      />
    </>
  );
}

export default App;
