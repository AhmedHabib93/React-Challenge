import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Avatar from "./Components/Avatar";
import Intro from "./Components/Intro";
import SkillList from "./Components/SkillList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
