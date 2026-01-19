import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Races.css";

const Races = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShining, setIsShining] = useState(false);

  const yearScrollRef = useRef(null);
  const ITEM_HEIGHT = 60;

  // 카드 클릭 핸들러
  const handleCardClick = (pos) => {
    if (pos === 2) {
      navigate('/teamdriver/mercedes');
    }
  };

  // 버튼 클릭 핸들러
  const handleButtonClick = () => {
    setIsModalOpen(true);
    
    // 애니메이션 리셋 후 재생
    setIsShining(false);
    setTimeout(() => {
      setIsShining(true);
    }, 10);
  };

  // 선택 완료 핸들러
  const handleComplete = () => {
    if (yearScrollRef.current) {
      const yearIndex = Math.round(yearScrollRef.current.scrollTop / ITEM_HEIGHT);
      const finalYear = years[Math.max(0, Math.min(yearIndex, years.length - 1))];
      
      setSelectedYear(finalYear);
      setIsModalOpen(false);
    }
  };

  // 연도 목록
  const years = [
    "2014", "2015", "2016", "2017", "2018", "2019",
    "2020", "2021", "2022", "2023", "2024", "2025",
  ];

  // 팀별 데이터 배열 (사진의 순위와 수치 반영)
  const standings = [
    {
      pos: 1,
      team: "McLaren",
      pts: "833 pts",
      teamColor: "#FF8700",
      bgImg: "/src/assets/img/races/mclaren_bg.png",
      drivers: [
        { name: "Lando Norris", pts: "423pts", rank: "1위", img: "/src/assets/img/races/mclaren_1.png" },
        { name: "Oscar Piastri", pts: "410pts", rank: "3위", img: "/src/assets/img/races/mclaren_2.png" },
      ],
      carImg: "/src/assets/img/races/mclaren_car.png"
    },
    {
      pos: 2,
      team: "Mercedes",
      pts: "469 pts",
      teamColor: "#27F4D2",
      bgImg: "/src/assets/img/races/mercedes_bg.png",
      drivers: [
        { name: "George Russell", pts: "319pts", rank: "4위", img: "/src/assets/img/races/mercedes_1.png" },
        { name: "Kimi Antonelli", pts: "150pts", rank: "7위", img: "/src/assets/img/races/mercedes_2.png" }
      ],
      carImg: "/src/assets/img/races/mercedes_car.png"
    },
    {
      pos: 3,
      team: "Red Bull",
      pts: "451 pts",
      teamColor: "#0600EF",
      bgImg: "/src/assets/img/races/redbull_bg.png",
      drivers: [
        { name: "Max Verstappen", pts: "421pts", rank: "2위", img: "/src/assets/img/races/redbull_1.png" },
        { name: "Yuki Tsunoda", pts: "33pts", rank: "17위", img: "/src/assets/img/races/redbull_2.png" },
      ],
      carImg: "/src/assets/img/races/redbull_car.png"
    },
    {
      pos: 4,
      team: "Ferrari",
      pts: "398 pts",
      teamColor: "#EF1A2D",
      bgImg: "/src/assets/img/races/ferrari_bg.png",
      drivers: [
        { name: "Charles Leclerc", pts: "242pts", rank: "5위", img: "/src/assets/img/races/ferrari_1.png" },
        { name: "Lewis Hamilton", pts: "156pts", rank: "6위", img: "/src/assets/img/races/ferrari_2.png" },
      ],
      carImg: "/src/assets/img/races/ferrari_car.png"
    },
    {
      pos: 5,
      team: "Williams",
      pts: "137 pts",
      teamColor: "#005AFF",
      bgImg: "/src/assets/img/races/williams_bg.png",
      drivers: [
        { name: "Alexander Albon", pts: "73pts", rank: "8위", img: "/src/assets/img/races/williams_1.png" },
        { name: "Carlos Sainz", pts: "64pts", rank: "9위", img: "/src/assets/img/races/williams_2.png" },
      ],
      carImg: "/src/assets/img/races/williams_car.png"
    },
    {
      pos: 6,
      team: "Racing Bulls",
      pts: "92 pts",
      teamColor: "#032DFF",
      bgImg: "/src/assets/img/races/racingbulls_bg.png",
      drivers: [
        { name: "Isack Hadjar", pts: "51pts", rank: "12위", img: "/src/assets/img/races/racingbulls_1.png" },
        { name: "Liam Lawson", pts: "38pts", rank: "14위", img: "/src/assets/img/races/racingbulls_2.png" },
      ],
      carImg: "/src/assets/img/races/racingbulls_car.png"
    },
    {
      pos: 7,
      team: "Aston Martin",
      pts: "89 pts",
      teamColor: "#006F62",
      bgImg: "/src/assets/img/races/astonmartin_bg.png",
      drivers: [
        { name: "Fernando Alonso", pts: "56pts", rank: "10위", img: "/src/assets/img/races/astonmartin_1.png" },
        { name: "Lance Stroll", pts: "33pts", rank: "16위", img: "/src/assets/img/races/astonmartin_2.png" },
      ],
      carImg: "/src/assets/img/races/astonmartin_car.png"
    },
    {
      pos: 8,
      team: "Haas F1",
      pts: "79 pts",
      teamColor: "#E6002B",
      bgImg: "/src/assets/img/races/haas_bg.png",
      drivers: [
        { name: "Oliver Bearman", pts: "41pts", rank: "13위", img: "/src/assets/img/races/haas_1.png" },
        { name: "Esteban Ocon", pts: "38pts", rank: "15위", img: "/src/assets/img/races/haas_2.png" },
      ],
      carImg: "/src/assets/img/races/haas_car.png"
    },
    {
      pos: 9,
      team: "Kick Sauber",
      pts: "70 pts",
      teamColor: "#52E252",
      bgImg: "/src/assets/img/races/kick_bg.png",
      drivers: [
        { name: "Nico Hülkenberg", pts: "51pts", rank: "11위", img: "/src/assets/img/races/kick_1.png" },
        { name: "Gabriel Bortoleto", pts: "19pts", rank: "19위", img: "/src/assets/img/races/kick_2.png" },
      ],
      carImg: "/src/assets/img/races/kick_car.png"
    },
    {
      pos: 10,
      team: "Alpine",
      pts: "22 pts",
      teamColor: "#2293D1",
      bgImg: "/src/assets/img/races/alpine_bg.png",
      drivers: [
        { name: "Franco Colapinto", pts: "0pts", rank: "20위", img: "/src/assets/img/races/alpine_1.png" },
        { name: "Pierre Gasly", pts: "0pts", rank: "21위", img: "/src/assets/img/races/alpine_2.png" },
      ],
      carImg: "/src/assets/img/races/alpine_car.png"
    },
  ];

  // 스크롤 기반 자동 선택 기능
  useEffect(() => {
    const handleYearScroll = () => {
      if (!yearScrollRef.current) return;
      
      const container = yearScrollRef.current;
      const scrollTop = container.scrollTop;
      const itemHeight = 60;
      const centerOffset = 95;
      
      const centerIndex = Math.round((scrollTop + centerOffset) / itemHeight);
      const clampedIndex = Math.max(0, Math.min(centerIndex, years.length - 1));
      
      if (years[clampedIndex] !== selectedYear) {
        setSelectedYear(years[clampedIndex]);
      }
    };

    const yearScroll = yearScrollRef.current;

    if (yearScroll) {
      yearScroll.addEventListener('scroll', handleYearScroll);
    }

    return () => {
      if (yearScroll) {
        yearScroll.removeEventListener('scroll', handleYearScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  // 모달이 열릴 때 현재 선택된 값으로 스크롤 위치 맞추기
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const yIdx = years.indexOf(selectedYear);
        yearScrollRef.current?.scrollTo({ top: yIdx * ITEM_HEIGHT });
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <div className="races-page">
      {/* 필터 섹션 - TeamsPg 스타일 버튼 */}
      <div className="filter-section">
        <button 
          className={`selector-button ${isShining ? "run-motion" : ""}`}
          onClick={handleButtonClick}
          onAnimationEnd={() => setIsShining(false)}
        >
          <div className="selector-border-glow"></div>
          <div className="selector-inner">
            {selectedYear}
            <img src="/src/assets/img/arrow.png" alt="arrow" />
          </div>
        </button>
      </div>

      <h1 className="main-title">F1 Championship <br/> Standings</h1>

      {/* 스탠딩 카드 리스트 */}
      <div className="standings-list">
        {standings.map((item) => (
          <div 
            key={item.pos} 
            className="team-card"
            style={{ backgroundImage: `url(${item.bgImg})` }}
            onClick={() => handleCardClick(item.pos)}
          >
            <div className="card-top">
              <div className="team-info">
                <span className="position">
                  <span className="team-color-line" style={{ backgroundColor: item.teamColor }}></span>
                  Position {item.pos}
                </span>
                <h2 className="team-name">{item.team}</h2>
                <span className="total-pts">{item.pts}</span>
              </div>

            
              
              <div className="driver-list">
                {item.drivers.map((d, idx) => (
                  <div key={idx} className="driver-row">
                    <img src={d.img} alt={d.name} className="driver-thumb" />
                    <div className="driver-details">
                      <p className="d-name">{d.name}</p>
                      <p className="d-pts">{d.pts}</p>
                    </div>
                    <span className="d-rank">{d.rank}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 차량 이미지 - 홀수는 오른쪽, 짝수는 왼쪽 */}
            <img 
              src={item.carImg} 
              alt={`${item.team} car`} 
              className={`car-image ${item.pos % 2 === 0 ? 'car-left' : 'car-right'}`} 
            />
          </div>
        ))}
      </div>

      {/* Year Picker Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <div className="picker-container">
              <div className="selection-indicator"></div>
              <div className="picker-column" ref={yearScrollRef}>
                <div className="picker-scroll">
                  <div className="spacer" />
                  {years.map((year) => (
                    <div
                      key={year}
                      className={`picker-item ${selectedYear === year ? "active" : ""}`}
                      onClick={() => {
                        const idx = years.indexOf(year);
                        yearScrollRef.current.scrollTo({ top: idx * ITEM_HEIGHT, behavior: 'smooth' });
                      }}
                    >
                      <span className="picker-text">{year}</span>
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

export default Races;