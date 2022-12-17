import React from 'react';
import { Link, } from 'react-router-dom';

const ProjectCart = ({ project }) => {
    const { _id, name, image1, Details } = project;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{Details}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    <button className="btn btn-primary">Live project</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCart;