import React from "react"
import {BrowserRouter} from "react-router-dom";
import 'materialize-css'
import './index.css'
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(true)
    return (
        <BrowserRouter>
        <div className="main_div">
            {routes}
        </div>
        </BrowserRouter>
    );
}

export default App;
