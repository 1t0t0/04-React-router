import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData()

    return (
        <div className='job-details'>
            <p><b>Job Title: </b>{jobDetails.title}</p>
            <p><b>Job salary: </b>{jobDetails.salary}</p>
            <p><b>Job location: </b>{jobDetails.location}</p>
            <p><b>Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita ad eius quidem assumenda. A placeat quidem, reprehenderit modi ducimus in at ad blanditiis commodi culpa quas consequuntur numquam repellendus.</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetails

export const jobDetailLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch("http://localhost:5001/jobs/" + id);
    if (!res.ok) {
        throw Error('Could not found this job detail')
    }
    return res.json();
}