"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
	let isActive = hamburger.classList.contains("is-active");
	!isActive ? displayMenu() : hideMenu();
});

const barz = gsap.timeline({ paused: true, duration: 1 });

barz.to(
	".first-bar",
	{
		y: 8,
		ease: "elastic",
	},
	0
)
	.to(
		".third-bar",
		{
			y: -8,
			ease: "elastic",
		},
		0
	)
	.to(
		".second-bar",
		{
			autoAlpha: 0,
		},
		0
	)
	.to(".first-bar", {
		rotate: 45,
		transformOrigin: "center",
	})
	.to(
		".third-bar",
		{
			rotate: 135,
			y: -9.75,
			transformOrigin: "center",
		},
		"-=.5"
	);

function displayMenu() {
	barz.play();
	hamburger.classList.add("is-active");
	const menu = gsap.timeline();
	menu.to(".nav-list", {
		left: "0%",
		ease: "bounce",
	}).from(".nav-link", {
		y: 20,
		opacity: 0,
		stagger: 0.2,
	});
}
function hideMenu() {
	barz.reverse();
	hamburger.classList.remove("is-active");
	const menu = gsap.timeline();
	menu.to(".nav-link", {
		y: 20,
		opacity: 0,
		onComplete: () => {
			gsap.to(".nav-link", {
				clearProps: "all",
			});
		},
	}).to(".nav-list", {
		left: "100%",
		ease: "bounce",
		onComplete: () => {
			gsap.to(".nav-list", {
				clearProps: "all",
			});
		},
	});
}


