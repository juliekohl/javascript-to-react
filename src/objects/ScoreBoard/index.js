import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";

function ScorerBoard() {
  return `
    <header class="score-board">
      ${PlayerName("Player 1")}
      ${VsPlayer()}
      ${PlayerName("Player 2")}
    </header>
  `;
}

export default ScorerBoard;