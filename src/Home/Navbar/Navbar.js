import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 z-50 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle bg-slate-600 w-16">
                        <h3><AiTwotoneHome /></h3>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36 h-52">
                        <Link to='/'>Home</Link>
                        <Link to='/project'>Projects</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl lg:hidden">Md Alamgir Hossen</a>
            </div> */}

            <div className='bg-white justify-end'>
                <button className='btn btn-secondary'><a href="https://drive.google.com/file/d/1b5Hu_IZ_SqQjH0cW_na4SEdOZvRmB-Os/view?usp=share_link" target='_blank'>Download Resume</a></button>
            </div>

        </div>
    );
};

export default Navbar;