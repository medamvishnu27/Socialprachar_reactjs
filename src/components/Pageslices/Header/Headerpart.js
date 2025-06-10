import React, { useEffect, useRef, useState } from 'react';
import JD_course from '../../../assets/small bussines award.png';
import Buttonstyle from '../Enrollbutton/Enrollbutton.module.css';
// headerpage logos
import unlockLogo from '../../../assets/AssetsOfDetailsPage/masterclass/unlock.png';
import booksymbol from '../../../assets/AssetsOfDetailsPage/masterclass/open-book.png';
import successLogo from '../../../assets/AssetsOfDetailsPage/masterclass/success.png';
import partnershipLogo from '../../../assets/AssetsOfDetailsPage/masterclass/hand-shake.png';
import MobileIconLogo from '../../../assets/AssetsOfDetailsPage/masterclass/mobile-development.png';
// import blackLine from '../../../assets/AssetsOfDetailsPage/blackLine.svg';

import style from './Header.module.css';
import Enrollbutton from './../Enrollbutton/Enrollbutton';
import BackgroundImg from '../../../assets/AssetsOfDetailsPage/background.png';
import FollowerImg from '../../../assets/AssetsOfDetailsPage/FollowewrGroup.webp';
import starSymbol from '../../../assets/AssetsOfDetailsPage/star.svg';
import { data } from '../../Cards/CardData';
import { useNavigate, useParams } from 'react-router-dom';
import company1Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Accenture.png';
import company2Logo from '../../../assets/AssetsOfDetailsPage/masterclass/AWS.png';
import company3Logo from '../../../assets/AssetsOfDetailsPage/masterclass/CISCO.jpg';
import company4Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Cognizant.png';
import company5Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Fusion Technologies.jpeg';
import company6Logo from '../../../assets/AssetsOfDetailsPage/masterclass/GOC.jpg';
import company7Logo from '../../../assets/AssetsOfDetailsPage/masterclass/pinaca_Technology.jpeg';
import company8Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Honeywell.png';
import company9Logo from '../../../assets/AssetsOfDetailsPage/masterclass/MOURI Tech.png';
import company10Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Micron Technologies.png';
import company11Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Sonata_Software_Logo.png';
import company12Logo from '../../../assets/AssetsOfDetailsPage/masterclass/SucceedTechnologies.png';
import company13Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Sutherland.png';
import company14Logo from '../../../assets/AssetsOfDetailsPage/masterclass/TCS.jpg';
import company15Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tech Mahindra.jpeg';
import company16Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tiger Analytics.png';
import company17Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tricubics.png';
import company18Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Yotta_Data_Services_Logo.jpg';
import company19Logo from '../../../assets/AssetsOfDetailsPage/masterclass/amber_flux_private_limited_logo.jpeg';
import company20Logo from '../../../assets/AssetsOfDetailsPage/masterclass/dell_technologies_logo.png';
import Testmonials from './../Testmonials/Testmonials';
import HeaderSignInForm from './HeaderSignInForm';
import google from '../../../assets/successStories/google.png';
import jd_logo from '../../../assets/successStories/Just-Dial_logo.png';
import glassdoor_logo from '../../../assets/successStories/glassdoor_logo.png';



const logos = [
    { src: company1Logo, alt: "Company 1" },
    { src: company2Logo, alt: "Company 2" },
    { src: company3Logo, alt: "Company 3" },
    { src: company4Logo, alt: "Company 4" },
    { src: company5Logo, alt: "Company 5" },
    { src: company6Logo, alt: "Company 6" },
    { src: company7Logo, alt: "Company 7" },
    { src: company8Logo, alt: "Company 8" },
    { src: company9Logo, alt: "Company 9" },
    { src: company10Logo, alt: "Company 10" },
    { src: company11Logo, alt: "Company 11" },
    { src: company12Logo, alt: "Company 12" },
    { src: company13Logo, alt: "Company 13" },
    { src: company14Logo, alt: "Company 14" },
    { src: company15Logo, alt: "Company 15" },
    { src: company16Logo, alt: "Company 16" },
    { src: company17Logo, alt: "Company 17" },
    { src: company18Logo, alt: "Company 18" },
    { src: company19Logo, alt: "Company 19" },
    { src: company20Logo, alt: "Company 20" }
];

const ratings = [
    {
        logo: google,
        title: 'Google',
        rating: 'Rated 4.7/5',
    },
    {
        logo: glassdoor_logo,
        title: 'Glassdoor',
        rating: 'Rated 4.8/5',
    },
    {
        logo: jd_logo,
        title: 'Justdial',
        rating: 'Rated 4.7/5',
    },
];

const stats = [
    {
        value: '16000+', label: 'Success Stories since 2014', color: '#007bff'
    },
    { value: '1400+', label: 'Drives conducted', color: '#28a745' },
    { value: '16 LPA', label: 'Highest Salary Package', color: '#ffc107' },
    { value: '3 - 8 LPA', label: 'LPA Average Package', color: '#762acd' },
    { value: '10+', label: 'Edtech Awards Received', color: '#52de12' },
];

const symbols = [
    { img: unlockLogo, text: "Unlock 12+ LPA with In-Demand Skills", className: style.symbol1 },
    { img: booksymbol, text: "Flexible Learning: Classroom & Online Options", className: style.symbol },
    { img: successLogo, text: "17,000+ Successful Career Transitions Since 2014", className: style.symbol },
    { img: partnershipLogo, text: "550+ Batches Completed, 350+ Hiring Partners", className: style.symbol },
    { img: MobileIconLogo, text: "Lifetime LMS Access & Dedicated Mobile App", className: style.symbol },
];

const Headerpart = (courseID) => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const redLineRef = useRef(null);
    const doughtsPartRef = useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // below the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1025);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.DoughtsPartVisible);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
        if (redLineRef.current) observer.observe(redLineRef.current);

        return () => {
            if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
            if (redLineRef.current) observer.unobserve(redLineRef.current);
        };
    }, []);



    const togglePopup = () => {
        if (isPopupVisible) {
            // Close the form
            setIsPopupVisible(false);
        } else {
            // Open the form
            setIsPopupVisible(true);
        }
    };



    return (
        <div className={style.headerContainer}>
            {/* <img loading="lazy" src={BackgroundImg} alt="Background" className={style.backgroundImage} /> */}
            <img
                src={BackgroundImg}
                srcSet={`
    ${BackgroundImg} 400w,
    ${BackgroundImg} 800w,
    ${BackgroundImg} 1200w
  `}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
                alt="Descriptive background image"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className={style.backgroundImage}
            />
            <div className={style.contentContainer}>
                <div className={style.symbolsContainer}>
                    <h3 className={style.headerText}>
                        {card && (
                            <>
                                {card.Header} <span className={`${style.highlightedWord}`}>{card.Duration}</span>
                            </>
                        )}
                    </h3>
                    <div className={style.symbolItemContent}>
                        {symbols.map((item, index) => (
                            <div key={index} className={style.symbolItem}>
                                <img loading="lazy" src={item.img} alt="Book symbol" className={item.className} />
                                <span className={style.symbolText}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.HeaderPicture}>
                    {card && (
                        <img
                            src={JD_course}
                            alt="Course"
                            className={`img-fluid ${style.headerImage} shadow`}
                            loading="lazy"
                        />
                    )}
                    <div className={style.EnrollButtonContent}>
                        {card && !isMobile && <Enrollbutton label="Enroll Now" courseID={card.id} className={style.EnrollButton} actionType="Button:Enroll Now" />}
                        <span><img loading="lazy" src={FollowerImg} alt="Follower group" className={style.FollowerImage} /></span>
                        <div className={style.reviewContainer}>
                            <div className={style.FollowerStars}>
                                {[...Array(5)].map((_, index) => (
                                    <img loading="lazy" key={index} src={starSymbol} alt="Star" className={style.star} />
                                ))}
                            </div>
                            <span className={style.FollowerCount}> 426 reviews (4.7 of 5)</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.scrollSection}>
                <p>Trusted by Learners Working At Top Companies</p>
                <div className={style.logoContainer}>
                    <div className={style.logoScroll1}>
                        {logos.slice(0, 10).map((logo, index) => (
                            <img loading="lazy" key={index} src={logo.src} alt={logo.alt} className={style.logo} />
                        ))}
                    </div>
                    <div className={style.logoScroll2}>
                        {logos.slice(10).map((logo, index) => (
                            <img loading="lazy" key={index} src={logo.src} alt={logo.alt} className={style.logo} />
                        ))}
                    </div>
                </div>
            </div>


            <div className={style.testimonials}>
                <div className={`d-flex m-4 ${isMobile ? 'flex-column text-center' : 'justify-content-center align-items-center gap-2'}`}>
                    <h3 className="fw-bold">Results  That 
                        <span style={{ color: '#ff5003' }}> Speak Louder </span> Than  <span style={{ color: '#ff5003' }}>Words</span>     
                    </h3>
                    {/* <button className={`btn btn-primary fw-bold ${Buttonstyle.shinebtn}`} onClick={togglePopup}>
                        Download Roadmap
                    </button>
                    {isPopupVisible && <HeaderSignInForm onClose={togglePopup} courseID={courseID} actionType="Download Roadmap" />} */}
                </div>
                <div className="container">
                    {/* Ratings Section */}
                    <div className="row text-center mb-4">
                        {ratings.map((item, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="border p-3 rounded d-flex align-items-center justify-content-center">
                                    <div
                                        className="logo-wrapper d-flex align-items-center justify-content-center me-2"
                                        style={{ width: 40, height: 40 }}
                                    >
                                        {item.logo ? (
                                            <img
                                                loading="lazy"
                                                src={item.logo}
                                                alt={item.title}
                                                style={{ maxHeight: '50px', objectFit: 'contain', paddingRight: '15px' }}
                                            />
                                        ) : null} {/* Remove the span if no logo */}
                                    </div>

                                    <div>
                                        <div className="fw-bold">{item.title}</div>
                                        <div>{item.rating}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Stats Section */}
                    <div className="row text-center justify-content-center gap-3">
                        {stats.map((stat, index) => (
                            <div class={`${style.statcard} shadow-sm`} key={index}>
                                <div class={style.iconcontainer}>
                                    <div class={`${style.hexagon}`}
                                        style={{ backgroundColor: stat.color, boxShadow: '0 12px 12px rgba(80, 0, 185, 0.85)' }}
                                    >{stat.value}</div>
                                </div>
                                <div class={style.content}>
                                    <div class={style.label}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>




                </div>

                <Testmonials />
            </div>
        </div>
    );
};

export default Headerpart;