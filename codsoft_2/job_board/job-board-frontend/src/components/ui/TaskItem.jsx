/* eslint-disable react/prop-types */

import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Button from "./Button";

const StyledTaskItem = styled.li`
	border-top: 1px solid rgba(0, 0, 0, 0.2);

	padding: 0.4em 0;

	p {
		font-size: 0.8rem;
	}

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;

		span {
			background-color: lightblue;
			border-radius: 0.4em;
			padding: 0.5em;
			font-size: 0.7rem;
			color: #fff;
		}
	}
`;

function TaskItem({ item }) {
	return (
		<StyledTaskItem>
			<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<section>
				<span>High Priority</span>
				<div>
					<Button $dashboardTasksButton>
						<FaEdit />
					</Button>
					<Button $dashboardTasksButton>
						<MdOutlineDeleteForever />
					</Button>
				</div>
			</section>
		</StyledTaskItem>
	);
}

export default TaskItem;
