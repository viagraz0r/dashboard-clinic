import { Logo } from '@/components/Logo';

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-center h-full items-center">
			<Logo />
			<h1 className="text-3xl my-2">Welcome to the Dashboard!</h1>
			<h2 className="text-2xl mb-3">zorcode.com</h2>
			{children}
		</div>
	);
}
