import React from "react";
import { useNavigate } from "react-router-dom";
import "./CommunityVotePg.css";
import betBannerImg from "../../assets/img/community/vote/bet_banner.png";


// 만약 팀에서 만든 공통 버튼 컴포넌트가 있다면 import해서 쓰세요.
// import SharedButton from '../../components/SharedButton';

const CommunityVotePg = () => {
  const navigate = useNavigate();
  return (
    <div className="vote-page-container">
      {/* 2. 메인 컨텐츠 영역 */}
      <main className="vote-content">
        {/*  이미지와 텍스트 박스 */}
        <div className="betting-card">
          <img
            src={betBannerImg}
            alt="Season Winner Bet"
            className="card-image"
          />

          {/* 이미지 위의 텍스트 */}
          <div className="card-overlay">
            <h2 className="overlay-text">
              Bet on the winner
              <br />
              of this season
            </h2>
          </div>
        </div>
      </main>

      {/* 3. 하단 버튼 영역 */}
      <div className="bottom-action-area">
        {/* 공통 컴포넌트가 있다면 <SharedButton text="투표 하기" /> 형태로 사용 */}
        <button
          className="vote-action-button"
          onClick={() => navigate('/community/vote/season-pick')}
        >
          투표 하기
        </button>
      </div>

    </div>
  );
};

export default CommunityVotePg;
