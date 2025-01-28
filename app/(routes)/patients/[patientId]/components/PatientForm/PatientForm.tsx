'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Toast } from '@/components/ui/toast';

import { UploadButton } from '@/utils/uploadthing';

import { PatientFormProps, Patients } from './PatientForm.types';
import { formSchema } from './PatientForm.form';

export function PatientForm(props: PatientFormProps) {
	const { patient } = props;
	//console.log({ patient });
	const patientJson: Patients = JSON.parse(patient);
	const router = useRouter();

	const [photoUploaded, setPhotoUploaded] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nombre: patientJson.NOMBRE,
			cedula: patientJson.CEDULA,
			phone: patientJson.PHONE,
			website: patientJson.WEBSITE,
			country: patientJson.COUNTRY,
			profileImage: patientJson.PROFILEIMAGE,
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log('onsubmit');
	};
	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="grid grid-cols-2 gap-3">
						<FormField
							control={form.control}
							name="nombre"
							render={({ field }) => (
								<FormItem>
									<FormLabel> Nombre del paciente</FormLabel>
									<FormControl>
										<Input placeholder="Nombre del paciente..." type="text" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
				</form>
			</Form>
		</div>
	);
}
