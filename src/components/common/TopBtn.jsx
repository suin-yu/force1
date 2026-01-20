import React, { useState } from 'react';
import './TopBtn.css';

const TopBtn = () => {
    const [isActive, setIsActive] = useState(false);

    const topBtnImg = "/src/assets/img/top_btn.png";

    const handleClick = () => {
        setIsActive(true);

        // Reset glow effect
        setTimeout(() => setIsActive(false), 1200);

        // 스크롤 가능한 영역 찾기
        const scrollableElements = [
            // 각 페이지의 메인 스크롤 컨테이너들
            document.querySelector('.teams-page-content'),
            document.querySelector('.races-page'),
            document.querySelector('.mercedes-container'),
            document.querySelector('.Favorite'),
            document.querySelector('.driverdetail-section'),
            document.querySelector('.content-wrapper'), // Teamdriver (DriverPg 포함)
            document.querySelector('.content-area'), // DriverPg
            document.querySelector('.main-layout'),
            document.body, // body도 확인
            document.documentElement, // fallback
        ];

        // 첫 번째로 존재하고 스크롤 가능한 요소 찾기
        let scrollContainer = null;
        
        for (const el of scrollableElements) {
            if (!el) continue;
            // 현재 스크롤된 요소를 우선 선택
            if (el.scrollTop > 0) {
                scrollContainer = el;
                break;
            }
            // 스크롤 가능한 요소 확인
            if (!scrollContainer && el.scrollHeight > el.clientHeight) {
                scrollContainer = el;
            }
        }

        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // fallback: window와 body 모두 시도
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (document.body.scrollTo) {
                document.body.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
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