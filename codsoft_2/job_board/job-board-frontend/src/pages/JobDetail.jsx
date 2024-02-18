/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

const JobDetail = ({ match }) => {
  const [job, setJob] = useState({});

  useEffect(() => {
    // Fetch job details based on the job ID from the URL params

    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${match.params.id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJob();
  }, [match.params.id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      {/* Display other job details as needed */}
    </div>
  );
};

export default JobDetail;

