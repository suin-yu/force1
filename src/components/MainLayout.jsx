import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Gnb from "./common/Gnb.jsx";
import TopBtn from "./common/TopBtn.jsx";
import ChatbotPg from "../pages/home/ChatbotPg.jsx";

const MainLayout = () => {
  const location = useLocation();
  
  // ChatbotPg를 숨길 페이지 경로들
  const hideChatbotPages = [
    '/teamdriver',
    '/teamdriver/mercedes',
  ];
  
  // 현재 경로가 숨길 페이지 목록에 포함되는지 확인
  const shouldHideChatbot = hideChatbotPages.some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <>
      {/* 페이지 콘텐츠 */}
      <Outlet />

      {/* 화면 우측 플로팅 버튼 (챗봇, TOP) */}
      {!shouldHideChatbot && <ChatbotPg />}
      <TopBtn />

      {/* 하단 고정 GNB */}
      <Gnb />
    </>
  );
};

export default MainLayout;
