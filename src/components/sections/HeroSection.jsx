import Button from "../ui/Button";

const HeroSection = () => {
	return (
		<div className="flex justify-around min-h-screen items-center md:px-16 md:flex-row flex-col p-7">
			<div className="flex flex-col md:w-3/5">
				<h1 className="font-boska md:text-7xl text-5xl font-bold">
					Regulatory relief through{" "}
					<span className="text-darkSecondary">Automation</span>
				</h1>
				<h3 className="font-switzer md:text-3xl text-xl font-light md:my-5 my-2">
					Unlocking teams' productivity with generative AI
				</h3>
                <Button text="EARLY ACCESS" path="#" />
			</div>
			<div className="md:w-2/5">
				<h2 className="font-boska md:text-4xl text-2xl font-regular border p-7 leading-relaxed tracking-wide">
					“This is industry-shattering for us. I would be wildly more
					efficient, effective and consistent. This is unreal, this takes
					out 50%-60% of the work.”
					<span className="font-switzer text-xl font-light">
						<br /> - Managing Director, Financial Crimes Operations,
						global top-10 bank
					</span>
				</h2>
			</div>
		</div>
	);
};

export default HeroSection;
