import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Layout
import MainLayout from "./components/MainLayout";

// // 온보딩 페이지
// import SplashPg from "./pages/start/SplashPg";
// import OnboardingPg from "./pages/start/OnboardingPg";
// import LoginPg from "./pages/start/LoginPg";
// import SettingPg1 from "./pages/start/SettingPg1";
// import SettingPg2 from "./pages/start/SettingPg2";
// import Welcome from "./pages/start/Welcome";


// 페이지 컴포넌트 (Pages)
import HomeLayout from "./components/HomeLayout";
import TeamDriverLayout from "./components/TeamDriverLayout";
import ShortsLayout from "./components/ShortsLayout";
import CommunityLayout from "./components/CommunityLayout";
import MyLayout from "./components/MyLayout";
import Mercedes from "./pages/teamdriver/Mercedes";


function App() {
  return (
    <Router>
      {/* 1. 페이지 라우팅 설정 */}
      <Routes>
        {/* Start Pages (No GNB) */}
        {/* <Route path="/" element={<SplashPg />} />
        <Route path="/onboarding" element={<OnboardingPg />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/setting1" element={<SettingPg1 />} />
        <Route path="/setting2" element={<SettingPg2 />} />
        <Route path="/welcome" element={<Welcome />} /> */}

        {/* Main App Pages (With GNB & Floating Buttons) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/teamdriver" element={<TeamDriverLayout />} />
          <Route path="/teamdriver/mercedes" element={<Mercedes />} /> {/* Added Mercedes route */}
          <Route path="/shorts" element={<ShortsLayout />} />
          <Route path="/community" element={<CommunityLayout />} />
          <Route path="/my" element={<MyLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;