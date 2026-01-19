import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TeamsPg from "./teamdriver/TeamsPg";
import Races from "./teamdriver/Races";
import "./Teamdriver.css";

const Teamdriver = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "Teams");
  const tabs = ["Teams", "Drivers", "Races"];

  return (
    <div className="main-layout">
      {/* (1) 상단 탭 메뉴: 페이지가 바뀌어도 이 자리에 항상 고정 */}
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

      {/* (2) 내용 영역: 탭에 따라 이 안의 컴포넌트만 교체됨 */}
      <main className="content-wrapper">
        {activeTab === "Teams" && <TeamsPg />}

        {activeTab === "Drivers" && (
          <div className="placeholder-screen">
            <h2>Drivers Page</h2>
            <p>준비 중입니다.</p>
          </div>
        )}

        {activeTab === "Races" && <Races />}
      </main>
    </div>
  );
};

export default Teamdriver;
