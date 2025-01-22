import {
	BarChart4,
	Building2,
	PanelsTopLeft,
	Settings,
	ShieldCheck,
	CircleHelpIcon,
	Calendar,
	User2,
} from 'lucide-react';

export const dataGeneralSidebar = [
	{
		icon: PanelsTopLeft,
		label: 'Dashboard',
		href: '/',
	},
	{
		icon: User2,
		label: 'Pacientes',
		href: '/patients',
	},
	// {
	// 	icon: Calendar,
	// 	label: 'Calendar',
	// 	href: '/task',
	// },
];

export const dataToolsSidebar = [
	{
		icon: CircleHelpIcon,
		label: 'Faqs',
		href: '/faqs',
	},
	{
		icon: BarChart4,
		label: 'Analytics',
		href: '/analytics',
	},
];

export const dataSupportSidebar = [
	{
		icon: Settings,
		label: 'Settings',
		href: '/settings',
	},
	{
		icon: ShieldCheck,
		label: 'Security',
		href: '/security',
	},
];
