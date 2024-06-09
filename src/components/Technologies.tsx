import {
	GitMergeIcon,
	JavaIcon,
	JavaScriptIcon,
	MongoDbIcon,
	MySqlIcon,
	NextJsIcon,
	ReactIcon,
	SpringBootIcon,
	TailwindIcon,
	Typescript01Icon,
} from './Icons';

export const Technologies = () => {
	const icons = [
		{ component: JavaScriptIcon, label: 'Javascript' },
		{ component: ReactIcon, label: 'React' },
		{ component: JavaIcon, label: 'Java' },
		{ component: SpringBootIcon, label: 'Spring Boot' },
		{ component: GitMergeIcon, label: 'Git' },
		{ component: Typescript01Icon, label: 'Typescript' },
		{ component: TailwindIcon, label: 'Tailwind' },
		{ component: MongoDbIcon, label: 'MongoDB' },
		{ component: MySqlIcon, label: 'MySQL' },
		{ component: NextJsIcon, label: 'NextJs' },
	];
	return (
		<div className="text-lg bg-[#1D1C20] flex flex-col gap-8 rounded-lg p-12 col-span-2 font-normal text-neutral-400">
			<h2 className="text-4xl pb-4 font-bold text-neutral-100">Technologies</h2>
			<ul className="grid grid-cols-5 grid-rows-2 gap-4 text-neutral-400">
				{icons.map((icon, index) => (
					<li
						key={index}
						className="flex col-span-1 row-span-1 items-center justify-center flex-col">
						<icon.component width={30} />
						<span>{icon.label}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
