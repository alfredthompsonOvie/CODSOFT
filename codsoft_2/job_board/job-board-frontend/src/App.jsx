import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import JobDetail from "./pages/JobDetail";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import JobApplicationForm from "./pages/JobApplicationForm";
import JobPosts from "./pages/JobPosts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostJob from "./pages/PostJob";
import About from "./pages/About";
import Layout from "./components/ui/Layout";
import GlobalStyles from "./assets/css/GlobalStyles";



// codsoft_𝒕𝒂𝒔𝒌𝒏𝒐

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<Layout />}>
					<Route path="/about" element={<About />} />
					<Route path="/jobs" element={<JobPosts />} />
					<Route path="/jobs/:id" element={<JobDetail />} />
					{/* recruiter */}
					<Route path="/employer/dashboard" element={<EmployerDashboard />} />
					{/* applicant */}
					<Route path="/candidate/dashboard" element={<CandidateDashboard />} />
					<Route path="/apply/:id" element={<JobApplicationForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<Signup />} />
					<Route path="/post-job" element={<PostJob />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
