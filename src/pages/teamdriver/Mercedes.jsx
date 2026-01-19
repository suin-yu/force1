import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Mercedes.css";

const Mercedes = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  // 1. 현재 열려있는 드라이버의 이름을 저장 (null, 'russell', 'antonelli')
  const [activeDriver, setActiveDriver] = useState(null);

  // Country selector states
  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShining, setIsShining] = useState(false);
  const countryScrollRef = useRef(null);
  const ITEM_HEIGHT = 60;

  // View-all button animation state
  const [isViewAllShining, setIsViewAllShining] = useState(false);

  // 클릭 핸들러: 이미 열려있으면 닫고(null), 아니면 해당 드라이버를 엽니다.
  const toggleDriver = (driverName) => {
    setActiveDriver(activeDriver === driverName ? null : driverName);
  };

  // 뒤로가기 핸들러
  const handleBack = () => {
    navigate('/teamdriver', { state: { activeTab: 'Races' } });
  };

  // Country selector handlers
  const handleButtonClick = () => {
    setIsModalOpen(true);

    // 애니메이션 리셋 후 재생
    setIsShining(false);
    setTimeout(() => {
      setIsShining(true);
    }, 10);
  };

  const handleComplete = () => {
    if (countryScrollRef.current) {
      const countryIndex = Math.round(countryScrollRef.current.scrollTop / ITEM_HEIGHT);
      const finalCountry = countries[Math.max(0, Math.min(countryIndex, countries.length - 1))];

      setSelectedCountry(finalCountry);
      setIsModalOpen(false);
    }
  };

  // Countries list
  const countries = [
    "Australia",
    "Miami",
    "China",
    "Monaco",
    "Japan",
    "Netherlands",
    "Bahrain",
    "Saudi Arabia",
    "Emilia-Romagna",
    "Spain",
    "Canada",
    "Austria",
    "Great Britain",
    "Belgium",
    "Hungray",
    "Netherlands",
    "Italy",
  ];

  // 1. 결과 확장 상태 관리
  const [isExpanded, setIsExpanded] = useState(false);

  // 2. 전체 결과 데이터 (이미지 기반 데이터 추가)
  const fullResults = [
    { pos: 1, driver: "Russell", time: "1:31:52.688", pts: 25, img: "/src/assets/img/mercedes/rank_1.png" },
    { pos: 2, driver: "Verstappen", time: "+0.228S", pts: 18, img: "/src/assets/img/mercedes/rank_2.png" },
    { pos: 3, driver: "Antonelli", time: "+1.014S", pts: 15, img: "/src/assets/img/mercedes/rank_3.png" },
    { pos: 4, driver: "Piastri", time: "+2.019S", pts: 12, img: "/src/assets/img/mercedes/rank_4.png" },
    { pos: 5, driver: "Leclerc", time: "+3.442S", pts: 10, img: "/src/assets/img/mercedes/rank_5.png" },
    { pos: 6, driver: "Hamilton", time: "+10.713S", pts: 8, img: "/src/assets/img/mercedes/rank_6.png" },
    { pos: 7, driver: "Alonso", time: "+10.972S", pts: 6, img: "/src/assets/img/mercedes/rank_7.png" },
    { pos: 8, driver: "Hulkenberg", time: "+15.364S", pts: 4, img: "/src/assets/img/mercedes/rank_8.png" },
    { pos: 9, driver: "Ocon", time: "+1 lap", pts: 2, img: "/src/assets/img/mercedes/rank_9.png" },
    { pos: 10, driver: "Sainz", time: "+1 lap", pts: 1, img: "/src/assets/img/mercedes/rank_10.png" },
    { pos: 11, driver: "Bearman", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_11.png" },
    { pos: 12, driver: "Tsunoda", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_12.png" },
    { pos: 13, driver: "Colapinto", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_13.png" },
    { pos: 14, driver: "Bortoleto", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_14.png" },
    { pos: 15, driver: "Gasly", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_15.png" },
    { pos: 16, driver: "Hadjar", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_16.png" },
    { pos: 17, driver: "Stroll", time: "+1 lap", pts: 0, img: "/src/assets/img/mercedes/rank_17.png" },
    { pos: 18, driver: "Norris", time: "DNF", pts: 0, img: "/src/assets/img/mercedes/rank_18.png" },
    { pos: "NC", driver: "Lawson", time: "DNF", pts: 0, img: "/src/assets/img/mercedes/rank_19.png" },
    { pos: "NC", driver: "Albon", time: "DNF", pts: 0, img: "/src/assets/img/mercedes/rank_20.png" },
  ];

  // 3. 현재 보여줄 데이터 계산 (5개 또는 전체)
  const displayedResults = isExpanded ? fullResults : fullResults.slice(0, 5);

  // 배너 데이터
  const banners = [
    {
      id: 0,
      sub: "Who's on",
      title: "Your Grid?",
      link: "투표 바로가기 →",
      bg: "/src/assets/img/teams/banner_1.png",
    },
    {
      id: 1,
      sub: "Own the Red.",
      title: "Gear Up, Ferrari",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/img/teams/banner_2.png",
    },
    {
      id: 2,
      sub: "Feel the Rush",
      title: "with Mercedes",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/img/teams/banner_3.png",
    },
    {
      id: 3,
      sub: "Lead the Charge.",
      title: "Feel McLaren",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/img/teams/banner_4.png",
    },
  ];

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // Country scroll synchronization
  useEffect(() => {
    const handleCountryScroll = () => {
      if (!countryScrollRef.current) return;

      const container = countryScrollRef.current;
      const scrollTop = container.scrollTop;
      const itemHeight = 60;
      const centerOffset = 95;

      const centerIndex = Math.round((scrollTop + centerOffset) / itemHeight);
      const clampedIndex = Math.max(0, Math.min(centerIndex, countries.length - 1));

      if (countries[clampedIndex] !== selectedCountry) {
        setSelectedCountry(countries[clampedIndex]);
      }
    };

    const countryScroll = countryScrollRef.current;

    if (countryScroll) {
      countryScroll.addEventListener('scroll', handleCountryScroll);
    }

    return () => {
      if (countryScroll) {
        countryScroll.removeEventListener('scroll', handleCountryScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  // Set initial scroll position when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const cIdx = countries.indexOf(selectedCountry);
        countryScrollRef.current?.scrollTo({ top: cIdx * ITEM_HEIGHT });
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  // 터치/드래그 핸들러
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // 왼쪽으로 스와이프 - 다음 슬라이드
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }
    if (touchStart - touchEnd < -75) {
      // 오른쪽으로 스와이프 - 이전 슬라이드
      setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    }
  };

  // 경기 결과 데이터
  const results = [
    { pos: 1, driver: "Russell", time: "1:31:52.688", pts: 25, img: "/src/assets/img/mercedes/rank_1.png" },
    { pos: 2, driver: "Verstappen", time: "+0.228S", pts: 18, img: "/src/assets/img/mercedes/rank_2.png" },
    { pos: 3, driver: "Antonelli", time: "+1.014S", pts: 15, img: "/src/assets/img/mercedes/rank_3.png" },
    { pos: 4, driver: "Piastri", time: "+2.019S", pts: 12, img: "/src/assets/img/mercedes/rank_4.png" },
    { pos: 5, driver: "Leclerc", time: "+3.442S", pts: 10, img: "/src/assets/img/mercedes/rank_5.png" },
  ];

  return (
    <div className="mercedes-container">
      {/* 상단 헤더 */}
      <header className="mercedes-header">
        <button className="back-btn" onClick={handleBack}>
          <img src="/src/assets/img/back.png" alt="back" />
        </button>
        <div className="header-logo">
          <span>Mercedes</span>
          <img src="/src/assets/img/mercedes/mercedes_logo.png" alt="logo" className="logo-small" />
        </div>
      </header>

      {/* 지역 선택 드롭다운 */}
      <div className="dropdown-section">
        <button
          className={`selector-button ${isShining ? "run-motion" : ""}`}
          onClick={handleButtonClick}
          onAnimationEnd={() => setIsShining(false)}
        >
          <div className="selector-border-glow"></div>
          <div className="selector-inner">
            {selectedCountry}
            <img src="/src/assets/img/arrow.png" alt="arrow" />
          </div>
        </button>
      </div>

      {/* 드라이버 히어로 섹션 */}
      <section className="driver-hero">
        <div className="driver-names">
          <h2 className="name-left">Russell</h2>
          <h2 className="name-right">Antonelli</h2>
        </div>
        <div className="driver-main-img">
          <img src="/src/assets/img/mercedes/bg.png" alt="Mercedes Drivers" />
          <div className="pos-label p1">1 <span>POS</span></div>
          <div className="pos-label p3"><span>POS</span> 3</div>
        </div>
      </section>

      {/* 서킷 정보 섹션 */}
      <section className="circuit-info">
        <div className="circuit-header">
          <div className="circuit-title">
            <span>Round 10</span>
            <h2>Circuit</h2>
          </div>
          <div className="circuit-date">
            <img src="/src/assets/img/mercedes/grid.png" alt="" /> 13-15 JUN
          </div>
        </div>

        <div className="circuit-map-container">
          <img src="/src/assets/img/mercedes/canada.png" alt="Canada Circuit" className="circuit-map" />
          <div className="circuit-length">4,361KM</div>
        </div>

        <div className="circuit-stats-grid">
          <div className="stat-box">
            <span>첫 그랑프리</span>
            <p>1978</p>
          </div>
          <div className="stat-box">
            <span>랩(Lap) 수</span>
            <p>70</p>
          </div>
          <div className="stat-box">
            <span>최고 랩 타임</span>
            <p>1:13.078</p>
          </div>
          <div className="stat-box">
            <span>총 레이스 거리</span>
            <p>305.27KM</p>
          </div>
        </div>
      </section>

      {/* 드라이버 선택기 섹션 */}
      <div className="driver-selectors">

        {/* --- 1. Russell 섹션 --- */}
        <div className={`selector-pill-container ${activeDriver === 'russell' ? 'open' : ''}`}>
          <div className="selector-border-glow"></div>
          <div
            className="selector-pill"
            onClick={() => setActiveDriver(activeDriver === 'russell' ? null : 'russell')}
          >
            Russell
            <img
              src="/src/assets/img/arrow.png"
              alt="arrow"
              className={`arrow-icon ${activeDriver === 'russell' ? 'rotate' : ''}`}
            />
          </div>

          {activeDriver === 'russell' && (
            <div className="driver-detail">
              {/* 연습 세션 */}
              <div className="detail-section">
                <span className="detail-label">연습 세션</span>
                <div className="practice-chart">
                  <div className="chart-item">
                    <span>1:13.535</span>
                    <div className="bar bar-p1"></div>
                    <span className="p-label">P1</span>
                  </div>
                  <div className="chart-item">
                    <span>1:12.123</span>
                    <div className="bar bar-p2"></div>
                    <span className="p-label">P2</span>
                  </div>
                  <div className="chart-item">
                    <span>1:11.950</span>
                    <div className="bar bar-p3"></div>
                    <span className="p-label">P3</span>
                  </div>
                </div>
                <div className="faster-badge">
                  <span className="star">⭐</span> 1.585s faster
                </div>
              </div>

              <hr className="divider" />

              {/* 예선 정보 */}
              <div className="stats-grid-row">
                <div className="grid-info">
                  <span className="detail-label">출발 그리드</span>
                  <p className="big-stat">1:10.899</p>
                </div>
                <div className="q-times">
                  <span className="detail-label">예선</span>
                  <p><span>Q1</span> 1:12.075</p>
                  <p><span>Q2</span> 1:11.570</p>
                  <p><span>Q3</span> 1:10.899</p>
                </div>
              </div>

              <hr className="divider" />

              {/* 레이스 기록 */}
              <div className="stats-grid-row">
                <div className="fastest-lap">
                  <span className="detail-label">최고 랩 기록</span>
                  <p className="big-stat">1:14.119</p>
                </div>
                <div className="pit-stop">
                  <span className="detail-label">피트 스탑</span>
                  <p>Stop 1 · Lap 14</p>
                  <p>14:19:36</p>
                  <p>23.231s</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- 2. Antonelli 섹션 (Russell과 동일한 구조) --- */}
        <div className={`selector-pill-container ${activeDriver === 'antonelli' ? 'open' : ''}`}>
          <div className="selector-border-glow"></div>
          <div
            className="selector-pill"
            onClick={() => setActiveDriver(activeDriver === 'antonelli' ? null : 'antonelli')}
          >
            Antonelli
            <img
              src="/src/assets/img/arrow.png"
              alt="arrow"
              className={`arrow-icon ${activeDriver === 'antonelli' ? 'rotate' : ''}`}
            />
          </div>

          {activeDriver === 'antonelli' && (
            <div className="driver-detail">
              {/* 연습 세션 */}
              <div className="detail-section">
                <span className="detail-label">연습 세션</span>
                <div className="practice-chart">
                  <div className="chart-item">
                    <span>1:14.002</span>
                    <div className="bar bar-p1"></div>
                    <span className="p-label">P1</span>
                  </div>
                  <div className="chart-item">
                    <span>1:12.411</span>
                    <div className="bar bar-p2"></div>
                    <span className="p-label">P2</span>
                  </div>
                  <div className="chart-item">
                    <span>1:12.348</span>
                    <div className="bar bar-p3"></div>
                    <span className="p-label">P3</span>
                  </div>
                </div>
                <div className="faster-badge">
                  <span className="star">⭐</span> 1.654s faster
                </div>
              </div>

              <hr className="divider" />

              <div className="stats-grid-row">
                <div className="grid-info">
                  <span className="detail-label">출발 그리드</span>
                  <p className="big-stat">1:11.391</p>
                </div>
                <div className="q-times">
                  <span className="detail-label">예선</span>
                  <p>Q1 1:12.279</p>
                  <p>Q2 1:11.974</p>
                  <p>Q3 1:11.391</p>
                </div>
              </div>

              <hr className="divider" />

              <div className="stats-grid-row">
                <div className="fastest-lap">
                  <span className="detail-label">최고 랩 기록</span>
                  <p className="big-stat">1:14.455</p>
                </div>
                <div className="pit-stop">
                  <span className="detail-label">피트 스탑</span>
                  <p>Stop 1 · Lap 14</p>
                  <p>14:20:58</p>
                  <p>23.s</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 결과 테이블 */}
      <section className="results-section">
        <h3 className="section-label">Results</h3>
        <table className="results-table">
          <thead>
            <tr>
              <th>POS</th>
              <th>DRIVER</th>
              <th>TIME</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody className="results-table-body">
            {displayedResults.map((res) => (
              <tr
                key={res.driver} // pos는 NC 중복이 있을 수 있으므로 driver를 key로 권장
                className={res.driver === 'Russell' || res.driver === 'Antonelli' ? 'highlight-row' : ''}
              >
                <td>{res.pos}</td>
                <td className="driver-cell">
                  <img src={res.img} alt="" /> {res.driver}
                </td>
                <td>{res.time}</td>
                <td>{res.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 버튼 클릭 시 isExpanded 상태 토글 */}
        <button
          className={`view-all-btn ${isViewAllShining ? "run-motion" : ""}`}
          onClick={() => {
            setIsExpanded(!isExpanded);
            setIsViewAllShining(false);
            setTimeout(() => setIsViewAllShining(true), 10);
          }}
          onAnimationEnd={() => setIsViewAllShining(false)}
        >
          <div className="selector-border-glow"></div>
          <div className="selector-inner">
            {isExpanded ? '간략보기' : '모두보기'}
            <img
              src="/src/assets/img/arrow.png"
              alt="arrow"
              className={`arrow-icon ${isExpanded ? 'rotate' : ''}`}
            />
          </div>
        </button>
      </section>


      {/* 배너 슬라이더 섹션 */}
      <div className="banner-slider-wrapper">
        <div className="banner-slider-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="banner-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="banner-slide"
                style={{ backgroundImage: `url(${banner.bg})` }}
              >
                <div className="banner-content">
                  <span>{banner.sub}</span>
                  <h3
                    className={`${banner.id === 1
                      ? "grad-red"
                      : banner.id === 2
                        ? "grad-mint"
                        : banner.id === 3
                          ? "grad-orange"
                          : "grad-white"
                      }`}
                  >
                    {banner.title}
                  </h3>
                  <a href="#/">{banner.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 슬라이드 불렛 */}
        <div className="slider-bullets-external">
          {banners.map((_, idx) => (
            <span
              key={idx}
              className={`bullet ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
        </div>
      </div>


      {/* 하이라이트 섹션 */}
      <section className="highlights-section">
        <div className="section-header">
          <h3 className="section-label">Highlights</h3>
          <img src="/src/assets/img/plus.png" alt="plus" className="plus-icon" />
        </div>
        <div className="highlights-scroll">
          {[
            { id: 1, img: "/src/assets/img/mercedes/highlights_1.png", title: "F1 캐나다 그랑프리, 트로피가 빛난 하이..." },
            { id: 2, img: "/src/assets/img/mercedes/highlights_2.png", title: "캐나다 GP 2025..." },
          ].map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <img src={highlight.img} alt={highlight.title} />
              <p>{highlight.title}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 뉴스 섹션 */}
      <section className="news-section">
        <div className="section-header">
          <h3 className="section-label">News</h3>
          <img src="/src/assets/img/plus.png" alt="plus" className="plus-icon" />
        </div>
        <div className="news-list">
          {[
            {
              id: 1,
              img: "/src/assets/img/mercedes/news_1.png",
              title: "볼프, 러셀 캐나다 우승에도 팀 내 입지 '문제없다'",
              description: "SF-25 테스트카에 올라탄 두 드라이버가 내년형 타이어를 시험 주행했다. 타이어는 18인치 림을 유지하면서도 폭이 약간 좁아진 모습이다.",
              date: "2025. 6. 21."
            },
            {
              id: 2,
              img: "/src/assets/img/mercedes/news_2.png",
              title: "맥라렌, 노리스 사고 직후 대응 전략 공개... 향후 시즌 운영에 영향은?",
              description: "오늘 결과는 우리가 목표한 바와 달랐다. FP3 후 팀이 차량을 퀄리파잉에 맞춰 신속하게 준비했음에도 불구하고, 마지막의 작은 실수가 아쉬운 결과로 이어졌다.",
              date: "2025. 6. 15."
            }
          ].map((news) => (
            <div key={news.id} className="news-item">
              <img src={news.img} alt={news.title} />
              <div className="news-text">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <span className="news-date">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Country Picker Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <div className="picker-container">
              <div className="selection-indicator"></div>
              <div className="picker-column" ref={countryScrollRef}>
                <div className="picker-scroll">
                  <div className="spacer" />
                  {countries.map((country) => (
                    <div
                      key={country}
                      className={`picker-item ${selectedCountry === country ? "active" : ""}`}
                      onClick={() => {
                        const idx = countries.indexOf(country);
                        countryScrollRef.current.scrollTo({ top: idx * ITEM_HEIGHT, behavior: 'smooth' });
                      }}
                    >
                      <span className="picker-text">{country}</span>
                    </div>
                  ))}
                  <div className="spacer" />
                </div>
              </div>
            </div>

            <button
              className="select-complete-btn"
              onClick={handleComplete}
            >
              선택완료
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Mercedes;