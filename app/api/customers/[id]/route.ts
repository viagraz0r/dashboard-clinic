import { NextResponse } from 'next/server';
import { conn } from '@/lib/db';

export async function GET(request: any, { params }: any) {
	try {
		const result: any = await conn.query('SELECT * FROM patients WHERE id = ?', [params.id]);

		if (result.length === 0) {
			return NextResponse.json(
				{
					message: 'Paciente no encontrado',
				},
				{
					status: 404,
				}
			);
		}
		return NextResponse.json(result[0]);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
}

export async function DELETE(request: any, { params }: any) {
	try {
		const result: any = await conn.query('DELETE FROM patients WHERE id = ?', [params.id]);

		if (result.affectedRows === 0) {
			return NextResponse.json(
				{
					message: 'Producto no encontrado',
				},
				{
					status: 404,
				}
			);
		}

		return NextResponse.json(null, { status: 204 });
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
}

export async function PUT(request: any, { params }: any) {
	try {
		const data = await request.json();
		const result: any = await conn.query('UPDATE patients SET ? WHERE id = ?', [data, params.id]);

		if (result.affectedRows === 0) {
			return NextResponse.json(
				{
					message: 'Producto no encontrado',
				},
				{
					status: 404,
				}
			);
		}

		const updatedCustomer: any = await conn.query('SELECT *  FROM patients WHERE id = ?', [
			params.id,
		]);

		return NextResponse.json(updatedCustomer[0]);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
}
