import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, message } = formData;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!name || !email || !message) {
			toast.warning('Please fill in all fields.');
			return;
		}

		if (!emailRegex.test(email)) {
			toast.warning('Please enter a valid email address.');
			return;
		}

		toast.success('Form submitted successfully!');
		setFormData({ name: '', email: '', message: '' });
		console.log('Form data:', formData);
	};
	return (
		<div className="text-lg bg-[#1D1C20] rounded-lg p-12 font-normal text-neutral-400">
			<h2 className="text-4xl pb-4 font-bold text-neutral-100">Contact</h2>
			<div className="flex">
				<form className="my-8 w-full" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 mb-4">
						<label htmlFor="name" className="text-xl text-neutral-300 font-semibold">
							Name
						</label>
						<input
							id="name"
							placeholder="Tyler Durden"
							type="text"
							className="bg-[#27272A] outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 ease-in-out text-neutral-300"
							value={formData.name}
							onChange={handleChange}
						/>
						<label htmlFor="email" className="text-xl text-neutral-300 font-semibold">
							Email
						</label>
						<input
							id="email"
							placeholder="TylerDurd3n@mail.com"
							type="text"
							className="bg-[#27272A] outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 text-neutral-300 ease-in-out"
							value={formData.email}
							onChange={handleChange}
						/>
						<label htmlFor="message" className="text-xl text-neutral-300 font-semibold">
							Message
						</label>
						<textarea
							id="message"
							placeholder="I want to collaborate with you to create a website for my social networks."
							className="bg-[#27272A] text-neutral-300 outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 ease-in-out resize-none"
							value={formData.message}
							onChange={handleChange}
						/>
					</div>

					<button
						className="bg-gradient-to-br px-4 py-2 relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit">
						Send Email
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};
