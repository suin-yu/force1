import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// 공통 컴포넌트 (Common Components)
import Gnb from "./components/Gnb";
import Chatbot from "./components/Chatbot";
import TopBtn from "./components/TopBtn";

// 페이지 컴포넌트 (Pages)
import HomePg from "./pages/HomePg";
import ChatbotPg from "./pages/ChatbotPg";
import MyPg from "./pages/my/MyPg";
import NewInquiryPg from "./pages/my/NewInquiryPg";
import InquiryListPg from "./pages/my/InquiryListPg";
import FAQPg from "./pages/my/FAQPg";
import ToSPg from "./pages/my/ToSPg";

function App() {
  return (
    <Router>
      {/* 1. 페이지 라우팅 설정 */}
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/teamdriver" element={<div>TeamDriverPg</div>} />
        <Route path="/shorts" element={<div>ShortsPg</div>} />
        <Route path="/community" element={<div>CommunityPg</div>} />
        <Route path="/my" element={<MyPg />} />
        <Route path="/new-inquiry" element={<NewInquiryPg />} />
        <Route path="/inquiry-list" element={<InquiryListPg />} />
        <Route path="/faq" element={<FAQPg />} />
        <Route path="/tos" element={<ToSPg />} />
        <Route path="/ChatbotPg" element={<ChatbotPg />} />
      </Routes>

      {/* 2. 화면 우측 플로팅 버튼 (챗봇, TOP) */}
      <Chatbot />
      <TopBtn />

      {/* 3. 하단 고정 GNB */}
      <Gnb />
    </Router>
  );
}

export default App;