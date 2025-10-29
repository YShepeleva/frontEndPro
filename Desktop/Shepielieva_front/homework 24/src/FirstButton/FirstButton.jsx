import './FirstButton.css'

export default function FirstButton({ onIncrement }) {
  return (
    <button onClick={onIncrement} className="myBtnFirst">
     +1
    </button>
  );
}


