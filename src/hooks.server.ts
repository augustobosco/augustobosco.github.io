import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// ============================================================
	// IDIOMA DEL HTML DURANTE SSR / PRERENDER
	// ============================================================
	// /ja/... → japonés
	// /es/... → español (preparado para más adelante)
	// resto   → inglés
	const lang =
		event.params.lang === 'ja'
			? 'ja'
			: event.params.lang === 'es'
				? 'es'
				: 'en';

	return resolve(event, {
		// Cambia <html lang="en"> por el idioma correspondiente
		// mientras SvelteKit genera cada página HTML.
		transformPageChunk: ({ html }) =>
			html.replace(
				'<html lang="en">',
				`<html lang="${lang}">`
			)
	});
};