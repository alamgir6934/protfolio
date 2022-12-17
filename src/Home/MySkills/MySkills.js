import React from 'react';

const MySkills = () => {
    return (
        <div className='mt-24'>
            <h2 className='text-center text-5xl'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between py-10'>
                <div className='h-52'>
                    <div className="card w-full bg-base-100 shadow-xl h-52">
                        <div className="card-body">
                            <h2 className="card-title">
                                Expertise
                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">CSS</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">javascript</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-52'>
                    <div className="card w-full  bg-base-100 shadow-xl h-52">
                        <div className="card-body">
                            <h2 className="card-title">
                                Comfortable
                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline">Tailwindcss</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">daisyui</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-52'>
                    <div className="card w-full  bg-base-100 shadow-xl h-52">
                        <div className="card-body">
                            <h2 className="card-title">
                                Familiar
                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline">Redux</div>
                                <div className="badge badge-outline">NodeJS</div>
                                <div className="badge badge-outline">Heroku</div>
                                <div className="badge badge-outline">Netlify</div>
                                <div className="badge badge-outline">VS Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;