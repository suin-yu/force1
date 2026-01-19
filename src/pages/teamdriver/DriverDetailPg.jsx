import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DriverDetailPg.css";
import { allDrivers } from "../../assets/data/drivers";
import ferrari_logo from "../../assets/img/drivers/ferrari_logo.png";
import mercedes_logo from "../../assets/img/drivers/Mercedes_logo.png";
import car from "../../assets/img/drivers/car.png";
import car_2 from "../../assets/img/drivers/driverdetail_car_2.png";
import quote_mark_top from "../../assets/img/drivers/quote_mark_top.png";
import quote_mark_top_2 from "../../assets/img/drivers/quote_mark_top_2png.png";
import quote_mark_bottom from "../../assets/img/drivers/quote_mark_bottom.png";
import quote_mark_bottom_2 from "../../assets/img/drivers/quote_mark_bottom_2.png";
// Charles Leclerc Photos (Ferrari)
import photo_left_1 from "../../assets/img/drivers/photo_left_1.png"
import photo_left_2 from "../../assets/img/drivers/photo_left_2.png"
import photo_left_3 from "../../assets/img/drivers/photo_left_3.png"
import photo_right_1 from "../../assets/img/drivers/photo_right_1.png"
import photo_right_2 from "../../assets/img/drivers/photo_right_2.png"
import photo_right_3 from "../../assets/img/drivers/photo_right_3.png"

// Charles Leclerc Highlights (Ferrari)
import highlights_1 from "../../assets/img/drivers/highlights_1.png"
import highlights_2 from "../../assets/img/drivers/highlights_2.png"

// George Russell Photos (Mercedes)
import russell_photo_left_1 from "../../assets/img/drivers/russell_photo_left_1.png"
import russell_photo_left_2 from "../../assets/img/drivers/russell_photo_left_2.png"
import russell_photo_left_3 from "../../assets/img/drivers/russell_photo_left_3.png"
import russell_photo_right_1 from "../../assets/img/drivers/russell_photo_right_1.png"
import russell_photo_right_2 from "../../assets/img/drivers/russell_photo_right_2.png"
import russell_photo_right_3 from "../../assets/img/drivers/russell_photo_right_3.png"

// George Russell Highlights (Mercedes)
import russell_highlights_1 from "../../assets/img/drivers/russell_highlights_1.png"
import russell_highlights_2 from "../../assets/img/drivers/russell_highlights_2.png"


const DriverDetailPg = () => {
  const navigate = useNavigate();
  const { id: driverId } = useParams(); // URL 파라미터에서 ID 가져오기
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // 3초마다 자동 슬라이드 기능
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // 현재 드라이버 데이터 찾기
  const currentDriver = allDrivers.find((d) => d.id === driverId);
  const displayName = currentDriver ? currentDriver.name_e : "Driver Detail";

  // 이름 분리 (Charles Leclerc -> Charles / Leclerc)
  const nameParts = currentDriver ? currentDriver.name_e.split(" ") : ["", ""];
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";


  const [isFavorite, setIsFavorite] = useState(false);

  // 초기 로드 시 즐겨찾기 상태 불러오기
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("f1_favorites") || "[]");
    setIsFavorite(savedFavorites.includes(driverId));
  }, [driverId]);

  // 즐겨찾기 토글 함수
  const toggleFavorite = (e) => {
    e.stopPropagation();
    const savedFavorites = JSON.parse(localStorage.getItem("f1_favorites") || "[]");
    let newFavorites;
    if (savedFavorites.includes(driverId)) {
      newFavorites = savedFavorites.filter(id => id !== driverId);
    } else {
      newFavorites = [...savedFavorites, driverId];
    }
    localStorage.setItem("f1_favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  // 스크롤 애니메이션을 위한 상태 및 Ref
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const raceCraftRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.2 } // 20% 정도 보일 때 시작
    );

    if (raceCraftRef.current) {
      observer.observe(raceCraftRef.current);
    }

    return () => {
      if (raceCraftRef.current) {
        observer.unobserve(raceCraftRef.current);
      }
    };
  }, []);

  const data = [
    { label: "페라리 DNA", score: 10, max: 10 },
    { label: "레이스 페이스", score: 8.5, max: 10 },
    { label: "추월 능력", score: 7.8, max: 10 },
    { label: "수비 주행", score: 7.5, max: 10 },
    { label: "타이어 관리", score: 8.0, max: 10 },
    { label: "레이스 판단력", score: 8.3, max: 10 },
    { label: "스타트 성력", score: 7.2, max: 10 },
    { label: "순위 회복력", score: 8.6, max: 10 },
  ];
  return (
    <div className="driverdetail-section">
      <div
        className="driverdetail"
        style={{
          backgroundImage: currentDriver?.bgImg
            ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.94)), url(${currentDriver.bgImg})`
            : "none",
        }}
      >
        <div className="driverdetail-top">
          <button
            className="leftarrow"
            onClick={() => navigate("/teamdriver", { state: { activeTab: "Drivers" } })}
            aria-label="back to drivers"
          ></button>
          <h2>{displayName}</h2>
          <button
            className={`favorite-btn-detail ${isFavorite ? "on" : ""}`}
            onClick={toggleFavorite}
          >
            ★
          </button>
        </div>

        <div className="main">
          <p>
            You've supported <br />
            🏁 {driverId === "mercedes_2" ? "24 races" : "27 races"} <br />
            since {driverId === "mercedes_2" ? "2019" : "2023"}
          </p>
          <h2 className="name_top">{firstName}</h2>
          <h2 className="name_bottom">{lastName}</h2>
          <div className="driver-portfolio">
            <div className="country">
              {currentDriver?.countryImg && <img src={currentDriver.countryImg} alt="" />}
              <p className="country-text">{currentDriver?.country}</p>
            </div>
            <p className="number">{currentDriver?.number}</p>
            <p className="birth">{currentDriver?.birth}</p>
          </div>
        </div>
      </div>
      {/* racecraft */}
      <div className="racecraft" ref={raceCraftRef}>
        <h2>RACE CRAFT</h2>
        <div className="content">
          <div className="left">
            <div className="top">
              <div className="img">
                <img src={driverId === "mercedes_2" ? mercedes_logo : ferrari_logo} alt="" />
              </div>
              <div className="team-box">
                <p className="team">Team</p>
                <p className="team-name">{driverId === "mercedes_2" ? "Mercedes" : "Ferrari"}</p>
              </div>
            </div>
            <ul className="stats-list">
              {currentDriver?.stats?.map((stat, index) => (
                <li key={index} className="stat-item">
                  <div className="stat-row">
                    <span className="stat-label">{stat.label}</span>
                    <div className="stat-score-group">
                      <span className="stat-score-value">{stat.value.toFixed(1)}</span>
                      <span className="stat-score-divider"> / </span>
                      <span className="stat-score-max">10</span>
                    </div>
                  </div>
                  <div className="progress-bg">
                    <div
                      className="progress-bar"
                      style={{
                        width: isStatsVisible ? `${stat.value * 10}%` : "0%",
                        background: driverId === "mercedes_2"
                          ? "linear-gradient(to right, #287881, #48D7E7)"
                          : "linear-gradient(to right, #600D07, #BC1E13)"
                      }}
                    />
                  </div>
                </li>
              ))}
              {!currentDriver?.stats && (
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "20px" }}>
                  상세 능력치 데이터 준비 중입니다.
                </p>
              )}
            </ul>
          </div>
          <div className="right">
            <img src={driverId === "mercedes_2" ? car_2 : car} alt="" />
          </div>
        </div>
      </div>

      {/* Teams.jsx의 배너 섹션 이식 */}
      <div className="banner-slider-wrapper">
        <div className="banner-slider-container">
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
                    className={`banner-title ${banner.id === 1
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

      <div className="quote">
        <img src={driverId === "mercedes_2" ? quote_mark_top_2 : quote_mark_top} alt="" />
        <h2 style={{
          backgroundImage: driverId === "mercedes_2"
            ? "linear-gradient(135deg, #EAEAEA 0%, #5E7971 100%)"
            : "linear-gradient(135deg, #eaeaea 0%, #795e5e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>{currentDriver?.quote}</h2>
        <p className="name">{currentDriver?.name_e}</p>
        <img src={driverId === "mercedes_2" ? quote_mark_bottom_2 : quote_mark_bottom} alt="" />
      </div>

      {/* highlight */}
      <div className="highlight-section">
        <div className="highlight-header">
          <h2 className="section-title">HIGHLIGHT</h2>
          <button className="plus-button" aria-label="더 보기">
            <img src="/src/assets/img/plus.png" alt="" />
          </button>
        </div>

        <div className="highlight-slider-container">
          <div className="highlight-track">
            {(driverId === "mercedes_2" ? [
              {
                id: 1,
                title: "조지 러셀, 1955년 영국 그랑프리 우승...",
                img: russell_highlights_1,
              },
              {
                id: 2,
                title: "아디다스 팀복 컬렉션 2026 시즌",
                img: russell_highlights_2,
              },
            ] : [
              {
                id: 1,
                title: "2025 시즌, 놓치지 말아야 할 5가지 전망",
                img: highlights_1,
              },
              {
                id: 2,
                title: "페라리, 2025 시즌 최고의 순간과 최악...",
                img: highlights_2,
              },
            ]).map((item) => (
              <div className="highlight-card" key={item.id}>
                <div className="highlight-img-box">
                  <img src={item.img} alt={item.title} />
                  {/* 필요시 재생 아이콘 등을 오버레이할 수 있습니다 */}
                </div>
                <p className="highlight-caption">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* photo */}
      <div className="photo-section">
        <div className="highlight-header">
          <h2 className="section-title">PHOTO</h2>
          <button className="plus-button" aria-label="더 보기">
            <img src="/src/assets/img/plus.png" alt="" />
          </button>
        </div>
        <div className="photo-box">
          <div className="left">
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_left_1 : photo_left_1} alt="" /></div>
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_left_2 : photo_left_2} alt="" /></div>
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_left_3 : photo_left_3} alt="" /></div>
          </div>
          <div className="right">
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_right_1 : photo_right_1} alt="" /></div>
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_right_2 : photo_right_2} alt="" /></div>
            <div className="img"><img src={driverId === "mercedes_2" ? russell_photo_right_3 : photo_right_3} alt="" /></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DriverDetailPg;
