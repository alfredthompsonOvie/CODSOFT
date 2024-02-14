import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../components/ui/Section";
import { TiArrowBack } from "react-icons/ti"

const JobListings = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		// Fetch job listings from the backend API

		const fetchJobs = async () => {
			try {
				const res = await axios.get("http://localhost:5000/api/jobs");
				console.log(res)
				setJobs(res.data);
			} catch (error) {
				console.error("Error fetching job listings:", error);
			}
		};

		fetchJobs();
	}, []);

	return (
    <Section $jobs>
      <button className="row-[1] col-[1] justify-self-start flex items-center gap-1">
        <TiArrowBack />
        <span>Back</span>
      </button>
      {/* latest jobs */}
			<section className="row-[2] col-[1] md:col-[1]" >
      <h1>Job Listings</h1>
			<section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt alias incidunt illum voluptatibus vitae neque omnis voluptatem praesentium sit voluptate magni, hic commodi quos repellendus architecto a, mollitia nesciunt recusandae.
      </section>

			<ul>
				{jobs.map((job) => (
					<li key={job._id}>
						<span>{job.position}</span> - <span>man</span>
					</li>
				))}
			</ul>
			</section>
        
      {/* filter */}
			<aside className="row-[2] col-[1] md:col-[2]">
				<fieldset>
					<legend>
						<span>Job Type</span> <button>clear</button>
					</legend>
					<section>
						<input type="checkbox" name="fullTime" id="fullTime" />
						<label htmlFor="fullTime">Full-time</label>
					</section>
					<section>
						<input type="checkbox" name="internship" id="internship" />
						<label htmlFor="internship">Internship</label>
					</section>
					<section>
						<input type="checkbox" name="contractFreelance" id="contractFreelance" />
						<label htmlFor="contractFreelance">Contract / Freelance</label>
					</section>
				</fieldset>
				{/* <section></section> */}
				{/* <section></section> */}
				<fieldset>
					<legend>Job Roles</legend>
					<section>
						<input type="checkbox" name="programming" id="programming" />
						<label htmlFor="programming">Programming</label>
					</section>
					<section>
						<input type="checkbox" name="design" id="design" />
						<label htmlFor="design">Design</label>
					</section>
					<section>
						<input type="checkbox" name="management/finance" id="management/finance" />
						<label htmlFor="management/finance">Management / Finance</label>
					</section>
					<section>
						<input type="checkbox" name="customerSupport" id="customerSupport" />
						<label htmlFor="customerSupport">Customer Support</label>
					</section>
					<section>
						<input type="checkbox" name="salesMarketing" id="salesMarketing" />
						<label htmlFor="salesMarketing">Sales / Marketing</label>
					</section>
				</fieldset>
        <section>
          <input type="checkbox" name="remoteOnly" id="remoteOnly" />
          <label htmlFor="remoteOnly">Remote only</label>
        </section>
				{/* <section>Salary range</section> */}
				<section>location</section>
			</aside>
			
		</Section>
	);
};

export default JobListings;
