const Job = require("../models/job");
const fetchJobsFromAdzuna = require('../utils/jobFetcher');

exports.fetchAndSaveJobs = async (req, res) => {
  try {
    // Fetch jobs from the external API
    console.log("controllers fetchAndSaveJobs")
    const jobsFromAPI = await fetchJobsFromAdzuna();
    console.log(jobsFromAPI)

    // Save each job to your MongoDB database
    for (const jobData of jobsFromAPI) {
      const newJob = new Job({
        title: jobData.title,
        description: jobData.description,
        requirements: jobData.requirements,
        // Add other fields as needed
      });

      await newJob.save();
    }

    res.json({ msg: 'Jobs fetched and saved successfully' });
  } catch (error) {
    console.error('Error fetching and saving jobs:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// 
// Get all jobs
exports.getJobs = async (req, res) => {
	try {
		const jobs = await Job.find();
		res.json(jobs);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}


};

// ------------------------------------------------

// Get a specific job by ID
exports.getJobById = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id);

		if (!job) {
			return res.status(404).json({ msg: "Job not found" });
		}

		res.json(job);
	} catch (error) {
		console.error(error.message);

		if (error.kind === "ObjectId") {
			return res.status(404).json({ msg: "Job not found" });
		}

		res.status(500).send("Server Error");
	}
};

// Create a new job
exports.postJob = async (req, res) => {
	const { title, description, requirements } = req.body;

	try {
		const newJob = new Job({
			title,
			description,
			requirements,
		});

		const job = await newJob.save();
		res.json(job);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
};

// Update a job by ID
exports.updateJob = async (req, res) => {
	const { title, description, requirements } = req.body;

	try {
		let job = await Job.findById(req.params.id);

		if (!job) {
			return res.status(404).json({ msg: "Job not found" });
		}

		job.title = title;
		job.description = description;
		job.requirements = requirements;

		await job.save();

		res.json(job);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id);

		if (!job) {
			return res.status(404).json({ msg: "Job not found" });
		}

		await job.remove();

		res.json({ msg: "Job removed" });
	} catch (error) {
		console.error(error.message);

		if (error.kind === "ObjectId") {
			return res.status(404).json({ msg: "Job not found" });
		}

		res.status(500).send("Server Error");
	}
};
