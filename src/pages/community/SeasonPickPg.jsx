import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeasonPickPg.css";

// Import driver images
import voteProfile01 from "../../assets/img/community/vote/voteProfile01.png";
import voteProfile02 from "../../assets/img/community/vote/voteProfile02.png";
import voteProfile03 from "../../assets/img/community/vote/voteProfile03.png";
import voteProfile04 from "../../assets/img/community/vote/voteProfile04.png";
import voteProfile05 from "../../assets/img/community/vote/voteProfile05.png";
import voteProfile06 from "../../assets/img/community/vote/voteProfile06.png";
import voteProfile07 from "../../assets/img/community/vote/voteProfile07.png";
import voteProfile08 from "../../assets/img/community/vote/voteProfile08.png";
import voteProfile09 from "../../assets/img/community/vote/voteProfile09.png";
import voteProfile10 from "../../assets/img/community/vote/voteProfile10.png";
import voteProfile11 from "../../assets/img/community/vote/voteProfile11.png";
import voteProfile12 from "../../assets/img/community/vote/voteProfile12.png";
import voteProfile13 from "../../assets/img/community/vote/voteProfile13.png";
import voteProfile14 from "../../assets/img/community/vote/voteProfile14.png";
import voteProfile15 from "../../assets/img/community/vote/voteProfile15.png";
import voteProfile16 from "../../assets/img/community/vote/voteProfile16.png";
import voteProfile17 from "../../assets/img/community/vote/voteProfile17.png";
import voteProfile18 from "../../assets/img/community/vote/voteProfile18.png";
import voteProfile19 from "../../assets/img/community/vote/voteProfile19.png";
import voteProfile20 from "../../assets/img/community/vote/voteProfile20.png";
import voteCheck from "../../assets/img/community/vote/vote_check.png";

const SeasonPickPg = () => {
    const navigate = useNavigate();
    const [selectedDriver, setSelectedDriver] = useState(null);

    // 드라이버 이미지 배열
    const driverImages = [
        voteProfile01, voteProfile02, voteProfile03, voteProfile04, voteProfile05,
        voteProfile06, voteProfile07, voteProfile08, voteProfile09, voteProfile10,
        voteProfile11, voteProfile12, voteProfile13, voteProfile14, voteProfile15,
        voteProfile16, voteProfile17, voteProfile18, voteProfile19, voteProfile20
    ];

    // 드라이버별 팀 컬러 매핑
    const getDriverColor = (id) => {
        if (id === 1 || id === 2) return "rgba(166, 24, 15, 0.8)"; // Ferrari
        if (id === 3 || id === 4) return "rgba(47, 167, 159, 0.8)"; // Mercedes
        if (id === 5 || id === 6) return "rgba(223, 135, 40, 0.8)"; // McLaren
        if (id === 7 || id === 8) return "rgba(7, 43, 114, 0.8)"; // Red Bull
        if (id === 9 || id === 10) return "rgba(7, 61, 58, 0.8)"; // Aston Martin
        if (id === 11 || id === 12) return "rgba(58, 62, 68, 0.7)"; // Haas
        if (id === 13 || id === 14) return "rgba(0, 160, 222, 0.8)"; // Williams
        if (id === 15 || id === 16) return "rgba(18, 82, 147, 0.8)"; // Racing Bulls
        if (id === 17 || id === 18) return "rgba(254, 172, 207, 0.8)"; // Alpine
        if (id === 19 || id === 20) return "rgba(166, 227, 171, 0.8)"; // Sauber
        return "rgba(255, 255, 255, 0.8)";
    };

    // 드라이버 데이터
    const drivers = [
        { id: 1, name: "Charles Leclerc", namekor: "샤를 르클레르", image: driverImages[0] },
        { id: 2, name: "Lewis Hamilton", namekor: "루이스 해밀턴", image: driverImages[1] },
        { id: 3, name: "George Russell", namekor: "조지 러셀", image: driverImages[2] },
        { id: 4, name: "Kimi Antonelli", namekor: "키미 안토넬리", image: driverImages[3] },
        { id: 5, name: "Oscar Piastri", namekor: "오스카 피아스트리", image: driverImages[4] },
        { id: 6, name: "Lando Norris", namekor: "랜도 노리스", image: driverImages[5] },
        { id: 7, name: "Max Verstappen", namekor: "막스 베르스타펜", image: driverImages[6] },
        { id: 8, name: "Yuki Tsunoda", namekor: "츠노다 유키", image: driverImages[7] },
        { id: 9, name: "Lance Stroll", namekor: "랜스 스트롤", image: driverImages[8] },
        { id: 10, name: "Fernando Alonso", namekor: "페르난도 알론소", image: driverImages[9] },
        { id: 11, name: "Esteban Ocon", namekor: "에스테반 오콘", image: driverImages[10] },
        { id: 12, name: "Oliver Bearman", namekor: "올리버 베어먼", image: driverImages[11] },
        { id: 13, name: "Alexander Albon", namekor: "알렉스 알본", image: driverImages[12] },
        { id: 14, name: "Carlos Sainz Jr.", namekor: "카를로스 사인츠", image: driverImages[13] },
        { id: 15, name: "Isack Hadjar", namekor: "아이작 하자르", image: driverImages[14] },
        { id: 16, name: "Liam Lawson", namekor: "리암 로슨", image: driverImages[15] },
        { id: 17, name: "Franco Colapinto", namekor: "프랑코 콜라핀토", image: driverImages[16] },
        { id: 18, name: "Pierre Gasly", namekor: "피에르 가슬리", image: driverImages[17] },
        { id: 19, name: "Nico Hülkenberg", namekor: "니코 휠켄베르크", image: driverImages[18] },
        { id: 20, name: "Gabriel Bortoleto", namekor: "가브리에우 보르틀레투", image: driverImages[19] },
    ];

    const handleDriverSelect = (driverId) => {
        // 같은 드라이버를 다시 클릭하면 선택 해제
        setSelectedDriver(selectedDriver === driverId ? null : driverId);
    };

    const handleBack = () => {
        navigate(-1); // 이전 페이지로 돌아가기
    };

    return (
        <div className="season-pick-container">
            {/* Header */}
            <header className="season-pick-header">
                <button type="button" className="back-button" onClick={handleBack}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="header-title">Season Pick</h1>
            </header>

            {/* Title Section */}
            <section className="title-section">
                <h2 className="season-pick-title">
                    Who's your pick for the 2026 F1 Champion?
                </h2>
            </section>

            {/* Driver Grid */}
            <section className="driver-grid-section">
                <div className="driver-grid">
                    {drivers.map((driver) => (
                        <div
                            key={driver.id}
                            className="driver-card"
                        >
                            {/* 프로필 이미지 영역 */}
                            <div
                                className={`driver-image-wrapper ${selectedDriver === driver.id ? "selected" : ""}`}
                                onClick={() => handleDriverSelect(driver.id)}
                            >
                                <div className="driver-image-placeholder">
                                    <img src={driver.image} alt={driver.name} className="driver-image" />

                                    {/* 선택 시 컬러 오버레이 */}
                                    {selectedDriver === driver.id && (
                                        <>
                                            <div
                                                className="color-overlay"
                                                style={{ backgroundColor: getDriverColor(driver.id) }}
                                            />
                                            <img
                                                src={voteCheck}
                                                alt="Selected"
                                                className="check-icon"
                                            />
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* 드라이버 정보 */}
                            <div className="driver-info">
                                <p className="driver-name">{driver.name}</p>
                                <p className="driver-namekor">{driver.namekor}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bottom-action-area">
                    {/* 공통 컴포넌트가 있다면 <SharedButton text="투표 하기" /> 형태로 사용 */}
                    <button
                        type="button"
                        className={`action-button ${selectedDriver ? "active" : ""}`}
                        onClick={() => {
                            if (selectedDriver) {
                                navigate('/community/vote/result');
                            }
                        }}
                    >
                        투표 완료
                    </button>
                </div>



            </section>
        </div>
    );
};

export default SeasonPickPg;
