const Footer = () => {
	return (
		<div className="bg-dark py-7 px-7 text-tertiary flex flex-col justify-center items-center gap-7">
            <h1 className="font-switzer text-4xl font-semibold text-tertiary">
					NIMBLE.
				</h1>
			<div className="flex justify-center">
				<ul className="flex flex-col md:flex-row justify-center items-center font-boska md:text-lg text-4xl font-regular md:w-auto w-screen md:h-auto h-screen">
					<li className="mx-4 my-2 md:my-0">
						<a href="/" className="text-tertiary hover:text-secondary">
							Home
						</a>
					</li>
					<li className="mx-4 my-2 md:my-0">
						<a
							href="#about"
							className="text-tertiary hover:text-secondary"
						>
							About Us
						</a>
					</li>
					<li className="mx-4 my-2 md:my-0">
						<a
							href="#product"
							className="text-tertiary hover:text-secondary"
						>
							Product
						</a>
					</li>
					<li className="mx-4 my-2 md:my-0">
						<a
							href="#contact"
							className="text-tertiary hover:text-secondary"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="flex justify-center">
				© 2024 Nimble Labs Ltd. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
