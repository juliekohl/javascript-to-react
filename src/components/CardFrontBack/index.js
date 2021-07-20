import CardGame from '../CardGame';
import './style.css';

function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
    ${CardGame()}
    ${CardGame()}
    </article>
  `;
}

export default CardFrontBack;