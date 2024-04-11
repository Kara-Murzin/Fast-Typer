import React from 'react';
import { Link, useParams } from "react-router-dom";
import classes from "./result.module.css";


const ResultPage = () => {
    const { position, errors } = useParams();

    return (
        <div className={classes.resultContainer}>
            <h1>Result</h1>
            <p>Position: {position}</p>
            <p>Errors: {errors}</p>
            <Link to="/" className={classes.link}>
                <button>Back to Home</button>
            </Link>
            <Link to="/main" className={classes.link}>
                <button>Try again</button>
            </Link>
        </div>

    );
};

export default ResultPage;
