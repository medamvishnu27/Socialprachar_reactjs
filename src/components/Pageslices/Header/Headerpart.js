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
    { img: MobileIconLogo, text: "Lifetime LMS Access & Dedicated Mobile App", className: style.symbol },
];

// Course metadata mapping
const courseMetadata = {
    "/data-science": {
        title: "Best Data Science Course Training institute in Hyderabad | SocialPrachar",
        description: "Learn Data Science, AI, and ML in Hyderabad with hands-on training and placement support.",
    },
    "/full-stack-developer-course": {
        title: "MERN Full Stack Developer Course training institute in Hyderabad | SocialPrachar",
        description: "Become a MERN Stack Developer with our expert-led Full Stack Development course in Hyderabad.",
    },
    "/artificial-intelligence-course-training-institute-in-hyderabad": {
        title: "Artificial Intelligence Course Training Institute in Hyderabad | SocialPrachar",
        description: "Kickstart your AI career with our industry-aligned Artificial Intelligence course in Hyderabad.",
    },
    "/digital-marketing-course-training-institute-hyderabad": {
        title: "Digital Marketing Course Training Institute in Hyderabad | SocialPrachar",
        description: "Master SEO, SEM, SMM and more with our Digital Marketing training in Hyderabad.",
    },
    "/python-full-stack-development-course": {
        title: "Python Full Stack Development Course in Hyderabad | SocialPrachar",
        description: "Learn backend and frontend development with Python Full Stack course at SocialPrachar.",
    },
    "/awsdevopscourse": {
        title: "AWS DevOps Course Training Institute in Hyderabad | SocialPrachar",
        description: "Get certified with our AWS DevOps course designed for real-world cloud deployment practices.",
    },
    "/java-full-stack-development-course": {
        title: "Java Full Stack Development Course in Hyderabad | SocialPrachar",
        description: "Build a career in software development with our Java Full Stack Developer course.",
    }
};

// Share Component
const ShareButton = ({ courseData, currentUrl, courseImage }) => {
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    // Update meta tags dynamically without react-helmet
    useEffect(() => {
        if (courseData) {
            // Update document title
            document.title = courseData.title;
            
            // Update or create meta tags
            const updateMetaTag = (property, content, isProperty = false) => {
                const attribute = isProperty ? 'property' : 'name';
                let meta = document.querySelector(`meta[${attribute}="${property}"]`);
                if (!meta) {
                    meta = document.createElement('meta');
                    meta.setAttribute(attribute, property);
                    document.head.appendChild(meta);
                }
                meta.setAttribute('content', content);
            };

            // Basic meta tags
            updateMetaTag('description', courseData.description);
            
            // Open Graph tags
            updateMetaTag('og:title', courseData.title, true);
            updateMetaTag('og:description', courseData.description, true);
            updateMetaTag('og:image', courseImage, true);
            updateMetaTag('og:url', currentUrl, true);
            updateMetaTag('og:type', 'website', true);
            updateMetaTag('og:site_name', 'SocialPrachar', true);
            
            // Twitter Card tags
            updateMetaTag('twitter:card', 'summary_large_image');
            updateMetaTag('twitter:title', courseData.title);
            updateMetaTag('twitter:description', courseData.description);
            updateMetaTag('twitter:image', courseImage);
            updateMetaTag('twitter:site', '@SocialPrachar');
            
            // Additional meta tags
            updateMetaTag('og:image:width', '1200', true);
            updateMetaTag('og:image:height', '630', true);
            updateMetaTag('og:image:alt', courseData.title, true);
            
            // Update canonical link
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', currentUrl);
        }
    }, [courseData, currentUrl, courseImage]);

    const shareData = {
        title: courseData?.title || 'SocialPrachar Course',
        description: courseData?.description || 'Learn with industry experts at SocialPrachar',
        url: currentUrl,
        image: courseImage
    };

    const handleShare = (platform) => {
        const encodedUrl = encodeURIComponent(shareData.url);
        const encodedTitle = encodeURIComponent(shareData.title);
        const encodedDescription = encodeURIComponent(shareData.description);
        
        let shareUrl = '';
        
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=SocialPrachar`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            case 'email':
                shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`;
                break;
            default:
                return;
        }
        
        if (platform === 'email') {
            window.location.href = shareUrl;
        } else {
            window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
        }
        
        setShowShareMenu(false);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareData.url);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareData.url;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            } catch (fallbackErr) {
                console.error('Fallback copy failed:', fallbackErr);
            }
            document.body.removeChild(textArea);
        }
        setShowShareMenu(false);
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareData.title,
                    text: shareData.description,
                    url: shareData.url,
                });
                setShowShareMenu(false);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Error sharing:', err);
                }
            }
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showShareMenu && !event.target.closest(`.${style.shareButtonContainer}`)) {
                setShowShareMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showShareMenu]);

    return (
        <div className={style.shareButtonContainer}>
            <button 
                className={style.shareButton}
                onClick={() => setShowShareMenu(!showShareMenu)}
                aria-label="Share course"
                title="Share this course"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" fill="currentColor"/>
                </svg>
            </button>
            
            {showShareMenu && (
                <div className={style.shareMenu}>
                    <div className={style.shareMenuHeader}>
                        <h4>Share Course</h4>
                        <button 
                            className={style.closeShareMenu}
                            onClick={() => setShowShareMenu(false)}
                            aria-label="Close share menu"
                        >
                            ×
                        </button>
                    </div>
                    
                    <div className={style.shareOptions}>
                        {navigator.share && (
                            <button className={style.shareOption} onClick={handleNativeShare}>
                                <span className={style.shareIcon}>📱</span>
                                <span>Share</span>
                            </button>
                        )}
                        
                        <button className={style.shareOption} onClick={() => handleShare('facebook')}>
                            <span className={style.shareIcon}>📘</span>
                            <span>Facebook</span>
                        </button>
                        
                        <button className={style.shareOption} onClick={() => handleShare('twitter')}>
                            <span className={style.shareIcon}>🐦</span>
                            <span>Twitter</span>
                        </button>
                        
                        <button className={style.shareOption} onClick={() => handleShare('linkedin')}>
                            <span className={style.shareIcon}>💼</span>
                            <span>LinkedIn</span>
                        </button>
                        
                        <button className={style.shareOption} onClick={() => handleShare('whatsapp')}>
                            <span className={style.shareIcon}>💬</span>
                            <span>WhatsApp</span>
                        </button>
                        
                        <button className={style.shareOption} onClick={() => handleShare('telegram')}>
                            <span className={style.shareIcon}>✈️</span>
                            <span>Telegram</span>
                        </button>
                        
                        <button className={style.shareOption} onClick={() => handleShare('email')}>
                            <span className={style.shareIcon}>📧</span>
                            <span>Email</span>
                        </button>
                        
                        <button 
                            className={`${style.shareOption} ${copySuccess ? style.copied : ''}`} 
                            onClick={handleCopyLink}
                        >
                            <span className={style.shareIcon}>📋</span>
                            <span>{copySuccess ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                    </div>
                </div>
            )}
            
            {showShareMenu && <div className={style.shareOverlay} onClick={() => setShowShareMenu(false)} />}
        </div>
    );
};

const Headerpart = (courseID) => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const redLineRef = useRef(null);
    const doughtsPartRef = useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Get current URL and course metadata
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const courseData = courseMetadata[currentPath] || courseMetadata[`/${slug}`];

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
            setIsPopupVisible(false);
        } else {
            setIsPopupVisible(true);
        }
    };

    return (
        <div className={style.headerContainer}>
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
            
            {/* Share Button */}
            <ShareButton 
                courseData={courseData} 
                currentUrl={currentUrl} 
                courseImage={JD_course}
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
                                        ) : null}
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
                            <div className={`${style.statcard} shadow-sm`} key={index}>
                                <div className={style.iconcontainer}>
                                    <div className={`${style.hexagon}`}
                                        style={{ backgroundColor: stat.color, boxShadow: '0 12px 12px rgba(80, 0, 185, 0.85)' }}
                                    >{stat.value}</div>
                                </div>
                                <div className={style.content}>
                                    <div className={style.label}>{stat.label}</div>
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