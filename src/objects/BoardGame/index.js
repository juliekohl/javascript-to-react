import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
  const $CardFrontBack = CardFrontBack();
  const $htmlContent = $CardFrontBack.repeat(amountCards);

  return /*html*/`
    <section class="board-game">
      ${$htmlContent}
    </section>`;
}

export default BoardGame;