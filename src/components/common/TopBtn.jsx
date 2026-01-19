import React, { useState } from 'react';
import './TopBtn.css';

const TopBtn = () => {
    const [isActive, setIsActive] = useState(false);

    const topBtnImg = "/src/assets/img/top_btn.png";

    const handleClick = () => {
        setIsActive(true);

        // Reset glow effect
        setTimeout(() => setIsActive(false), 1200);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`top-btn-container ${isActive ? 'active-glow' : ''}`}
            onClick={handleClick}
        >
            <div className="top-border-glow"></div>
            <div className="top-inner">
                <img
                    className="icon-top"
                    src={topBtnImg}
                    alt="TOP"
                />
            </div>
        </div>
    );
};

export default TopBtn;