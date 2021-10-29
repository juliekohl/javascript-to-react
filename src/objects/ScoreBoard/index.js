import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";

function ScorerBoard() {
  return `
    <header class="score-board">
      ${PlayerName("Player 1")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore()}
      ${PlayerName("Player 2")}
    </header>
  `;
}

export default ScorerBoard;