import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { onboardingData } from "../../assets/data/onboardingData";
import "./OnboardingSwiper.css";

const OnboardingSwiper = () => {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="onboarding-swiper"
    >
      {onboardingData.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div className="onboarding-slide">
            {/* 🆕 Skip 버튼 이사 완료! */}
            {/* 마지막 슬라이드(Next 버튼 나오는 곳)가 아닐 때만 보여줍니다 */}
            {index !== onboardingData.length - 1 && (
              <button className="skip-btn" onClick={() => navigate("/login")}>
                Skip
              </button>
            )}

            {/* 👇 기존 코드 유지 (이미지 액자) */}
            <div className="img-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="gradient-overlay"></div>
            </div>

            {/* 👇 기존 코드 유지 (텍스트 컨테이너) */}
            <div className="text-container">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              {index === onboardingData.length - 1 && (
                <button className="Next-btn" onClick={() => navigate("/login")}>
                  Next
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OnboardingSwiper;
