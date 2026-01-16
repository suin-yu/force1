import React, { useState } from 'react';
import './HomePg.css';
import Gnb from '../components/Gnb';
import mainVideo from '../assets/video/f1.mp4';
import charlesImg from '../assets/img/home/charles_leclerc.png'; // ✅ Charles Leclerc 이미지 경로
import kimiImg from '../assets/img/home/kimi_antonelli.png'; // ✅ Kimi Antonelli 이미지 경로

const MainPg = () => {
  // 회전 애니메이션 상태 관리: 클릭된 드라이버의 ID 저장
  const [rotatingDriverId, setRotatingDriverId] = useState(null);

  // 드라이버 데이터 배열 (추후 API에서 받아올 수 있음)
  const drivers = [
    { id: 1, name: 'Charles Leclerc', img: charlesImg },
    { id: 2, name: 'Kimi Antonelli', img: kimiImg },
    // ... 추가 드라이버
  ];

  // 드라이버 클릭 핸들러: 회전 애니메이션 시작 및 자동 종료
  const handleDriverClick = (id) => {
    setRotatingDriverId(id);
    setTimeout(() => setRotatingDriverId(null), 600); // 0.6초(애니메이션 시간) 후 상태 초기화
  };

  return (
    <div className="main-container">
      {/* 비디오 배경 섹션 (기존 코드 유지) */}
      <div className="video-section">
        <div className="video-bg">
          <video autoPlay loop muted playsInline>
            <source src={mainVideo} type="video/mp4" />
          </video>
        </div>
        <div className="main-content">
          <h1 className="hero-title">Feel Every Lap</h1>
          <p className="hero-desc">매 순간, 팬들이 함께하는 곳</p>
        </div>
      </div>

      {/* ✅ My Driver 섹션 (새로 추가됨) */}
      <div className="my-driver-section">
        <h2 className="section-title">My Driver</h2>
        <div className="driver-list">
          {/* 드라이버 목록 렌더링 */}
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className={`driver-item ${rotatingDriverId === driver.id ? 'rotating' : ''}`} // 클릭된 항목에만 'rotating' 클래스 추가
              onClick={() => handleDriverClick(driver.id)}
            >
              <div className="driver-img-wrapper">
                <img src={driver.img} alt={driver.name} className="driver-img" />
              </div>
              <span className="driver-name">{driver.name}</span>
            </div>
          ))}

          {/* 드라이버 추가 버튼 */}
          <div className="driver-item add-driver">
            <div className="driver-img-wrapper add-btn-wrapper">
              <span className="add-icon">+</span>
            </div>
          </div>
        </div>
      </div>

      <Gnb />
    </div>
  );
};

export default MainPg;