import { conn } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Patients } from '../[patientId]/components/PatientForm/PatientForm.types';
import { Header } from './components/Header';
import { PatientInformation } from './components/PatientInformation';

export default async function PatientIdPage({ params }: { params: { patientId: number } }) {
	const { userId } = auth();

	if (!userId) {
		return redirect('/');
	}

	const patients: Patients[] = await conn.query('SELECT * FROM patients WHERE id = ?', [
		params.patientId,
	]);

	if (patients.length === 0) {
		return redirect('/');
	}

	const patient: Patients = patients[0];

	return (
		<div>
			<Header />
			<PatientInformation patient={patient} />
			<p>Footer Patient</p>
		</div>
	);
}
