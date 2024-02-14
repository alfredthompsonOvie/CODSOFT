/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridCol: "repeat(auto-fit, minmax(200px, 1fr))",
      backgroundImage: {
        "recruiter": "url('/images/recruiter.jpg')",
        "jobSeeker": "url('/images/jobSeeker.jpg')",
      }
    },
  },
  plugins: [],
}