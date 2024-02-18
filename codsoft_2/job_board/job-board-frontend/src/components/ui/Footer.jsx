import styled from "styled-components";
import Section from "./Section";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const StyledFooter = styled.footer`
  grid-column: 1/-1;
  grid-row: 3;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  background-color: var(--secondary);
  color: var(--text);
  margin-top: 4em;
`
function Footer() {
  return (
    <StyledFooter>
      <Section $footer>
					<Brand to="/" $footer>
						Eivo
					</Brand>
					<ul className="flex items-center justify-center gap-4 text-xl">
						<li>
							<Link to="">
								<FaLinkedin />
							</Link>
						</li>
						<li>
							<Link to="">
								<FaGithub />
							</Link>
						</li>
					</ul>
				</Section>
    </StyledFooter>
  )
}

export default Footer
