import { Toaster } from 'sonner';
import { Bento } from './components/Bento';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

function App() {
	return (
		<div className="bg-[#0F0F0F] flex justify-center  min-h-screen text-[#F0F0F0]">
			<Toaster richColors theme="dark" position="top-right" />
			<section className="max-w-7xl py-12 px-6 flex flex-col gap-6">
				<Header />
				<Bento />
				<Projects />
				<Contact />
			</section>
		</div>
	);
}

export default App;
