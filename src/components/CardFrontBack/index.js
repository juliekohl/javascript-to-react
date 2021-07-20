import CardGame from '../CardGame';
import './style.css';

function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
    ${CardGame()}
    ${CardGame("javascript", "Logo do JavaScript")}
    </article>
  `;
}

export default CardFrontBack;