import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import ScorerBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${ScorerBoard()}
    ${BoardGame(6)}
  `
); 
