import React from 'react';

import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Details from './Details/Details';
import MySkills from './MySkills/MySkills';
import MyProject from './Project/MyProject';
import Profile from './Profile/Profile';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Profile></Profile>
            <MySkills></MySkills>
            {/* <Details></Details> */}
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;