import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        // <div className=''>
        //     <div className='flex justify-center gap-8 lg:-mt-8'>
        //         <div>
        //             <img src="https://i.ibb.co/5jmrfLq/47bba8ac-d74a-4eb4-84ca-9b49b7fdc330-1.jpg" className="w-64 h-64 rounded-full shadow-2xl" />
        //         </div>
        //         <div className='mt-8'>
        //             <h2 className='text-4xl'>Md Alamgir Hossen</h2>
        //             <h3>Junior web developer</h3>
        //             <br />
        //             <div className='flex gap-4'>
        //                 <a href="https://github.com/alamgir6934" alt=''><FaGithub /></a>
        //                 <a href="https://www.linkedin.com/in/alamgir-hossain-134a80167/"><FaLinkedin /></a>
        //                 <a href="https://www.facebook.com/profile.php?id=100004261157676"><FaFacebook /></a>

        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="avatar flex justify-center lg:-mt-20">
                <div className="w-64 h-64 rounded-full">
                    <img src="https://i.ibb.co/5jmrfLq/47bba8ac-d74a-4eb4-84ca-9b49b7fdc330-1.jpg" className='mb-8' />
                </div>
            </div>
            <div className='text-center'>
                <h2 className='sm:mt-3 lg:mt-10 text-4xl'>Md Alamgir Hossen</h2>
                <p className='sm:mt-3 lg:mt-4 text-2xl'>Junior Web-Developer</p>
            </div>
            <div className='flex justify-center gap-10 mt-5'>
                <a href="https://github.com/alamgir6934" target='_blank'>
                    <span className='text-4xl'>
                        <FaGithub />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/alamgir-hossain-134a80167/" target='_blank'>
                    <span className='text-4xl'>
                        <FaLinkedin />
                    </span>
                </a>
                <Link to='https://www.facebook.com/profile.php?id=100004261157676' ><span className='text-4xl'><FaFacebook /></span></Link>
                <Link to=''><span className='text-4xl'><FaInstagram /></span></Link>
            </div>
        </div >
    );
};

export default Profile;