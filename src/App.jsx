import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChallengeDetail from "./pages/ChallengeDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenges/:id" element={<ChallengeDetail />} />
    </Routes>
  );
}

