import React, { Suspense } from 'react';
import Loading from '../../components/extraComponents/loading';
import { useParams } from 'react-router-dom';
import PageNotFound from '../pageNotFound/PageNotFound';
import { Helmet } from 'react-helmet-async';

const Headerpart = React.lazy(() => import('../Pageslices/Header/Headerpart'));
const Masterclass = React.lazy(() => import('../Pageslices/Masterclass/Masterclass'));
const Testmonials = React.lazy(() => import('../Pageslices/Testmonials/Testmonials'));
const Whatwillyoulearn = React.lazy(() => import('../Pageslices/Whatwillyoulearn/Whatwillyoulearn'));
const Mentorpage = React.lazy(() => import('../Pageslices/Mentorpage/Mentorpage'));
const Certificate = React.lazy(() => import('../Pageslices/Certificatepart/Certificate'));
const Banner = React.lazy(() => import('../Pageslices/Banner/Banner'));
const CourseAccordion = React.lazy(() => import('../Pageslices/AccordianQuestions/Accordian'));

const validSlugs = ['data-science', 
    'python-full-stack-development-course',
    'java-full-stack-development-course',
    'full-stack-developer-course',
    'awsdevopscourse',
    'artificial-intelligence-course-training-institute-in-hyderabad',
    'generative-ai-course-training-institute-hyderabad',
    'digital-marketing-course-training-institute-hyderabad',
    'data-analytics-course-training-hyderabad',
    'snowflake-training-in-hyderabad',
    'salesforce-course'

]
const routeMeta = {
  "data-science": {
    title: "Best Data Science Course Training institute in Hyderabad | SocialPrachar",
    description: "Join the top-rated Data Science course in Hyderabad with real-time projects and expert mentors at SocialPrachar"
  },
  "python-full-stack-development-course": {
    title: "Python Full Stack Development Course in Hyderabad | SocialPrachar",
    description: "Learn backend and frontend development with Python Full Stack course at SocialPrachar."
  },
  "java-full-stack-development-course": {
    title: "Java Full Stack Development Course in Hyderabad | SocialPrachar",
    description: "Build a career in software development with our Java Full Stack Developer course."
  },
  "full-stack-developer-course": {
    title: "MERN Full Stack Developer Course training institute in Hyderabad | SocialPrachar",
    description: "Become a MERN Stack Developer with our expert-led Full Stack Development course in Hyderabad."
  },
  "awsdevopscourse": {
    title: "AWS DevOps Course Training Institute in Hyderabad | SocialPrachar",
    description: "Get certified with our AWS DevOps course designed for real-world cloud deployment practices."
  },
  "artificial-intelligence-course-training-institute-in-hyderabad": {
    title: "Artificial Intelligence Course Training Institute in Hyderabad | SocialPrachar",
    description: "Kickstart your AI career with our industry-aligned Artificial Intelligence course in Hyderabad."
  },
  "generative-ai-course-training-institute-hyderabad": {
    title: "Generative AI Course Training Institute in Hyderabad | SocialPrachar",
    description: "Learn about the latest AI technologies with our Generative AI course in Hyderabad."
  },
  "digital-marketing-course-training-institute-hyderabad": {
    title: "Digital Marketing Course Training Institute in Hyderabad | SocialPrachar",
    description: "Master SEO, SEM, SMM and more with our Digital Marketing training in Hyderabad."
  },
  "data-analytics-course-training-hyderabad": {
    title: "Data Analytics Course Training in Hyderabad | SocialPrachar",
    description: "Become a data analytics expert with our comprehensive training in Hyderabad."
  },
  "snowflake-training-in-hyderabad": {
    title: "Snowflake Training in Hyderabad | SocialPrachar",
    description: "Learn Snowflake data warehousing with hands-on training in Hyderabad."
  },
  "salesforce-course": {
    title: "Salesforce Course Training Institute in Hyderabad | SocialPrachar",
    description: "Get certified with our Salesforce course designed for real-world CRM practices."
  }
};

const CourseDetails = () => {
    const { slug } = useParams();
    if (!validSlugs.includes(slug)) {
        return <PageNotFound />;
    }

    const meta = routeMeta[slug] || {
      title: "SocialPrachar",
      description: "Learn more about our courses at SocialPrachar."
    };

    return (
        <>
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Suspense fallback={<Loading />}>
              <Headerpart />
              <Masterclass />
              <Whatwillyoulearn />
              <Mentorpage />
              <Certificate />
              <CourseAccordion /> 
              <Banner />
          </Suspense>
        </>
    );
};

export default CourseDetails;
