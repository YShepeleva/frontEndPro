import React, { useState } from 'react';
import ImageCard from './ImageCard';
import './EmojiVote.css';

export default function EmojiVote() {
    const [smiles, setSmiles] = useState([
        { id: 1, img: "/images_emojis/1.png", votes: 0 },
        { id: 2, img: "/images_emojis/2.png", votes: 0 },
        { id: 3, img: "/images_emojis/3.jpg", votes: 0 },
        { id: 4, img: "/images_emojis/4.png", votes: 0 },
        { id: 5, img: "/images_emojis/5.jpg", votes: 0 },
    ]);

    const [winner, setWinner] = useState(null);

    const handleVote = (id) => {
        const updated = smiles.map((smile) =>
            smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
        );
        setSmiles(updated);
    };

    const showResults = () => {
        const maxVotes = Math.max(...smiles.map((s) => s.votes));
        const winnerSmile = smiles.find((s) => s.votes === maxVotes);
        setWinner(winnerSmile);
    };

    return (
        <div className='container'>
            <h2>Обери улюблений смайл</h2>

            <div className='emoji-container'>
                {smiles.map((s) => (
                    <ImageCard
                        key={s.id}
                        img={s.img}
                        votes={s.votes}
                        onVote={() => handleVote(s.id)}
                    />
                ))}
            </div>

            <button className='btn' onClick={showResults}>
                Show Results
            </button>

            {winner && (
                <div className='result'>
                    Переможець:
                    <img
                        src={winner.img}
                        alt="winner"
                        style={{ width: 50, height: 50, marginLeft: 10 }}
                    />
                    (Кількість голосів: {winner.votes} )
                </div>
            )}
        </div>
    );
}
