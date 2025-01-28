export type Patients = {
	ID: number;
	NOMBRE: string;
	CEDULA: string;
	PHONE: string;
	WEBSITE: string;
	COUNTRY: string;
	PROFILEIMAGE: string;
	//CREATED: any;
};

export type PatientFormProps = {
	patient: string;
};
