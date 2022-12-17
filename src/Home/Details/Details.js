import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    const detail = projects.filter(project => project._id === id);


    return (
        <div className='mt-20'>
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{detail[0]?.name}</h2>
                    <p><span className='font-bold'>Description:</span> {detail[0]?.about}</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold my-10 text-center'>Some Screenshots of the project</h1>
            <div className='grid grid-cols-1'>
                <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto mb-10">
                    <h2 className='text-xl font-semibold text-center'>Home Page Image</h2>
                    <figure><img src={detail[0]?.image1} alt='img' /></figure>
                </div>
                <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto mb-10">
                    <h2 className='text-xl font-semibold text-center'>Product Page Image</h2>
                    <figure><img src={detail[0]?.image2} alt='img' /></figure>
                </div>
                <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto mb-10">
                    <h2 className='text-xl font-semibold text-center'>Order Page Image</h2>
                    <figure><img src={detail[0]?.image3} alt='img' /></figure>
                </div>
            </div>

        </div>
    );
};

export default Details;