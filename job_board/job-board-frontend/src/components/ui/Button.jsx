import styled, { css } from "styled-components";

const Button = styled.button`
	background-color: transparent;
	border: 0;
	font-size: 1.8em;
	cursor: pointer;

	${(props) =>
		props.$submit &&
		css`
			background-color: var(--primary);
			font-size: 1em;
			padding: 0.5em 2em;
			border-radius: 4px;
		`}
	${(props) =>
		props.$dashboardTaskHeaderButton &&
		css`
			background-color: transparent;
			font-size: 1.5em;
			padding: 0.5em 0;
		`}
  ${(props) =>
		props.$dashboardTasksButton &&
		css`
			background-color: transparent;
			font-size: 1.3em;
			padding: 0.5em 0;
		`}
  ${(props) =>
		props.$addTaskButton &&
		css`
			margin-top: auto;
			background-color: var(--accent);
			color: var(--background);
			font-size: 0.8em;
			padding: 0.7em 0;
			width: 100%;
		`}
`;

export default Button;
