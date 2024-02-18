// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Hero from "../components/ui/Hero";
import Main from "../components/ui/Main";
import CtaLink from "../components/ui/CtaLink";
import SearchBar from "../components/SearchBar";
import Section from "../components/ui/Section";

import {
	FaCircleUser,
	FaClipboardList,
	FaList,
} from "react-icons/fa6";
import Footer from "../components/ui/Footer";

function Home() {
	// function handleSearch() {

	// }

	return (
		<Container>
			<Navbar />
			<Main>
				<Hero className="bg-[url('assets/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
					<Section $content>
						<Heading $hero>
							Find Your Dream Job With Your Interest And Skills
						</Heading>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
							velit perspiciatis. Voluptates officiis nemo laborum neque ex
							laboriosam obcaecati id illo voluptate, suscipit molestiae esse
							nobis nulla sint molestias labore!
						</p>
						<section className="flex items-center justify-center flex-wrap gap-5 mt-6">
							<CtaLink $cta__alt to="/jobs">Find a Job</CtaLink>
							<CtaLink $cta__primary to="/post-job">Post a Job</CtaLink>
						</section>
					</Section>

					<Section $search>
						<SearchBar />
					</Section>
				</Hero>

				<section className="col-[2] p-4">
					<Heading $HowItWorks>How it Works</Heading>
					<Section $howItWorksCards>
						<section className="">
							<FaCircleUser className="text-4xl text-[var(--secondary)]" />
							<Heading $cardHeading>Register an account</Heading>
							<p>It's very easy to create an account start your journey</p>
						</section>
						<section className="">
							<FaClipboardList className="text-4xl text-[var(--secondary)]" />
							<Heading $cardHeading>Complete your profile</Heading>
							<p>Complete your profile</p>
						</section>
						<section className="">
							<FaList className="text-4xl text-[var(--secondary)]" />
							<Heading $cardHeading>Applyt for job or Hire</Heading>
							<p></p>
						</section>
					</Section>
				</section>

				<section className="category"></section>

				<section className="jobs__container">
					<section className="featured"></section>
					<section className="recent"></section>
				</section>

				<Section $register>
					<Section $registerContent className="bg-[url('assets/images/recruiter.jpg')] bg-no-repeat bg-center bg-cover">
						<section className="max-w-[300px] w-full text-[var(--background)] p-4 relative z-20">
							<Heading $register>I Am a Recruiter</Heading>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur facere inventore amet vero quaerat est a cupiditate
								doloribus tempora distinctio fugiat, corrupti repudiandae qui
								blanditiis eius voluptatum doloremque dicta deserunt?
							</p>
							<CtaLink to="/post-job" $register>
								Post New Job
							</CtaLink>
						</section>
					</Section>
					<Section $registerContent className="bg-[url('assets/images/jobSeeker.jpg')] bg-no-repeat bg-center bg-cover">
						<section className="max-w-[300px] w-full text-[var(--background)] p-4 relative z-20">
							<Heading $register>I Am a JobSeeker</Heading>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur facere inventore amet vero quaerat est a cupiditate
								doloribus tempora distinctio fugiat, corrupti repudiandae qui
								blanditiis eius voluptatum doloremque dicta deserunt?
							</p>
							<CtaLink to="/jobs" $register>
								Browse Jobs
							</CtaLink>
						</section>
					</Section>
				</Section>
			</Main>
			<Footer />
		</Container>
	);
}

export default Home;
