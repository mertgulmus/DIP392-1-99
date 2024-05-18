import React, { useEffect, useState } from 'react';
import './History.style.scss';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];
        setHistory(sessionHistory);
    }, []);

    return (
        <div className="session-history">
            <h2>Session History</h2>
            {history.length === 0 ? (
                <p>No game sessions available.</p>
            ) : (
                <ul>
                    {history.map((session, index) => (
                        <li key={index}>
                            <p><strong>Session ID:</strong> {session.sessionID}</p>
                            <p><strong>Game Result:</strong> { session.gameResult === "win" ? `${session.playerID} won` : "draw" }</p>
                            <p><strong>Date:</strong> {new Date(session.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default History;
