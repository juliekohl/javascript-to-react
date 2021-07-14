import CardGame from "../../CardGame";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  console.log($htmlBoardGame);

  return $htmlBoardGame;
}

export default BoardGame;