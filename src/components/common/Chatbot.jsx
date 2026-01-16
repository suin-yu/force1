import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';
import chatbotImg from "../../assets/img/home/chatbot.png";

const Chatbot = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();


    const handleClick = () => {
        setIsActive(true);

        // Reset glow effect
        setTimeout(() => setIsActive(false), 1200);

        // Navigate with delay
        setTimeout(() => {
            navigate('/ChatbotPg');
        }, 300);
    };

    return (
        <div
            className={`chatbot-btn-container ${isActive ? 'active-glow' : ''}`}
            onClick={handleClick}
        >
            <div className="chatbot-border-glow"></div>
            <div className="chatbot-inner">
                <img
                    className="icon-chatbot"
                    src={chatbotImg}
                    alt="Chatbot"
                />
            </div>
        </div>
    );
};

export default Chatbot;
