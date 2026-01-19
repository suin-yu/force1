import React from "react";
import "./VoteResultPg.css";

// Import images
import maxProfile from "../../assets/img/community/vote/max_profile.png";
import maxP1 from "../../assets/img/community/vote/max_p1.png";
import maxMark01 from "../../assets/img/community/vote/max_mark_01.png";
import maxMark02 from "../../assets/img/community/vote/max_mark_02.png";

// Import ranking images
import rank02 from "../../assets/img/community/vote/rank02.png";
import rank03 from "../../assets/img/community/vote/rank03.png";
import rank04 from "../../assets/img/community/vote/rank04.png";
import rank05 from "../../assets/img/community/vote/rank05.png";
import rank06 from "../../assets/img/community/vote/rank06.png";
import rank07 from "../../assets/img/community/vote/rank07.png";
import rank08 from "../../assets/img/community/vote/rank08.png";
import rank09 from "../../assets/img/community/vote/rank09.png";
import rank10 from "../../assets/img/community/vote/rank10.png";

// Import ranking bars
import rankBar02 from "../../assets/img/community/vote/rankBar02.png";
import rankBar03 from "../../assets/img/community/vote/rankBar03.png";
import rankBar04 from "../../assets/img/community/vote/rankBar04.png";
import rankBar05 from "../../assets/img/community/vote/rankBar05.png";
import rankBar06 from "../../assets/img/community/vote/rankBar06.png";
import rankBar07 from "../../assets/img/community/vote/rankBar07.png";
import rankBar08 from "../../assets/img/community/vote/rankBar08.png";
import rankBar09 from "../../assets/img/community/vote/rankBar09.png";
import rankBar10 from "../../assets/img/community/vote/rankBar10.png";

const VoteResultPg = () => {
    // 랭킹 데이터 (2위~10위)
    const rankings = [
        { rank: 2, name: "Charles Leclerc", team: "Ferrari", percentage: "32.8%", image: rank02, bar: rankBar02 },
        { rank: 3, name: "George Russell", team: "Mercedes", percentage: "29.6%", image: rank03, bar: rankBar03 },
        { rank: 4, name: "Kimi Antonelli", team: "Mercedes", percentage: "23.8%", image: rank04, bar: rankBar04 },
        { rank: 5, name: "Oscar Piastri", team: "McLaren", percentage: "21.9%", image: rank05, bar: rankBar05 },
        { rank: 6, name: "Lando Norris", team: "McLaren", percentage: "13.5%", image: rank06, bar: rankBar06 },
        { rank: 7, name: "Lewis Hamilton", team: "Ferrari", percentage: "11.7%", image: rank07, bar: rankBar07 },
        { rank: 8, name: "Alexander Albon", team: "Williams", percentage: "8.3%", image: rank08, bar: rankBar08 },
        { rank: 9, name: "Carlos Sainz", team: "Williams", percentage: "6.2%", image: rank09, bar: rankBar09 },
        { rank: 10, name: "Fernando Alonso", team: "Aston Martin", percentage: "5.5%", image: rank10, bar: rankBar10 },
    ];

    return (
        <div className="vote-result-container">
            {/* 1위 선수 섹션 */}
            <section className="first-place-section">
                <div className="first-place-card">
                    {/* P1 아이콘 */}
                    <img src={maxP1} alt="P1" className="p1-icon" />

                    {/* 선수 정보 (왼쪽) */}
                    <div className="first-place-info">
                        <div className="name-line">
                            <span className="first-place-name">Max</span>
                            <div className="marks-inline">
                                <img src={maxMark01} alt="Country" className="mark-icon-country" />
                                <img src={maxMark02} alt="Team" className="mark-icon-team" />
                            </div>
                        </div>
                        <div className="surname-line">
                            <span className="first-place-name">Verstappen</span>
                        </div>
                    </div>

                    {/* 선수 이미지 (오른쪽) */}
                    <img src={maxProfile} alt="Max Verstappen" className="first-place-image" />
                </div>
            </section>

            {/* 랭킹 리스트 섹션 (2위~10위) */}
            <section className="ranking-list-section">
                <div className="ranking-list">
                    {rankings.map((item) => (
                        <div key={item.rank} className="ranking-item">
                            <span className="rank-number">{item.rank}</span>
                            <img src={item.image} alt={item.name} className="rank-profile" />
                            <div className="rank-name-bar">
                                <p className="rank-name">{item.name}</p>
                                <img src={item.bar} alt="Vote bar" className="rank-bar" />
                            </div>
                            <p className="rank-team">{item.team}</p>
                            <span className="rank-percentage">{item.percentage}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default VoteResultPg;
