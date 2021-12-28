import React from "react"
import {Routes, Route} from 'react-router-dom'
import {AfterAuthPage} from "./pages/AfterAuthPage";
import {AboutSystemPage} from "./pages/AboutSystemPage";
import {MainPage} from "./pages/MainPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/afterauthpage/:id" element={<AfterAuthPage />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/aboutsystempage" element={<AboutSystemPage />} />
        </Routes>
    )
}