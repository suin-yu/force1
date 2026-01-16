import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 👇 SVG 파일 불러오기 (경로는 본인 파일 위치에 맞게 수정!)
import logoImg from "../../assets/img/onboarding/splash_logo.svg";
import "./SplashPg.css";

const SplashPg = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="wrap">
      <div className="splash-container">
        <p>
          Ready to join the grid <span>?</span>
        </p>
        <img className="splash-logo" src={logoImg} alt="FORCE1 Logo" />
      </div>
    </div>
  );
};

export default SplashPg;
