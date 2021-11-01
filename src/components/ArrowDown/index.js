import './style.css';

function ArrowDown(currentPlayer = 1) {
    return `
      <img
        class="arrow-down"
        data-currentPlayer="${currentPlayer}"
        src="images/IconArrowDown.png" 
        alt="Arrow down icon"
      >  
    `;
}
export default ArrowDown;