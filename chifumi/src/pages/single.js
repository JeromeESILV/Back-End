import '../App.css';

window.addEventListener('load', () => {
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const elements = document.querySelectorAll('.Arcade');
    elements.forEach((element) => {
      element.style.backgroundColor = color;
      color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
  });
  

function Single() {
    const handleClick = (event) => {
      // handle the button click event
    };
    
    return (
      <div className="GameZone">
        <button className="Arcade" onClick={handleClick}>Rock</button>
        <button className="Arcade" onClick={handleClick}>Paper</button>
        <button className="Arcade" onClick={handleClick}>Scissors</button>
      </div>
    );
  }
export default Single;