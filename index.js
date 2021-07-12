import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/CardGame";
import TextGame from "./src/components/TextGame";

const $root = document.querySelector("#root");

// const $htmlCardGame = CardGame() + CardGame(); // se quiser usar mais uma vez.
const $htmlCardGame = CardGame();
console.log($htmlCardGame);

const htmlTextGame = TextGame();
console.log(htmlTextGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame + $htmlCardGame + $htmlCardGame + $htmlCardGame + $htmlCardGame + $htmlCardGame); // se queser usar mais uma vez, mudando a estrateja.
// $root.insertAdjacentHTML("beforeend", $htmlCardGame);
