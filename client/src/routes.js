import React from "react"
import {Routes, Route} from 'react-router-dom'
import {AboutSystemPage} from "./pages/AboutSystemPage";
import {MainPage} from "./pages/MainPage";
import {MainUserPage} from "./pages/MainUserPage/MainUserPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                {/*<Route path="/afterauthpage/:id" element={<AfterAuthPage />} />*/}
                <Route path="/mainuserpage/" element={<MainUserPage />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutsystempage" element={<AboutSystemPage />} />
        </Routes>
    )
}