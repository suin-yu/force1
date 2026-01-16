import React from "react";
import "./DriverDetailPg.css";

import leftarrow from "../../assets/teamdriver/leftarrow.png";
import monaco from "../../assets/teamdriver/monaco.png";
import ferrari_logo from "../../assets/teamdriver/ferrari_logo.png";

const DriverDetailPg = () => {
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
    <div className="driverdetail-layout">
      <top>
        <button className="leftarrow">
          <img src={leftarrow} alt="" />
        </button>
        <h2>Charles Leclerc</h2>
        <button
          className="favorite-btn"
          onClick={(e) => e.currentTarget.classList.toggle("on")}
        >
          ★
        </button>
      </top>

      <div className="main">
        <p>
          You’ve supported <br />
          🏁 27 races <br />
          since 2023
        </p>
        <h2 className="name_top">Charles</h2>
        <h2 className="name_bottom">Leclerc</h2>
        <div className="driver-portfolio">
          <img src={monaco} alt="" />
          <p className="country">Monaco</p>
          <p className="number">#16</p>
          <p className="birth">1997.10.16</p>
        </div>
      </div>

      <div className="racecraft">
        <div className="left">
          <div className="top">
            <img src={ferrari_logo} alt="" />
            <div className="team-box">
              <p>Team</p>
              <p>Ferrari</p>
            </div>
          </div>
          <ul className="stats-list">
            {data.map(
              (
                item,
                index // 명단(data)에서 한 줄씩 꺼내서 'item'이라고 부름
              ) => (
                <li key={index}>
                  <div className="stat-label">{item.label}</div>{" "}
                  {/* ← 여기서 "페라리 DNA", "레이스 페이스" 등이 순서대로 찍힘 */}
                  <div className="stat-value">{item.score}</div>{" "}
                  {/* ← 여기서 10, 8.5 등이 순서대로 찍힘 */}
                  <div
                    className="progress-bar"
                    style={{ width: `${(item.score / item.max) * 100}%` }} // ← 게이지 길이도 점수마다 다르게 계산됨
                  ></div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverDetailPg;
