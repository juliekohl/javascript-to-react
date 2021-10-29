import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function ScorerBoard() {
  return `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName("Player 1")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore(2)}
      ${PlayerName("Player 2")}
      ${ArrowDown()}
    </header>
  `;
}

export default ScorerBoard;