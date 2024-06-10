import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
	const form = useRef(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!name || !email || !message) {
			toast.warning('Please fill in all fields.');
			return;
		}

		if (!emailRegex.test(email)) {
			toast.warning('Please enter a valid email address.');
			return;
		}
		if (!form.current) return;
		const promise = emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY,
			})
			.then(
				() => {
					setName('');
					setEmail('');
					setMessage('');
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error('Failed to send email. Please try again.');
				}
			);
		toast.promise(promise, {
			loading: 'Loading...',
			success: () => {
				return 'Email sent successfully:';
			},
			error: 'Error sending email',
		});
	};

	return (
		<div className="text-lg bg-[#1D1C20] rounded-lg p-6 lg:p-12 font-normal text-neutral-400">
			<h2 className="text-2xl lg:text-4xl lg:pb-4 font-bold text-neutral-100">Contact</h2>
			<div className="flex">
				<form ref={form} className="my-8 w-full" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 mb-4">
						<label htmlFor="name" className="text-xl text-neutral-300 font-semibold">
							Name
						</label>
						<input
							id="name"
							name="user_name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Tyler Durden"
							type="text"
							className="bg-[#27272A] outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 ease-in-out text-neutral-300"
						/>
						<label htmlFor="email" className="text-xl text-neutral-300 font-semibold">
							Email
						</label>
						<input
							id="email"
							placeholder="TylerDurd3n@mail.com"
							type="text"
							name="user_email"
							value={email}
							className="bg-[#27272A] outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 text-neutral-300 ease-in-out"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="message" className="text-xl text-neutral-300 font-semibold">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="I want to collaborate with you to create a website for my social networks."
							className="bg-[#27272A] text-neutral-300 outline-none focus:outline-cyan-500 px-4 py-2 rounded-lg border-none transition-all duration-300 ease-in-out resize-none"
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
