const AboutUs = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center p-7">
			<h1 className="font-boska md:text-8xl text-3xl font-bold text-dark opacity-30 my-10">
				About Us
			</h1>
			<div className="border border-dark md:px-16 px-3 py-7">
				<h3 className="font-boska md:text-6xl text-2xl font-medium">
					At Nimble, we recognize that regulatory reporting is a costly
					business. For regulated firms, reporting workflows are:
				</h3>
				<h4 className="font-switzer md:text-3xl text-lg font-light mt-5 leading-relaxed tracking-wider">
					Time-consuming | Manual | A major training investment |
					Inconsistent in output | Error-prone | Subject to rework
				</h4>
			</div>
			<div className="border border-dark border-t-0 md:px-16 px-3 py-7">
				<h3 className="font-boska md:text-6xl text-2xl font-medium">
					That&apos;s why we created Nimble. We combine unparalleled industry
					insight and leading-edge technology to alleviate firms&apos;
					regulatory burden.
				</h3>
			</div>
		</div>
	);
};

export default AboutUs;
