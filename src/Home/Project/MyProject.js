import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectCart from './ProjectCart';

const MyProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // const projects = useLoaderData()
    // console.log(projects)

    return (
        <div className='py-16 text-center'>
            <h2 className='text-5xl'>My Projects</h2>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects?.map(project => <ProjectCart
                        key={project._id}
                        project={project}
                    ></ProjectCart>)
                }
            </div>
        </div>
    );
};

export default MyProject;