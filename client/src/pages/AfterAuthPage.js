import React from "react";
import Logo from "../components/Logo/Logo";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
import "./Afterauthpage.css";
/*import Fullchatwindow from "../components/FullChatWindow/Fullchatwindow";*/
import {Routes, Route} from "react-router-dom";

export const AfterAuthPage = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={
                        <div className='wrapper'>
                            <Logo/>
                            <Header/>
                            <Map/>
                            <Footer/>
                        </div>
                    }/>
{/*                    <Route path="fullchatwindow" element={<Fullchatwindow />}/>*/}
                </Routes>

        </>
    )
}