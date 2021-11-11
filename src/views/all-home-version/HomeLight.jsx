import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";
import About from "../../components/about/About";

const HomeOne = () => {
    useDocumentTitle("psychologist");
    document.body.classList.add("theme-light");
    return (
        <div className="main-left">
            <Header/>
            <Slider/>
            <About/>
            <Resume/>
            <section id="contactus" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 m-15px-tb">
                            <ContactInfo/>
                        </div>
                        <div className="col-lg-7 ml-auto m-15px-tb  ">
                            <div className="contact-form">
                                <img style={{'border-radius':'15px'}} src="https://alexandernikolaevichbiryukov.ru/images/Pochemu_muzhchina_ne_zvonit.jpg" alt=""/>
                                {/*<h4>Say Something</h4>*/}
                                {/*<Contact/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer white">
                <div className="container">
                    <Footer/>
                </div>
            </footer>
        </div>
    );
};

export default HomeOne;
