// const axios = require('axios');

const ADZUNA_API_ID = '985e8c98';
const ADZUNA_API_KEY = '7548f5944badf3af5285c15d9ff255c5';

async function fetchJobsFromAdzuna() {
  console.log("fetch jobs from adzuna")


  try {
    const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_API_ID}&app_key=${ADZUNA_API_KEY}`);

    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs from Adzuna:', error.message);
    throw error;
  }
}

module.exports = fetchJobsFromAdzuna;




// Function to fetch jobs from Adzuna API
// const fetchJobsFromAdzuna = async (location, searchTerm) => {
//   try {
//     const response = await axios.get('https://api.adzuna.com/v1/api/jobs/gb/search/1', {
//       params: {
//         app_id: ADZUNA_API_ID, // Replace with your Adzuna API app_id
//         app_key: ADZUNA_API_KEY, // Replace with your Adzuna API app_key
//         results_per_page: 10, // Adjust as needed
//         where: location,
//         what: searchTerm,
//       },
//     });

//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching jobs from Adzuna API:', error);
//     throw error;
//   }
// };

