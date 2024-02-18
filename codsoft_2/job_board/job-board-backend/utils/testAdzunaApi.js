// testAdzunaApi.js
const fetchJobsFromAdzuna = require('./jobFetcher');

async function testAdzunaApi() {
  try {
    const jobsFromAdzuna = await fetchJobsFromAdzuna();
    console.log('Jobs from Adzuna API:', jobsFromAdzuna);
  } catch (error) {
    console.error('Error testing Adzuna API:', error.message);
  }
}

testAdzunaApi();
