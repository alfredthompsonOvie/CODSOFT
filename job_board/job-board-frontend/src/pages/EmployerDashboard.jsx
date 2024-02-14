import Button from "../components/ui/Button";

import Header from "../components/ui/Header";
import Heading from "../components/ui/Heading";
import Main from "../components/ui/Main";
import Section from "../components/ui/Section";

import { BsThreeDots } from "react-icons/bs";
import { IoMdListBox } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import Tasks from "../components/ui/Tasks";
import Notifications from "../components/ui/Notifications";

function EmployerDashboard() {
	return (
    <Main $dashboard>
      <Section $dashboardContent>
			{/* header */}
			<Header $dashboard>
				<Section $dashboardHeader>
					<h1>total application</h1>
					<p>863</p>
				</Section>
				<Section $dashboardHeader>
					<h1>shortlisted</h1>
					<p>863</p>
				</Section>
				<Section $dashboardHeader>
					<h1>rejected</h1>
					<p>863</p>
				</Section>
				<Section $dashboardHeader>
					<h1>post a job</h1>
					<Button $submit>create job post</Button>
				</Section>
			</Header>
			{/* stats */}
			<Section $dashboardStats>
          <section>bar chart</section>
          
          {/* My Tasks */}
          <Section $myTasks>
            <Heading $dashboardSectionHeader>
              <IoMdListBox />
              <span>My Task</span>

              {/* opens a modal to sort and to delete all  */}
              <Button $dashboardTaskHeaderButton>
                <BsThreeDots />
              </Button>
            </Heading>

            <Tasks />

            <Button $addTaskButton>

            Add Task
            </Button>
        </Section>
			</Section>
      <Section $dashboardFooter>
        <section> summary</section>
          <section>
            <Heading $dashboardSectionHeader>
              <FaBell />
              <span>New Applicants</span>
            </Heading>

            <Notifications />
        </section>
      </Section>

      </Section>
		</Main>
	);
}

export default EmployerDashboard;
