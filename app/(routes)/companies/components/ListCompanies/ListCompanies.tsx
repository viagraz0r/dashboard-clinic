import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs';

import { conn } from '@/lib/db';

export function ListCompanies() {
	const { userId } = auth();

	if (!userId) {
		return redirect('/');
	}

	return <div>ListCompanies</div>;
}
