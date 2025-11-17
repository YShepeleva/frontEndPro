import './ImageCard.css';

export default function ImageCard({ img, votes, onVote }) {
    return (
      <div className="card">
        <img src={img} alt="emoji" className="card-image" />
        <p>Votes: {votes}</p>
        <button onClick={onVote}>Vote</button>
      </div>
    );
  }
  

