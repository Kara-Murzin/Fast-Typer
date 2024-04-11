import React from 'react';
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./WelcomePage/Welcome";
import MainPage from "./MainPage/MainPage";
import ResultPage from "./ResultPage/ResultPage";
import Error from "./NotFoundPage"


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/results" element={<ResultPage/>}/>
            <Route path="/results/:position/:errors" element={<ResultPage/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    );
};

export default Routing;