import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
	--text: #0e0e01;
	--background: #fefef6;
	--primary: #e4eb19;
	--secondary: #7bf4d6;
	--accent: #5bbff1;

	/* --text: #fefef1;
	--background: #090901;
	--primary: #dfe614;
	--secondary: #0b8466;
	--accent: #0e72a4; */

	/* --text: #180f02;
	--background: #fef7ee;
	--primary: #ef8813;
	--secondary: #7ef6e5;
	--accent: #539ff3; */

	/* --text: #fdf4e7;
	--background: #130b01;
	--primary: #ea8410;
	--secondary: #098171;
	--accent: #0c56ac; */

	/* --text: #031b0d;
	--background: #fafefc;
	--primary: #25e676;
	--secondary: #85a0f1;
	--accent: #6c50eb; */

	box-sizing: border-box;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

body {
	background-color: var(--background);
  color: var(--text);
}

a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
`;
export default GlobalStyles;