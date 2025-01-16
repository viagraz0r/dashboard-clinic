'use client';

import { Button } from '@/components/ui/button';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { CirclePlus } from 'lucide-react';

import { SetStateAction, useState } from 'react';
import { FormCreateCustomer } from '../FormCreateCustomer';

export function HeaderCompanies() {
	const [openModalCreate, setOpenModalCreate] = useState(false);

	return (
		<div className="flex justify-between items-center">
			<h2 className="text-2xl">Listado de Pacientes</h2>

			<Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
				<DialogTrigger asChild>
					<Button>Crear Paciente</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						<DialogTitle>Crear Paciente</DialogTitle>
						<DialogDescription>Escriba la informacion</DialogDescription>
					</DialogHeader>
					<FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
				</DialogContent>
			</Dialog>
		</div>
	);
}
