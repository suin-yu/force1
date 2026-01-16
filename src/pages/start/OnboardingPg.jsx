import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingSwiper from "../../components/onboarding/OnboardingSwiper.jsx";
import { onboardingData } from "../../assets/data/onboardingData.js";
import "./OnboardingPg.css";

const OnboardingPg = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/login");
  };

  return (
    <div className="onboarding-page">
      <OnboardingSwiper list={onboardingData} onFinish={handleFinish} />
    </div>
  );
};

export default OnboardingPg;
