import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPg.css";

// 👇 이미지들 import (파일 경로 꼭 확인하세요!)
// 로고, 배경, SNS 아이콘(애플, 구글, 이메일)
import bgImage from "../../assets/img/onboarding/login_bg.png"; // 체커기 배경
import logoImage from "../../assets/img/onboarding/login_logo.svg"; // FORCE1 로고
import appleIcon from "../../assets/img/onboarding/icon_apple.svg";
import googleIcon from "../../assets/img/onboarding/icon_google.svg";
import emailIcon from "../../assets/img/onboarding/icon_mail.svg";

const LoginPg = () => {
  const navigate = useNavigate();

  // 모든 버튼이 '설정 온보딩' 페이지로 이동
  const handleLogin = () => {
    navigate("/setting"); // 👈 라우터에 이 주소가 등록되어 있어야 합니다!
  };

  return (
    <div className="login-page">
      {/* 1. 배경 이미지 (어두운 오버레이 포함) */}
      <div className="login-bg-wrapper">
        <img src={bgImage} alt="background" />
        <div className="dim-overlay"></div>
      </div>

      {/* 2. 컨텐츠 영역 */}
      <div className="login-content">
        {/* 상단 로고 영역 */}
        <div className="logo-section">
          <img src={logoImage} alt="FORCE1" className="main-logo" />
          <p className="sub-text">
            Ready to join the grid
            <span>?</span>
          </p>
        </div>

        {/* 버튼 영역 */}
        <div className="btn-group">
          <button className="login-btn apple" onClick={handleLogin}>
            <img src={appleIcon} alt="apple" />
            Apple sign in
          </button>

          <button className="login-btn google" onClick={handleLogin}>
            <img src={googleIcon} alt="google" />
            Google sign in
          </button>

          <button className="login-btn email" onClick={handleLogin}>
            <img src={emailIcon} alt="email" />
            Email sign in
          </button>
        </div>

        {/* 하단 링크 */}
        <div className="footer-link">
          <p>
            Haven't account? <span className="register-text">Register now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
