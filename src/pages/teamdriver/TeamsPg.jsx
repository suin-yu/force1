import React, { useState, useEffect } from "react";
import "./TeamsPg.css";
import foxVideo from "/src/assets/video/forceforce.mp4";

const TeamsPg = () => {
  // 배너 슬라이드 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedTeam, setSelectedTeam] = useState("Ferrari");

  const banners = [
    {
      id: 0,
      sub: "Who's on",
      title: "Your Grid?",
      link: "투표 바로가기 →",
      bg: "/src/assets/image/teams/banner_1.png",
    },
    {
      id: 1,
      sub: "Own the Red.",
      title: "Gear Up, Ferrari",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/image/teams/banner_2.png",
    },
    {
      id: 2,
      sub: "Feel the Rush",
      title: "with Mercedes",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/image/teams/banner_3.png",
    },
    {
      id: 3,
      sub: "Lead the Charge.",
      title: "Feel McLaren",
      link: "굿즈샵 바로가기 →",
      bg: "/src/assets/image/teams/banner_4.png",
    },
  ];

  const years = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ];
  const teams = [
    "McLaren",
    "Ferrari",
    "Red Bull Racing",
    "Mercedes",
    "Williams",
    "Racing Bulls",
    "Aston Martin",
    "Hass F1 Team",
    "Kick Sauber",
    "Alpine",
  ];

  // 3초마다 자동 슬라이드 기능
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="teams-page-content">
      {/* 섹션 1: 영상 영역 */}
      <header className="teams-header">
        <button
          className="selector-button"
          /* 1. 속성 자리에 onClick을 넣어야 명령이 실행됩니다 */
          onClick={() => setIsModalOpen(true)}
        >
          {/* 2. 하단 모달에서 선택한 값이 실시간으로 반영되도록 상태값을 사용합니다 */}
          {selectedYear} · {selectedTeam}
          <img
            src="/src/assets/image/arrow.png"
            alt="arrow down"
            className="arrow-down-icon"
          />
        </button>
      </header>

      <div className="teams-view">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={foxVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="teams-footer">
          <div className="stat-group">
            <div className="stat-item">
              <span className="stat-label">시즌 순위</span>
              <span className="stat-value">4th</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">시즌 포인트</span>
              <span className="stat-value">398 pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션 2: Team Intro 상세 정보 */}
      <div className="team-intro-section">
        {/* 팀 슬로건 */}
        <div className="team-slogan">
          <img
            src="/src/assets/image/teams/ferrari.png"
            alt="Ferrari"
            className="team-logo-main"
          />
          <h2 className="slogan-text">
            Forza Ferrari
            <br />: La Passione Continua
          </h2>
        </div>

        {/* 드라이버 프로필 */}
        <div className="drivers-grid">
          <div className="driver-card">
            <img
              src="/src/assets/image/teams/leclerc.png"
              alt="Leclerc"
              className="driver-img"
            />
            <div className="driver-info left">
              <h3>
                Charles
                <br />
                <span>Leclerc</span>
              </h3>
              <p>샤를 르클레르</p>
            </div>
          </div>
          <div className="driver-card">
            <img
              src="/src/assets/image/teams/hamilton.png"
              alt="Hamilton"
              className="driver-img"
            />
            <div className="driver-info right">
              <h3>
                Lewis
                <br />
                <span>Hamilton</span>
              </h3>
              <p>루이스 해밀턴</p>
            </div>
          </div>
        </div>

        {/* 자동 배너 슬라이더 섹션 */}
        <div className="banner-slider-wrapper">
          {/* 1. 이미지 슬라이드 영역 (화면 꽉 채움) */}
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
                      className={`banner-title ${
                        banner.id === 1
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

          {/* 2. 슬라이드 불렛 (이미지 아래 외부로 이동) */}
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

        {/* 시즌 스탯 & 퍼포먼스 (디자인 기반) */}
        <div className="season-stats-container">
          <h2 className="section-title">SEASON STATS</h2>
          <div className="dna-labels">
            <div className="dna-item">
              Sprint DNA
              <br />
              <span>⚡ 공격형</span>
            </div>
            <div className="dna-item">
              GP DNA
              <br />
              <span>🔧 후반 페이스 과제</span>
            </div>
          </div>

          <div className="stats-table-wrapper">
            <div className="stats-column red-highlight">
              {[6, 38, 1, 2, 1, 8].map((v, i) => (
                <div key={i}>{v}</div>
              ))}
            </div>
            <div className="stats-labels">
              <div>출전 레이스</div>
              <div>누적 포인트</div>
              <div>우승 횟수</div>
              <div>포디움 횟수</div>
              <div>폴 포지션</div>
              <div>탑10 진입</div>
            </div>
            <div className="stats-column red-highlight">
              {[24, 360, 0, 7, 2, 4].map((v, i) => (
                <div key={i}>{v}</div>
              ))}
            </div>
          </div>
        </div>

        {/* 섹션 3: 퍼포먼스 레벨 & 하단 차량 배경 통합 */}
        <div className="performance-car-container">
          {/* 배경이 될 차량 이미지 */}
          <div className="car-bg-wrapper">
            <img
              src="/src/assets/image/teams/car_bg.png"
              alt="Ferrari Car"
              className="car-img-bg"
            />
          </div>

          {/* 이미지 위에 올라올 텍스트 콘텐츠 */}
          <div className="performance-overlay-content">
            <div className="performance-header">
              <span className="header-title">Category</span>
              <span className="header-title">Level</span>
            </div>
            <div className="performance-list">
              {[
                { cat: "퀄리파잉 페이스", lvl: "Top Tier", dot: "green" },
                { cat: "스프린트 레이스 성능", lvl: "Strong", dot: "green" },
                { cat: "최고 직선 속도", lvl: "Top 3", dot: "green" },
                { cat: "프론트 그립", lvl: "Excellent", dot: "green" },
                {
                  cat: "장거리 페이스 안정성",
                  lvl: "Developing",
                  dot: "yellow",
                },
              ].map((item, idx) => (
                <div className="performance-row" key={idx}>
                  <span className="category-name">{item.cat}</span>
                  <span className="level-name">
                    <i className={`dot ${item.dot}`}></i>
                    {item.lvl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 섹션 4: MEET THE TEAM */}
        <div className="team-profile-section">
          {/* 메인 헤더 & 주요 인물 레이아웃 */}
          <div className="meet-the-team-wrapper">
            {/* 그룹 1: MEET + 프레데릭 바쇠르 */}
            <div className="staff-group frederic-set">
              <h2 className="outline-text">MEET</h2>
              <div className="main-staff">
                <div className="staff-circle">
                  <img
                    src="/src/assets/image/teams/meet_1.png"
                    alt="Frederic Vasseur"
                  />
                </div>
                <div className="staff-label right">
                  <span>General Manager</span>
                  <h3>Frederic Vasseur</h3>
                  <p>프레데릭 바쇠르</p>
                </div>
              </div>
            </div>

            {/* 그룹 2: THE + 엔리코 구알티에리 */}
            <div className="staff-group enrico-set">
              <h2 className="outline-text center">THE</h2>
              <div className="main-staff">
                <div className="staff-circle">
                  <img
                    src="/src/assets/image/teams/meet_2.png"
                    alt="Enrico Gualtieri"
                  />
                </div>
                <div className="staff-label left">
                  <span>Technical Power Unit</span>
                  <h3>Enrico Gualtieri</h3>
                  <p>엔리코 구알티에리</p>
                </div>
              </div>
            </div>

            {/* 그룹 3: TEAM + 로익 세라 */}
            <div className="staff-group loic-set">
              <h2 className="outline-text">TEAM</h2>
              <div className="main-staff">
                <div className="staff-circle">
                  <img
                    src="/src/assets/image/teams/meet_3.png"
                    alt="Loic Serra"
                  />
                </div>
                <div className="staff-label right">
                  <span>Technical Chassis</span>
                  <h3>Loic Serra</h3>
                  <p>로익 세라</p>
                </div>
              </div>
            </div>
          </div>
          {/* 팀 세부 정보 그리드 */}
          <div className="team-info-grid">
            <div className="info-item">
              <span>팀 이름</span>
              <h3>Scuderia Ferrari HP</h3>
            </div>
            <div className="info-item">
              <span>CHASSIS : 차량의 핵심 프레임</span>
              <h3>SF-25</h3>
            </div>
            <div className="info-item">
              <span>팀 베이스</span>
              <h3>Maranello, Italy</h3>
            </div>
            <div className="info-item">
              <span>F1 첫 참가 연도</span>
              <h3>1950</h3>
            </div>
          </div>

          {/* 섹션 4 하단: 하단 스태프 리스트 */}
          <div className="sub-staff-slider-container">
            <div className="sub-staff-track">
              {[
                {
                  role: "Head Of Finance",
                  name: "Luigi Centenari",
                  kr: "루이지 첸터나리",
                  img: "/src/assets/image/teams/meet_4.png",
                },
                {
                  role: "Deputy Team Principal",
                  name: "Jerome d’ambrosio",
                  kr: "제롬 담브로지오",
                  img: "/src/assets/image/teams/meet_5.png",
                },
                {
                  role: "Head Of Track Engineering",
                  name: "Matteo togninalli",
                  kr: "마테오 토닌날리",
                  img: "/src/assets/image/teams/meet_6.png",
                },
                {
                  role: "Sporting Director",
                  name: "Diego Ioverno",
                  kr: "디에고 이오베르노",
                  img: "/src/assets/image/teams/meet_7.png",
                },
                {
                  role: "Reserve Driver",
                  name: "Antonio Giovinazzi",
                  kr: "안토니오 지오비나치",
                  img: "/src/assets/image/teams/meet_8.png",
                },
              ].map((staff, idx) => (
                <div className="sub-staff-item" key={idx}>
                  <div className="sub-staff-circle">
                    <img src={staff.img} alt={staff.name} />
                  </div>
                  <span className="staff-role">{staff.role}</span>
                  <h4 className="staff-name">{staff.name}</h4>
                  <p className="staff-kr">{staff.kr}</p>
                </div>
              ))}
            </div>
          </div>
          {/* 섹션 5: HIGHLIGHT (영상/이미지 하이라이트 슬라이더) */}
          <div className="highlight-section">
            <div className="highlight-header">
              <h2 className="section-title">HIGHLIGHT</h2>
              <button className="plus-button" aria-label="더 보기">
                <img src="/src/assets/image/plus.png" alt="" />
              </button>
            </div>

            <div className="highlight-slider-container">
              <div className="highlight-track">
                {[
                  {
                    id: 1,
                    title: "마지막 코너, 승부의 순간",
                    img: "/src/assets/image/teams/teams_high1.png",
                  },
                  {
                    id: 2,
                    title: "은빛 화살에서 붉은 열정으로",
                    img: "/src/assets/image/teams/teams_high2.png",
                  },
                ].map((item) => (
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
          {/* 섹션 6: News (뉴스 리스트) */}
          <div className="news-section">
            <div className="news-header">
              <h2 className="section-title">News</h2>
              <button className="plus-button" aria-label="더 보기">
                <img src="/src/assets/image/plus.png" alt="" />
              </button>
            </div>

            <div className="news-list">
              {[
                {
                  id: 1,
                  title:
                    "270랩(Lap) 기록한 페라리 HP, 2025 시즌 피날레 장식으로 마무리",
                  description:
                    "두 명의 레이스 드라이버는 SF-25 뮬 카를 운전하며 내년 시즌 타이어를 테스트했는데, 이는 18인치 림 직경을 유지하면서도 폭이 더 좁아진 차세대 타이어를 테스트...",
                  date: "2025.12.10",
                  img: "/src/assets/image/teams/teams_news1.png",
                },
                {
                  id: 2,
                  title: "페라리, 3열에서 출발하며 마지막 레이스 도약 준비",
                  description:
                    "분명 오늘 결과는 우리가 기대하고 목표로 했던 수준에는 미치지 못했다. 하지만 팀은 FP3 이후 예선에 맞춰 차를 완벽하게 준비해냈다. 다만 마지막 순간의 작은 실수가...",
                  date: "2025.12.07",
                  img: "/src/assets/image/teams/teams_news2.png",
                },
              ].map((news) => (
                <div className="news-card" key={news.id}>
                  <div className="news-img-wrapper">
                    <img src={news.img} alt={news.title} />
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                    <span className="news-date">{news.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 4. 선택 모달 (picker-modal) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <div className="picker-container">
              <div className="selection-indicator"></div>
              <div className="picker-column">
                <div className="picker-scroll">
                  <div className="spacer" />
                  {years.map((year) => (
                    <div
                      key={year}
                      className={`picker-item ${
                        selectedYear === year ? "active" : ""
                      }`}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </div>
                  ))}
                  <div className="spacer" />
                </div>
              </div>
              <div className="picker-column">
                <div className="picker-scroll">
                  <div className="spacer" />
                  {teams.map((team) => (
                    <div
                      key={team}
                      className={`picker-item ${
                        selectedTeam === team ? "active" : ""
                      }`}
                      onClick={() => setSelectedTeam(team)}
                    >
                      {team}
                    </div>
                  ))}
                  <div className="spacer" />
                </div>
              </div>
            </div>
            <button
              className="select-complete-btn"
              onClick={() => setIsModalOpen(false)}
            >
              선택완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPg;
