import { useState } from 'react';
import './App.css';
import Button from './SecondButton/SecondButton.jsx';
import './FirstButton/FirstButton.css';
import Hello from './Hello/Hello.jsx';
import FirstButton from './FirstButton/FirstButton.jsx';
import ThirdButton from './ThirdButton/ThirdButton.jsx';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <Hello name="Lili" />
      <p>
        Current value: <strong>{count}</strong>
      </p>
      <FirstButton onIncrement={handleIncrement} />
      <Button text="Link Button" type="simple" />
      <ThirdButton onReset={handleReset} disabled={count === 0} />
    </div>
  );
}

export default App;

