import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

const MOBILESCREEN = 768;

/* eslint-disable react/prop-types */
function Hamburger({ isOpen, onToggle }) {
	// const [windowWidth, setWindowWidth] = useState(()=> window.innerWidth)
	const [isMobile, setIsMobile] = useState(
		() => MOBILESCREEN > window.innerWidth
	);
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > MOBILESCREEN) {
				setIsMobile(false);
				return;
			}
			setIsMobile(true);
		});
	}, []);
	return (
		<>
			{isMobile ? (
				<section className="hamburger">
					{isOpen ? (
						<Button onClick={onToggle}>
							<IoClose />
						</Button>
					) : (
						<Button onClick={onToggle}>
							<GiHamburgerMenu />
						</Button>
					)}
				</section>
			) : null}
		</>
	);
}

export default Hamburger;
