import React from 'react';
import { Link } from 'react-router-dom';
import classes from './WelcomePage.module.css';

const WelcomePage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.welcomeContainer}>
                <h3 className={classes.welcomeText}>Добро пожаловать на TextRacer!🤗</h3>
                <p className={classes.title}>Твои пальцы смогут делать нечто фантастическое</p>
                <div className={classes.imageContainer}>
                    <div className={classes.imgBlock}>
                        <img className={classes.img} src="/assets/ms-starky-happy.svg" alt="happyface" />
                        <p className={classes.under}>Совершенствуй слепую печать</p>
                    </div>
                    <div className={classes.imgBlock}>
                        <img className={classes.img} src="/assets/ms-target.svg" alt="happyface" />
                        <p className={classes.under}>Пройди тест и получи сертификат</p>
                    </div>
                    <div className={classes.imgBlock}>
                        <img className={classes.img} src="/assets/ms-lightning.svg" alt="happyface" />
                        <p className={classes.under}>Стань лучше всех в рейтинге и соревнуйся с друзьями</p>
                    </div>
                </div>
                <Link to="/main">
                    <button className={classes.btn}>Поехали</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;
