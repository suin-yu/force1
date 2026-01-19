import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DriverPg.css";
import "./DriverPg_new_styles.css";
import "./DriverPg_border_styles.css";

import { allDrivers } from "../../assets/data/drivers";
import bottomarrow from "../../assets/img/drivers/bottomarrow.png";

const Driver = () => {
  const navigate = useNavigate();
  const yearScrollRef = useRef(null);
  const filterScrollRef = useRef(null);
  const ITEM_HEIGHT = 60;

  // 상태 관리
  const [favorites, setFavorites] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedFilter, setSelectedFilter] = useState("All Drivers");
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isYearShining, setIsYearShining] = useState(false);
  const [isFilterShining, setIsFilterShining] = useState(false);

  const years = ["2014", "2015", "2016", "2017", "2018", "2019",
    "2020", "2021", "2022", "2023", "2024", "2025"];
  const filters = ["All Drivers", "Favorite"];

  // 초기 로드 시 즐겨찾기 상태 불러오기
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("f1_favorites") || "[]");
    // 저장된 즐겨찾기가 없으면 기본 드라이버 설정
    if (savedFavorites.length === 0) {
      const defaultFavorites = ["ferrari_1", "mercedes_2"];
      setFavorites(defaultFavorites);
      localStorage.setItem("f1_favorites", JSON.stringify(defaultFavorites));
    } else {
      setFavorites(savedFavorites);
    }
  }, []);

  // Year 버튼 클릭 핸들러
  const handleYearButtonClick = () => {
    setIsYearModalOpen(true);
    
    // 애니메이션 리셋 후 재생
    setIsYearShining(false);
    setTimeout(() => {
      setIsYearShining(true);
    }, 10);
  };

  // Filter 버튼 클릭 핸들러
  const handleFilterButtonClick = () => {
    setIsFilterModalOpen(true);
    
    // 애니메이션 리셋 후 재생
    setIsFilterShining(false);
    setTimeout(() => {
      setIsFilterShining(true);
    }, 10);
  };

  // Year 선택 완료 핸들러
  const handleYearComplete = () => {
    if (yearScrollRef.current) {
      const yearIndex = Math.round(yearScrollRef.current.scrollTop / ITEM_HEIGHT);
      const finalYear = years[Math.max(0, Math.min(yearIndex, years.length - 1))];
      
      setSelectedYear(finalYear);
      setIsYearModalOpen(false);
    }
  };

  // Filter 선택 완료 핸들러
  const handleFilterComplete = () => {
    if (filterScrollRef.current) {
      const filterIndex = Math.round(filterScrollRef.current.scrollTop / ITEM_HEIGHT);
      const finalFilter = filters[Math.max(0, Math.min(filterIndex, filters.length - 1))];
      
      setSelectedFilter(finalFilter);
      setIsFilterModalOpen(false);
    }
  };

  // Year 스크롤 기반 자동 선택 기능
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

  // Filter 스크롤 기반 자동 선택 기능
  useEffect(() => {
    const handleFilterScroll = () => {
      if (!filterScrollRef.current) return;
      
      const container = filterScrollRef.current;
      const scrollTop = container.scrollTop;
      const itemHeight = 60;
      const centerOffset = 95;
      
      const centerIndex = Math.round((scrollTop + centerOffset) / itemHeight);
      const clampedIndex = Math.max(0, Math.min(centerIndex, filters.length - 1));
      
      if (filters[clampedIndex] !== selectedFilter) {
        setSelectedFilter(filters[clampedIndex]);
      }
    };

    const filterScroll = filterScrollRef.current;

    if (filterScroll) {
      filterScroll.addEventListener('scroll', handleFilterScroll);
    }

    return () => {
      if (filterScroll) {
        filterScroll.removeEventListener('scroll', handleFilterScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  // 모달이 열릴 때 현재 선택된 값으로 스크롤 위치 맞추기
  useEffect(() => {
    if (isYearModalOpen) {
      setTimeout(() => {
        const yIdx = years.indexOf(selectedYear);
        yearScrollRef.current?.scrollTo({ top: yIdx * ITEM_HEIGHT });
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isYearModalOpen]);

  useEffect(() => {
    if (isFilterModalOpen) {
      setTimeout(() => {
        const fIdx = filters.indexOf(selectedFilter);
        filterScrollRef.current?.scrollTo({ top: fIdx * ITEM_HEIGHT });
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterModalOpen]);

  // 즐겨찾기 토글
  const toggleFavorite = (e, driverId) => {
    e.stopPropagation();
    let newFavorites;
    if (favorites.includes(driverId)) {
      newFavorites = favorites.filter(id => id !== driverId);
    } else {
      newFavorites = [...favorites, driverId];
    }
    localStorage.setItem("f1_favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const goToDetail = (driverId) => {
    // ferrari_1 (Charles Leclerc) 및 mercedes_2 (George Russell)만 상세 페이지 이동 가능
    if (driverId === "ferrari_1" || driverId === "mercedes_2") {
      navigate(`/driver/${driverId}`);
    }
  };

  // 필터링된 드라이버 목록
  const filteredDrivers = allDrivers.filter(driver => {
    if (selectedFilter === "Favorite") {
      return favorites.includes(driver.id);
    }
    return true;
  });

  return (
    <div className="main-layout">
      <div className="content-area">
        <div className="button">
          <button 
            className={`year selector-button ${isYearShining ? "run-motion" : ""}`}
            onClick={handleYearButtonClick}
            onAnimationEnd={() => setIsYearShining(false)}
          >
            <div className="selector-border-glow"></div>
            <div className="selector-inner">
              {selectedYear}
              <img src={bottomarrow} alt="" />
            </div>
          </button>
          <button 
            className={`alldriver selector-button ${isFilterShining ? "run-motion" : ""}`}
            onClick={handleFilterButtonClick}
            onAnimationEnd={() => setIsFilterShining(false)}
          >
            <div className="selector-border-glow"></div>
            <div className="selector-inner">
              {selectedFilter}
              <img src={bottomarrow} alt="" />
            </div>
          </button>
        </div>
        <h2>Meet the F1 Grid</h2>
        <div className="driverlist">
          <ul>
            {filteredDrivers.map(driver => (
              <li key={driver.id} className={driver.id} onClick={() => goToDetail(driver.id)}>
                <div className="driver-info">
                  <div className="text-box">
                    <h3 className="name_e">{driver.name_e}</h3>
                    <p className="name_k">{driver.name_k}</p>
                  </div>
                  <div className="driver-img">
                    <img src={driver.img} alt={driver.name_e} />
                  </div>
                  <button
                    className={`favorite-btn ${favorites.includes(driver.id) ? "on" : ""}`}
                    onClick={(e) => toggleFavorite(e, driver.id)}
                  >
                    ★
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 연도 선택 모달 */}
      {isYearModalOpen && (
        <div className="modal-overlay" onClick={() => setIsYearModalOpen(false)}>
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
              onClick={handleYearComplete}
            >
              선택완료
            </button>
          </div>
        </div>
      )}

      {/* 필터 선택 모달 */}
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={() => setIsFilterModalOpen(false)}>
          <div className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <div className="picker-container">
              <div className="selection-indicator"></div>
              <div className="picker-column" ref={filterScrollRef}>
                <div className="picker-scroll">
                  <div className="spacer" />
                  {filters.map((filter) => (
                    <div
                      key={filter}
                      className={`picker-item ${selectedFilter === filter ? "active" : ""}`}
                      onClick={() => {
                        const idx = filters.indexOf(filter);
                        filterScrollRef.current.scrollTo({ top: idx * ITEM_HEIGHT, behavior: 'smooth' });
                      }}
                    >
                      <span className="picker-text">{filter}</span>
                    </div>
                  ))}
                  <div className="spacer" />
                </div>
              </div>
            </div>

            <button
              className="select-complete-btn"
              onClick={handleFilterComplete}
            >
              선택완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Driver;
