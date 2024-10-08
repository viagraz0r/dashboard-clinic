import { NextResponse } from 'next/server';

export function GET() {
	return NextResponse.json('listandoCLientes');
}

export function POST() {
	return NextResponse.json('creandoCliente');
}
