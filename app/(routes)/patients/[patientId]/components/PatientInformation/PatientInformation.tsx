import Image from 'next/image';
import { PatientInformationProps } from './PatientInformation.types';
import { User } from 'lucide-react';
import { PatientForm } from '../PatientForm';

export function PatientInformation(props: PatientInformationProps) {
	const { patient } = props;

	const patientString = JSON.stringify(patient);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 pt-2 gap-y-4">
			<div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
				<div>
					<Image
						src={patient.PROFILEIMAGE}
						alt="Patient Image"
						width={50}
						height={50}
						className="rounded-lg mb-3"
					/>
					<PatientForm patient={patientString} />
				</div>
			</div>
			<div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min">
				<div className="flex items-center justify-between gap-x-2">
					<div className="flex items-center gap-x-2">
						<User className="w-5 h-5" />
						Contacts
					</div>
					<div>
						{/* TODO New Contact */}
						<p>New Contact</p>
					</div>
				</div>
				<p>List contacts...</p>
			</div>
		</div>
	);
}
