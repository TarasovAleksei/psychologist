import React from "react";
import {Social1, Social2} from "../Social";
import photoKsu from '../../assets/IMG_20210722_124555.jpg'
import photoEug from '../../assets/IMG_5809.JPG'

const About = () => {
    return (
        <>
            <section id="about" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        <img src={photoKsu} alt="about image"/>
                                    </div>
                                    <Social1/>
                                </div>
                                <div className="info">
                                    <p>Гештальт-терапевт/детский психолог</p>
                                    <h3>Ксения Чубко</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ml-auto">
                            <div className="about-info">
                                <div className="title">
                                    <h3>О психотерапевтах</h3>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Hello, I am a person who has a strong
                                        passion for programming.
                                        I have experience in creating SPA
                                        with React/Redux/TypeScript.
                                        Now I am improving my skills in this
                                        direction and expanding them with
                                        new technologies. I'm planning to
                                        study Node.js because my next focus
                                        is to become a Full-Stack Developer.
                                        And also I have an interest in
                                        boosting my English to C1 level.
                                        I spend my leisure time on CodeWars
                                        or speaking with native English
                                        speakers.
                                        Open to your suggestions.
                                    </p>
                                </div>
                                <div className="info-list">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Имя: </label>
                                                    <span>Ксения Чубко</span>
                                                </li>
                                                <li>
                                                    <label>Возраст: </label>
                                                    <span>26 лет</span>
                                                </li>
                                                <li>
                                                    <label>Адрес: </label>
                                                    <span>Москва</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Тел: </label>
                                                    <span>(+7) 925 652 32 00</span>
                                                </li>
                                                <li>
                                                    <label>Email: </label>
                                                    <span>kseniya1chubko@gmail.ru</span>
                                                </li>
                                                <li>
                                                    <label>What's up: </label>
                                                    <span>(+7) 925 652 32 00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        <img src={photoEug} alt="about image"/>
                                    </div>
                                    <Social2/>
                                </div>
                                <div className="info">
                                    <p>Семейный, перинатальный, кризисный психолог</p>
                                    <h3>Евгения Серегина</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ml-auto">
                            <div className="about-info">
                                <div className="about-text">
                                    <p>
                                        Hello, I am a person who has a strong
                                        passion for programming.
                                        I have experience in creating SPA
                                        with React/Redux/TypeScript.
                                        Now I am improving my skills in this
                                        direction and expanding them with
                                        new technologies. I'm planning to
                                        study Node.js because my next focus
                                        is to become a Full-Stack Developer.
                                        And also I have an interest in
                                        boosting my English to C1 level.
                                        I spend my leisure time on CodeWars
                                        or speaking with native English
                                        speakers.
                                        Open to your suggestions.
                                    </p>
                                </div>
                                <div className="info-list">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Имя: </label>
                                                    <span>Евгения Серегина</span>
                                                </li>
                                                <li>
                                                    <label>Возраст: </label>
                                                    <span>33 года</span>
                                                </li>
                                                <li>
                                                    <label>Адрес: </label>
                                                    <span>Москва</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Тел: </label>
                                                    <span>(+7) 925 079-51-35</span>
                                                </li>
                                                <li>
                                                    <label>Email: </label>
                                                    <span>mail is was here</span>
                                                </li>
                                                <li>
                                                    <label>Telegram: </label>
                                                    <span>@Aleksei_Tarasov</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default About;
