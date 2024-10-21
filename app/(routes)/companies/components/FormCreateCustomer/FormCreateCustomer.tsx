'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormCreateCustomerProps } from './FormCreateCustomer.types';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { UploadButton } from '@/utils/uploadthing';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
	nombre: z.string().min(3),
	cedula: z.string().min(8),
	phone: z.string().min(11),
	website: z.string().min(6),
	country: z.string().min(3),
	profileImage: z.string(),
});

export function FormCreateCustomer(props: FormCreateCustomerProps) {
	const { setOpenModalCreate } = props;
	const router = useRouter();
	const [photoUploaded, setPhotouploaded] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nombre: '',
			cedula: '',
			phone: '',
			website: '',
			country: '',
			profileImage: '',
		},
	});

	const { isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			axios.post('/api/customers', values);
			toast({ title: 'Paciente creado exitosamente' });
			router.refresh();
			setOpenModalCreate(false);
		} catch (error) {
			toast({
				title: 'Algo salio mal',
				variant: 'destructive',
			});
		}
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
									<FormLabel>Nombre del paciente</FormLabel>
									<FormControl>
										<Input placeholder="Nombre del paciente aqui..." type="text" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="cedula"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Cedula</FormLabel>
									<FormControl>
										<Input placeholder="Numero de cedula aqui..." type="text" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefono</FormLabel>
									<FormControl>
										<Input placeholder="04XX-XXXXXXX" type="text" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="website"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Pagina Web</FormLabel>
									<FormControl>
										<Input placeholder="https://hostname.com" type="text" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Pais</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccione el pais" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="united-kingdom">Reino Unido</SelectItem>
											<SelectItem value="spain">España</SelectItem>
											<SelectItem value="brazil">Brasil</SelectItem>
											<SelectItem value="venezuela">Venezuela</SelectItem>
											<SelectItem value="argentina">Argentina</SelectItem>
											<SelectItem value="Peru">Peru</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="profileImage"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Profile Image</FormLabel>
									<FormControl>
										{photoUploaded ? (
											<p className="text-sm">Image uploaded!</p>
										) : (
											<UploadButton
												className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
												{...field}
												endpoint="profileImage"
												onClientUploadComplete={(res) => {
													form.setValue('profileImage', res?.[0].url);
													toast({
														title: 'Photo uploaded!',
													});
													setPhotouploaded(true);
												}}
												onUploadError={(error: Error) => {
													toast({
														title: 'Error uploading photo',
													});
												}}
											/>
										)}
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit" disabled={!isValid}>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
