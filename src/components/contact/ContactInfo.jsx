import React from "react";

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info">
                <h4>Записаться на группу можно одним из способов</h4>

                <ul>
                    <li className="media">
                        <i className="icon icon-phone"></i>
                        <span className="media-body">
              Позвонить по телефону:
                    <div className="hb-info">
                        <div>
                            <a href="tel:+7925-652-3200">+7 925-652-3200 </a>Ксения
                        </div>
                        <div>
                            <a href="tel:+7925 079-51-35">+7 925 079-51-35</a> Евгения
                        </div>
                    </div>
                </span>
                    </li>
                    <li className="media">
                        <i className="icon icon-envelope"></i>
                        <span className="media-body">Написать на эл.почту:
                        <div>
                           kseniya1chubko@gmail.ru Ксения
                        </div>
                        <div>
                            kseniya1chubko@gmail.ru Евгения
                        </div>

                        </span>
                    </li>
                    {/* End li */}

                    <li className="media">
                        <i className="icon icon-desktop"></i>
                        <span> Связаться с одним из тренеров через What's up или Telegram</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactInfo;
