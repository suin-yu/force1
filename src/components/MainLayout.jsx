import React from "react";
import { Outlet } from "react-router-dom";
import Gnb from "./common/Gnb.jsx";
import TopBtn from "./common/TopBtn.jsx";
import ChatbotPg from "../pages/home/ChatbotPg.jsx";

const MainLayout = () => {
  return (
    <>
      {/* 페이지 콘텐츠 */}
      <Outlet />

      {/* 화면 우측 플로팅 버튼 (챗봇, TOP) */}
      <ChatbotPg />
      <TopBtn />

      {/* 하단 고정 GNB */}
      <Gnb />
    </>
  );
};

export default MainLayout;
