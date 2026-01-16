import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← 추가
import "./DriverPg.css";
import DriverDetail from "./DriverDetailPg.jsx";

// driver_img
import ferrari_1 from "../../assets/teamdriver/ferrari_1.png";
import ferrari_2 from "../../assets/teamdriver/ferrari_2.png";
import redbull_1 from "../../assets/teamdriver/redbull_1.png";
import redbull_2 from "../../assets/teamdriver/redbull_2.png";
import mercedes_1 from "../../assets/teamdriver/mercedes_1.png";
import mercedes_2 from "../../assets/teamdriver/mercedes_2.png";
import mclaren_1 from "../../assets/teamdriver/mclaren_1.png";
import mclaren_2 from "../../assets/teamdriver/mclaren_2.png";
import racingbull_1 from "../../assets/teamdriver/racingbull_1.png";
import racingbull_2 from "../../assets/teamdriver/racingbull_2.png";
import alpin_1 from "../../assets/teamdriver/alpin_1.png";
import alpin_2 from "../../assets/teamdriver/alpin_2.png";
import hass_1 from "../../assets/teamdriver/hass_1.png";
import hass_2 from "../../assets/teamdriver/hass_2.png";
import aston_1 from "../../assets/teamdriver/aston_1.png";
import aston_2 from "../../assets/teamdriver/aston_2.png";
import williams_1 from "../../assets/teamdriver/williams_1.png";
import williams_2 from "../../assets/teamdriver/williams_2.png";
import kicksauber_1 from "../../assets/teamdriver/kicksauber_1.png";
import kicksauber_2 from "../../assets/teamdriver/kicksauber_2.png";

import bottomarrow from "../../assets/teamdriver/bottomarrow.png";

const Driver = () => {
  const tabs = ["Teams", "Drivers", "Races"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const navigate = useNavigate();

  const goToDetail = (driverId) => {
    navigate(`/driver/${driverId}`);
  };

  return (
    <div className="main-layout">
      <header className="top-section">
        <nav className="tab-container">
          <div className="tab-menu">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="tab-indicator-wrapper">
            <div className="base-line"></div>
            <div
              className="active-indicator"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
              }}
            ></div>
          </div>
        </nav>
      </header>
      <main className="content-area">
        {activeTab === "Teams" && <div className="placeholder">Teams Page</div>}
        {activeTab === "Drivers" && null} {/* ← 최소한으로 수정 */}
        {activeTab === "Races" && <div className="placeholder">Races Page</div>}
      </main>

      {/* 메인콘텐츠 */}
      <div className="content-area">
        <div className="button">
          <button className="year">
            2025 <img src={bottomarrow} alt="" />
          </button>
          <button className="alldriver">
            All Drivers <img src={bottomarrow} alt="" />
          </button>
        </div>
        <h2>Meet the F1 Grid</h2>
        <div className="driverlist">
          <ul>
            {/* ferrari */}
            <li className="ferrari_1" onClick={() => goToDetail("ferrari_1")}>
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Charles Leclerc</h3>
                  <p className="name_k">샤를 르클레르</p>
                </div>
                <div className="driver-img">
                  <img src={ferrari_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="ferrari_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Lewis Hamilton</h3>
                  <p className="name_k">루이스 해밀턴</p>
                </div>
                <div className="driver-img">
                  <img src={ferrari_2} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            {/* redbull */}
            <li className="redbull_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Max Verstappen</h3>
                  <p className="name_k">막스 베르스타펜</p>
                </div>
                <div className="driver-img">
                  <img src={redbull_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="redbull_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Yuki Tsunoda</h3>
                  <p className="name_k">유키 츠노다</p>
                </div>
                <div className="driver-img">
                  <img src={redbull_2} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            {/* mercedes */}
            <li className="mercedes_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Kimi Antonelli</h3>
                  <p className="name_k">키미 안토넬리</p>
                </div>
                <div className="driver-img">
                  <img src={mercedes_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="mercedes_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">George Russell</h3>
                  <p className="name_k">조지 러셀</p>
                </div>
                <div className="driver-img">
                  <img src={mercedes_2} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            {/* mclaren */}
            <li className="mclaren_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Oscar Piastri</h3>
                  <p className="name_k">오스카 피아스트리</p>
                </div>
                <div className="driver-img">
                  <img src={mclaren_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="mclaren_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Lando Norris</h3>
                  <p className="name_k">랜도 노리스</p>
                </div>
                <div className="driver-img">
                  <img src={mclaren_2} alt="" />
                </div>
              </div>
            </li>
            {/* racingbull */}
            <li className="racingbull_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Liam Lawson</h3>
                  <p className="name_k">리암 로슨</p>
                </div>
                <div className="driver-img">
                  <img src={racingbull_1} alt="" />
                </div>
              </div>
            </li>
            <li className="racingbull_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Isack Hadjar</h3>
                  <p className="name_k">아이작 하자르</p>
                </div>
                <div className="driver-img">
                  <img src={racingbull_2} alt="" />
                </div>
              </div>
            </li>
            {/* alpin */}
            <li className="alpin_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Franco Colapinto</h3>
                  <p className="name_k">프란코 콜라핀토</p>
                </div>
                <div className="driver-img">
                  <img src={alpin_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="alpin_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Pierre Gasly</h3>
                  <p className="name_k">피에르 가슬리</p>
                </div>
                <div className="driver-img">
                  <img src={alpin_2} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            {/* hass */}
            <li className="hass_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Oliver Bearman</h3>
                  <p className="name_k">올리버 베어먼</p>
                </div>
                <div className="driver-img">
                  <img src={hass_1} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            <li className="hass_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Esteban Ocon</h3>
                  <p className="name_k">에스테반 오콘</p>
                </div>
                <div className="driver-img">
                  <img src={hass_2} alt="" />
                </div>
                <button
                  className="favorite-btn"
                  onClick={(e) => e.currentTarget.classList.toggle("on")}
                >
                  ★
                </button>
              </div>
            </li>
            {/* aston */}
            <li className="aston_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Fernando Alonso</h3>
                  <p className="name_k">페르난도 알론소</p>
                </div>
                <div className="driver-img">
                  <img src={aston_1} alt="" />
                </div>
              </div>
            </li>
            <li className="aston_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Lance Stroll</h3>
                  <p className="name_k">랜스 스트롤</p>
                </div>
                <div className="driver-img">
                  <img src={aston_2} alt="" />
                </div>
              </div>
            </li>
            {/* williams */}
            <li className="williams_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Carlos Sainz</h3>
                  <p className="name_k">카를로스 사인즈</p>
                </div>
                <div className="driver-img">
                  <img src={williams_1} alt="" />
                </div>
              </div>
            </li>
            <li className="williams_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Alexander Albon</h3>
                  <p className="name_k">알렉산더 알본</p>
                </div>
                <div className="driver-img">
                  <img src={williams_2} alt="" />
                </div>
              </div>
            </li>
            {/* kicksauber */}
            <li className="kicksauber_1">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Gabriel Bortoleto</h3>
                  <p className="name_k">가브리엘 보르톨레토</p>
                </div>
                <div className="driver-img">
                  <img src={kicksauber_1} alt="" />
                </div>
              </div>
            </li>
            <li className="kicksauber_2">
              <div className="driver-info">
                <div className="text-box">
                  <h3 className="name_e">Nico Hülkenberg</h3>
                  <p className="name_k">니코 훌켄버그</p>
                </div>
                <div className="driver-img">
                  <img src={kicksauber_2} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Driver;
