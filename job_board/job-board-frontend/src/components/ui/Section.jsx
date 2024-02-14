import styled, { css } from "styled-components";

const Section = styled.section`
	/* width: 100%; */
	${(props) =>
		props.$search &&
		css`
			max-width: 800px;
			width: 100%;
			background-color: red;
			display: none;
		`}

	${(props) =>
		props.$content &&
		css`
			max-width: 500px;
			width: 100%;
		`}

${(props) =>
		props.$howItWorksCards &&
		css`
			display: grid;
			grid-template-columns: 1fr;
			gap: 2em;
			@media (min-width: 300px) {
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			}
		`}
${(props) =>
		props.$register &&
		css`
			grid-column: 1/-1;
			margin-top: 3em;
			min-height: 100vh;
			display: grid;
			grid-template-columns: 1fr;
			/* align-items: center; */
			/* gap: 2em; */

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}
		`}
${(props) =>
		props.$registerContent &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2em;
			position: relative;
			&::before {
				content: "";
				background-color: rgba(0, 0, 0, 0.7);
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			@media (min-width: 768px) {
			}
		`}

${(props) =>
		props.$footer &&
		css`
			grid-column: 2;
			text-align: center;
			padding: 1em 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1em;

			@media (min-width: 768px) {
				flex-direction: row;
				justify-content: space-between;
			}
		`}

		/* Jobs page */
${(props) =>
		props.$jobs &&
		css`
			grid-column: 2;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, auto);
			justify-content: start;
			gap: 1em;

			@media (min-width: 768px) {
				grid-template-columns: 1.4fr 0.6fr;
				grid-template-rows: repeat(2, auto);
			}
		`}
${(props) =>
		props.$dashboardContent &&
		css`
			grid-column: 2;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, auto);

			/* background-color: rgba(255, 255, 255, 0.8); */
			background-color: rgba(0, 0, 0, 0.1);
			padding: 0.4em;
			border-radius: 8px;
			gap: 1em;

			${(props) =>
				props.$dashboard &&
				css`
					grid-template-rows: repeat(3, auto);
					@media (min-width: 992px) {
						grid-template-columns: repeat(6, 1fr);
						grid-template-rows: 10em calc(100vh - 20em) 10em;
					}
				`}

			@media (min-width: 768px) {
			}
		`}
${(props) =>
		props.$dashboardHeader &&
		css`
			background-color: #fff;
			font-size: 0.8em;
			padding: 0.5em 2em;
			border-radius: 8px;

			h1 {
				font-weight: bold;
				text-transform: capitalize;
				color: var(--accent);
			}

			p {
				font-size: 2.2rem;
				font-weight: bold;
			}

			button {
				margin-top: 1em;
				justify-self: center;
			}

			@media (min-width: 768px) {
			}
		`}
${(props) =>
		props.$dashboardStats &&
		css`
			min-height: 18em;
			/* overflow-y: scroll; */
			/* background-color: red; */
			display: grid;
			gap: 1em;

			& > section {
				font-size: 1em;
				padding: 0.5em 2em;
				border-radius: 8px;
				background-color: #fff;
				font-weight: bold;
				text-transform: capitalize;
				color: var(--accent);
			}

			@media (min-width: 768px) {
				grid-template-columns: 2fr 1fr;
			}
		`}
${(props) =>
		props.$myTasks &&
		css`
			display: flex;
			flex-direction: column;
		`}
${(props) =>
		props.$dashboardFooter &&
		css`
		display: grid;
		gap: 1em;
		min-height: 10em;

			section {
				font-size: 1em;
				padding: 0.5em 2em;
				border-radius: 8px;
				background-color: #fff;
				font-weight: bold;
				text-transform: capitalize;
				color: var(--accent);
			}

			@media (min-width: 768px) {
				grid-template-columns: 2fr 1fr;
			}
		`}
`;

export default Section;
