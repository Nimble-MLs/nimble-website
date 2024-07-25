import Button from "../ui/Button";

const ContactUs = () => {
	return (
		<div className="flex justify-center flex-col p-7">
			<h1 className="font-boska md:text-8xl text-3xl font-bold text-dark opacity-30 my-10">
				Contact Us
			</h1>
			<div className="flex justify-center items-center flex-col">
				<form className="w-3/4">
					<label htmlFor="name" className="block mb-2">
						Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full border border-gray-300  px-3 py-2 mb-4"
					/>

					<label htmlFor="email" className="block mb-2">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full border border-gray-300  px-3 py-2 mb-4"
					/>

					<label htmlFor="message" className="block mb-2">
						Message:
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						className="w-full border border-gray-300  px-3 py-2 mb-4"
					/>

					<Button text="Submit" path="#" />
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
