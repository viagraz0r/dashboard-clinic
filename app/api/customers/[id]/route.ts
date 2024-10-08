import { NextResponse } from 'next/server';

export function GET() {
	return NextResponse.json('obteniendoCliente');
}

export function DELETE() {
	return NextResponse.json('eliminandoCliente');
}

export function PUT() {
	return NextResponse.json('actualizandoCliente');
}
