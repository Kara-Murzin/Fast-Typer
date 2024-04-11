import React, { useEffect, useState, useContext } from 'react';
import classes from "./textracer.module.css"
import {RandomTextContext } from './RandomTextContext';

const TextRacer = () => {
    const { randomText , generateRandomText } = useContext(RandomTextContext);
    const [time, setTime] = useState(0);
    const [errors, setErrors] = useState(0);
    const [isRaceActive, setIsRaceActive] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [position, setPosition] = useState(0);
    const [isCorrect, setIsCorrect] = useState(true)

    useEffect(() => {
        let timer:NodeJS.Timeout;
        if (isRaceActive && time < 60) {
            timer = setTimeout(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (time === 60) {
            stopRace();
        }
        return () => clearTimeout(timer);
    }, [isRaceActive, time]);

    const startRace = () => {
        setIsRaceActive(true);
        setPosition(0);
        setTime(0);
        setErrors(0);
        setUserInput('');
    };
    const ChangeText = () => {
        generateRandomText();
        setIsRaceActive(false);
        setPosition(0);
        setTime(0);
        setErrors(0);
        setUserInput('');
    }

    const stopRace = () => {
        setIsRaceActive(false);
        window.location.href = `/results/${position}/${errors}`;
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!isRaceActive) {return;}
        const input = e.target.value;
        if (randomText.charAt(position) !== input.charAt(position)){
            setErrors((prevErrors) => prevErrors + 1);
            setIsCorrect(false);
            return;
        }
        setIsCorrect(true);
        setUserInput(input);
        setPosition((prevPosition) => prevPosition + 1);
        if (position === randomText.length - 1) {
            stopRace();
        }
    };
    const progress = Math.floor((position / randomText.length) * 100);
    return (
        <div className={classes.textRacerContainer}>
            <div className={classes.textareaContainer}>
                <span style={{color:"green"}}>{randomText.substring(0, userInput.length )}</span>
                <span style={{color:isCorrect ? "black" : "red" }}>{randomText.substring(userInput.length,userInput.length +1 )}</span>
                {randomText.substring(userInput.length +1, randomText.length)}
            </div>
            <div>
                <input type="text" value={userInput} onChange={handleInputChange} className={classes.inputField}/>
                <p className={classes.under}>Progress: {progress}%</p>
                <p className={classes.under}>Time: {time} seconds</p>
            </div>
            <div className={classes.buttonsContainer}>
                <button onClick={startRace} className={classes.button}>Start</button>
                <button onClick={ChangeText} className={classes.button}>Change text</button>
                <button onClick={stopRace} className={classes.button}>Stop</button>
            </div>
        </div>
    );
};

export default TextRacer;
