import React, { useState } from 'react';
import './HomePg.css';
import Gnb from '../../components/common/Gnb.jsx';
import mainVideo from '../../assets/video/f1.mp4';
import charlesImg from '../../assets/img/home/charles_leclerc.png'; // ✅ Charles Leclerc 이미지 경로
import kimiImg from '../../assets/img/home/kimi_antonelli.png'; // ✅ Kimi Antonelli 이미지 경로
import FlipDigit from '../../components/FlipDigit';
import img_au from '../../assets/img/home/Australia.png';
import img_cn from '../../assets/img/home/China.png';
import img_jp from '../../assets/img/home/Japan.png';
import VotePredictionSection from './VotePredictionSection';
import LiveTalkSection from './LiveTalkSection';
import PostSection from './PostSection';
import NewsSection from './NewsSection';
import GoodsSection from './GoodsSection';
import LightsOutSection from './LightsOutSection';
import PartnersSection from './PartnersSection';





const MainPg = () => {
  // 회전 애니메이션 상태 관리: 클릭된 드라이버의 ID 저장
  const [rotatingDriverId, setRotatingDriverId] = useState(null);

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: "03",
    hours: "18",
    minutes: "45",
    seconds: "27",
  });

  // Calculate time remaining (Mock future date)
  React.useEffect(() => {
    // Set a fixed target date for demo purposes
    const targetDate = new Date('2026-03-06T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

      {/* ✅ Upcoming Race 섹션 */}
      <div className="upcoming-race-section">
        <div className="upcoming-overlay"></div>
        <div className="upcoming-content">
          <h2 className="upcoming-title">Upcoming Race</h2>
          <div className="countdown-container">
            {/* Days */}
            <div className="time-group">
              <span className="time-label">Days</span>
              <div className="digits-wrapper">
                <FlipDigit digit={timeLeft.days[0]} />
                <FlipDigit digit={timeLeft.days[1]} />
              </div>
            </div>

            {/* Separator */}
            <div className="time-separator">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Hours */}
            <div className="time-group">
              <span className="time-label">Hours</span>
              <div className="digits-wrapper">
                <FlipDigit digit={timeLeft.hours[0]} />
                <FlipDigit digit={timeLeft.hours[1]} />
              </div>
            </div>

            {/* Separator */}
            <div className="time-separator">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Minutes */}
            <div className="time-group">
              <span className="time-label">Minutes</span>
              <div className="digits-wrapper">
                <FlipDigit digit={timeLeft.minutes[0]} />
                <FlipDigit digit={timeLeft.minutes[1]} />
              </div>
            </div>

            {/* Separator */}
            <div className="time-separator">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Seconds */}
            <div className="time-group">
              <span className="time-label">Seconds</span>
              <div className="digits-wrapper">
                <FlipDigit digit={timeLeft.seconds[0]} />
                <FlipDigit digit={timeLeft.seconds[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2026 Calendar Section */}
      <section className="calendar-section">
        <div className="calendar-container">
          <h2 className="section-title">2026 Calender</h2>
          <div className="timeline-items">

            {/* Round 1 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-date">
                  <span className="month">Mar</span>
                  <span className="day">06</span>
                  <span className="dot-divider"></span>
                  <span className="day">08</span>
                </div>
                <div className="timeline-dot"></div>
              </div>

              <div className="timeline-card">
                <div className="card-info">
                  <div className="round-label">ROUND 1</div>
                  <div className="gp-name">Australian GP</div>
                  <div className="gp-place">Melbourne, Australia</div>
                  <div className="gp-laps">58 Laps</div>
                </div>
                <div className="card-flag">
                  <img src={img_au} alt="Australia" />
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-date">
                  <span className="month">Mar</span>
                  <span className="day">13</span>
                  <span className="dot-divider"></span>
                  <span className="day">15</span>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="card-info">
                  <div className="round-label">ROUND 2</div>
                  <div className="gp-name">Chinese GP</div>
                  <div className="gp-place">Shanghai, China</div>
                  <div className="gp-laps">56 Laps</div>
                </div>
                <div className="card-flag">
                  <img src={img_cn} alt="China" />
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-date">
                  <span className="month">Mar</span>
                  <span className="day">27</span>
                  <span className="dot-divider"></span>
                  <span className="day">29</span>
                </div>
                <div className="timeline-dot"></div>
              </div>

              <div className="timeline-card">
                <div className="card-info">
                  <div className="round-label">ROUND 3</div>
                  <div className="gp-name">Japanese GP</div>
                  <div className="gp-place">Suzuka, Japan</div>
                  <div className="gp-laps">53 Laps</div>
                </div>
                <div className="card-flag">
                  <img src={img_jp} alt="Japan" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>





      <VotePredictionSection />

      {/* Live Talk Section */}
      <LiveTalkSection />

      {/* Post Section */}
      <PostSection />

      {/* News Section */}
      <NewsSection />

      {/* Goods Section */}
      <GoodsSection />

      {/* Lights Out Section */}
      <LightsOutSection />

      {/* Partners Section */}
      <PartnersSection />

    </div>
  );
};

export default MainPg;