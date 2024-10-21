import { conn } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const results = await conn.query(' SELECT * FROM patients');
		return NextResponse.json(results);
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

export async function POST(request: { json: () => any }) {
	try {
		const { userId } = auth();

		const { nombre, cedula, phone, website, country, profileImage } = await request.json();

		const result: any = await conn.query('INSERT INTO patients SET ?', {
			nombre,
			cedula,
			phone,
			website,
			country,
			profileImage,
		});

		if (!userId) {
			return new NextResponse('Unathorized', { status: 401 });
		}

		return NextResponse.json({
			nombre,
			cedula,
			phone,
			website,
			country,
			profileImage,
			id: result.insertId,
		});
	} catch (error: any) {
		console.log(error);
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
