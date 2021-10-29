import './style.css';

function PlayerScore(points = 0){
    return `
      <ol class="player-score" data-points="${points}">
        <li class="point">Um</li>
        <li class="point">Dois</li>    
        <li class="point">Três</li>    
      </ol>  
    `;
}

export default PlayerScore;