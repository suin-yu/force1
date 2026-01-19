import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatbotBtn.css';
import chatbotImg from '../../assets/img/home/chatbot.png'; // Adjusted path based on find_by_name result

const ChatbotBtn = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsActive(true);
        // Reset glow effect
        setTimeout(() => setIsActive(false), 1200);

        // Navigate with delay
        setTimeout(() => {
            navigate('/chatbot');
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

export default ChatbotBtn;
