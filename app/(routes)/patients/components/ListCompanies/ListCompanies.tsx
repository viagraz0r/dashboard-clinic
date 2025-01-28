import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs';

import { conn } from '@/lib/db';
import { DataTable } from './data-table';
import { Patients, columns } from './columns';

async function loadPatients(): Promise<Patients[]> {
	const result: Patients[] = await conn.query('SELECT * FROM patients ORDER BY CREATED desc');
	return result.map((row) => ({
		ID: row.ID,
		NOMBRE: row.NOMBRE,
		CEDULA: row.CEDULA,
		PHONE: row.PHONE,
		WEBSITE: row.WEBSITE,
		COUNTRY: row.COUNTRY,
		PROFILEIMAGE: row.PROFILEIMAGE,
		CREATED: new Intl.DateTimeFormat('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(new Date(row.CREATED)),
	}));
}

export async function ListCompanies() {
	const { userId } = auth();

	if (!userId) {
		return redirect('/');
	}
	const patients = await loadPatients();

	return <DataTable columns={columns} data={patients} />;
}
