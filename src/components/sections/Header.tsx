"use client";
import { useState } from "react";
import Navbar from "../ui/Navbar";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="w-full h-24 flex justify-between items-center flex-col p-7 sticky top-0 bg-primary z-40 "> 
			<div className="flex justify-between items-center w-full md:w-auto px-4 py-2">
				<h1 className="font-switzer text-4xl font-semibold text-dark">
					NIMBLE.
				</h1>
				<button
					onClick={toggleMenu}
					className="md:hidden text-dark-500 focus:outline-none z-50"
				>
					<svg
						className="w-7 h-7"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={
								isMenuOpen
									? "M6 18L18 6M6 6l12 12"
									: "M4 6h16M4 12h16m-7 6h7"
							}
						/>
					</svg>
				</button>
			</div>
			<div className="h-px border border-dashed w-4/5 hidden md:block px-24"></div>
			<Navbar isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default Header;
