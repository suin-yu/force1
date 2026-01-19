import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WritBtn.css';
import writBtnImg from "../../assets/img/community/post/icon_write.png"; // Fixed path based on requirements

const WritBtn = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsActive(true);

        // Reset glow effect
        setTimeout(() => setIsActive(false), 1200);

        // Navigate to write page
        navigate('/community/post/write');
    };

    return (
        <div
            className={`writ-btn-container ${isActive ? 'active-glow' : ''}`}
            onClick={handleClick}
        >
            <div className="writ-border-glow"></div>
            <div className="writ-inner">
                <img
                    className="icon-writ"
                    src={writBtnImg}
                    alt="Write"
                />
            </div>
        </div>
    );
};

export default WritBtn;
