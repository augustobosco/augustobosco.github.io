import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'ja' | 'es' => {
	return param === 'ja' || param === 'es';
}) satisfies ParamMatcher;