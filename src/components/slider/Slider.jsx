import React from "react";
import TextLoop from "react-text-loop";
import schedule from '../../assets/schedule.docx'

const conctInfo = {
    phone1: "+7 925-652-3200",
    phone2: "+7 925 079-51-35",
    email: "kseniya1chubko@gmail.com",
};

const sliderContent = {
    name: '"Суперсила для мам"',
    description: `Mom is happy - everyone is happy`,
    btnText: " Скачать расписание",
};

const Slider = () => {
    return (
        <>
            <section id="home" className="home-banner">
                <div className="hb-top-fixed d-flex">
                    <div className="hb-info">
                        <a href="tel:+7925-652-3200">{conctInfo.phone1} </a>Ксения
                        <a href="tel:+7 925 079-51-35">{conctInfo.phone2}</a> Евгения
                    </div>
                    <div className="hb-lang">
                    </div>
                </div>

                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-7">
                            <div className="type-box">
                                <h6>Терапевтическая группа</h6>
                                <h1 className="font-alt">{sliderContent.name}</h1>
                                <TextLoop>
                                    <p className="loop-text lead">Взаимоотношения</p>
                                    <p className="loop-text lead"> Психология</p>
                                    <p className="loop-text lead"> Депрессия</p>
                                </TextLoop>{" "}
                                <p className="desc">{sliderContent.description}</p>
                                <div className="mt-4">
                                    <a
                                        className="px-btn px-btn-white"
                                        href={schedule}
                                        download
                                    >
                                        {sliderContent.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hb-me"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/font.jpg"
                        })`,
                    }}
                ></div>
            </section>
        </>
    );
};

export default Slider;
