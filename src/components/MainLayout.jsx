import React from "react";
import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";
import TopBtn from "./TopBtn";

const MainLayout = () => {
    return (
        <>
            <Outlet />
            <Gnb />
            <TopBtn />
        </>
    );
};

export default MainLayout;
