import React from 'react';
import {Link} from "react-router-dom";
import TextRacer from "../TextRacer/textracer";
import classes from "./MainPage.module.css";
import {RandomTextProvider} from "../TextRacer/RandomTextContext";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.headerTitle}>
                <Link to="/main">
                    <button className={classes.mainBtn}>Text-racer</button>
                </Link>
                <Link to="/results">
                    <button className={classes.resultBtn}>Results</button>
                </Link>
            </div>
            <RandomTextProvider>
                <TextRacer />
            </RandomTextProvider>
        </div>
    );
};

export default MainPage;