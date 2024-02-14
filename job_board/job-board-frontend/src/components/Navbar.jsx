import { Link } from "react-router-dom";
import Nav from "./ui/Nav";

import { useState } from "react";
import Menu from "./ui/Menu";
import Hamburger from "./ui/Hamburger";
import Brand from "./ui/Brand";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleToggle() {
    setIsOpen(isOpen => !isOpen)
  }

	return (
		<Nav>
			<Brand to="/">Eivo</Brand>
			
			<Hamburger isOpen={isOpen} onToggle={handleToggle} />
			
			<Menu className={isOpen ? "opened": ""} >
				<li>
					<Link to="/jobs"> Find A Job</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/post-job">Post A Job</Link>
				</li>
				<li>
					<Link to="/login"> Log in</Link>
				</li>
			</Menu>
		</Nav>
	);
}

export default Navbar;
