import { Outlet, useLocation } from "react-router-dom";
import Gnb from "./common/Gnb.jsx";
import TopBtn from "./common/TopBtn.jsx";
import ChatbotBtn from "./common/ChatbotBtn.jsx";

const MainLayout = () => {
    const location = useLocation();
    const isShortsPage = location.pathname === '/shorts';

    return (
        <>
            <Outlet />
            <Gnb />
            {!isShortsPage && (
                <>
                    <ChatbotBtn />
                    <TopBtn />
                </>
            )}
        </>
    );
};

export default MainLayout;
