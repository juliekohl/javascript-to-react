import "./style.css";
import PlayerName from "../../components/PlayerName";

function ScorerBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player 1")}
      ${PlayerName("Player 2")}
    </header>
  `;
}

export default ScorerBoard;