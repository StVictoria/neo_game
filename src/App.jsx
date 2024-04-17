import { Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage/WelcomePage";
import GamePage from "./GamePage/GamePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="game" element={<GamePage />} />
      <Route path="*" element={<div>Ooops, wrong page</div>} />
    </Routes>
  );
}

export default App;
