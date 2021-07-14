import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import TextGame from "./src/components/TextGame";
import BoardGame from "./src/components/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

const htmlTextGame = TextGame();
console.log(htmlTextGame);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame); 
