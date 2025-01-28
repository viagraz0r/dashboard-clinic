'use client';

import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Patients } from '../../[patientId]/components/PatientForm/PatientForm.types';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';

import Image from 'next/image';

export const columns: ColumnDef<Patients>[] = [
	{
		accessorKey: 'PROFILEIMAGE',
		header: 'Foto',
		cell: ({ row }) => {
			const image = row.getValue('PROFILEIMAGE');

			return (
				<div className="px-3">
					<Image
						src={typeof image === 'string' ? image : '/images/company-icon.png'}
						width={40}
						height={40}
						alt="image"
						className=""
					/>
				</div>
			);
		},
	},
	{
		accessorKey: 'NOMBRE',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Nombre Paciente <ArrowUpDown className="w-4 h-4 ml-2" />
				</Button>
			);
		},
	},
	{
		accessorKey: 'CEDULA',
		header: 'Cedula',
	},
	{
		accessorKey: 'PHONE',
		header: 'Telefono',
	},
	{
		accessorKey: 'WEBSITE',
		header: 'Pagina Web',
	},
	{
		accessorKey: 'COUNTRY',
		header: 'Pais',
	},
	{
		accessorKey: 'CREATED',
		header: 'F. Creacion',
	},
	{
		id: 'actions',
		header: 'Acciones',
		cell: ({ row }) => {
			const { ID } = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button variant="ghost" className="w-8 h-4 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<Link href={`/patients/${ID}`}>
							<DropdownMenuItem>
								<Pencil className="w-4 h-4 mr-2" />
								Editar
							</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
