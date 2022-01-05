import React from "react";
import Header from "./MainUserPageHeader/MainUserPageHeader";
import Main from "./MainUserPageMain/MainUserPageMain";
import Footer from "./MainUserPageFooter/MainUserPageFooter";
import MainUserPageStyles from "./MainUserPage.module.css";
import {Routes, Route} from "react-router-dom";

export const MainUserPage = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={
                        <div className={MainUserPageStyles.body}>
                            <Header />
                            <Main />
                            <Footer />
                        </div>
                    }/>
                </Routes>
        </>
    )
}