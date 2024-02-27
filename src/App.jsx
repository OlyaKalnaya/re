
import { useState } from 'react';
import './App.css';

function App() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [state, setState] = useState(Math.floor(Math.random() * (100 - 0) + 0));
  const [color, setColor] = useState('black');

  const pushRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (1000 - 0) + 0);
    setNumbers([...numbers, randomNumber]);

  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>

      <ul>
        {numbers.map((num, idx) => <li key={idx}>{num}</li>)}
      </ul>
      <button onClick={pushRandomNumber}>Click me</button>

      <h3>{state}</h3>
      <button onClick={() => setState(Math.floor(Math.random() * (100 - 0) + 0))}>Get Random Number</button>

      <p style={{ color: color }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam labore vero ab. Aspernatur, amet? Aliquid expedita natus omnis,
        consectetur at a quis laudantium harum, non quaerat minus doloribus quasi quas.</p>
      <button onClick={() => setColor(getRandomColor)}>Change Color</button>

    </>
  );
}

export default App
