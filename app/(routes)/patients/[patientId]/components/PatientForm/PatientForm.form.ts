import { z } from 'zod';

export const formSchema = z.object({
	nombre: z.string(),
	cedula: z.string(),
	phone: z.string(),
	website: z.string(),
	country: z.string(),
	profileImage: z.string(),
	// description: z.string().nullable(),
});
