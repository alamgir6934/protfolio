import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {
    // const [text] = useTypewriter({
    //     words:
    //         ['Md Alamgir Hossen',
    //             'A MERN stack developer',
    //         ],
    //     loop: 0
    // })
    return (
        <div className='z-0 relative'>
            <div className='w-full h-screen bg-no-repeat bg-top bg-contain bg-fixed overflow-x-hidden'
                style={{ 'backgroundImage': `url(${'https://i.ibb.co/swmwMkN/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer.webp'})`, 'height': '350px', 'width': 'auto' }}>

            </div>
            {/* <div className='h-screen bg-blue-200'></div> */}
        </div>


    );
};

export default Banner;