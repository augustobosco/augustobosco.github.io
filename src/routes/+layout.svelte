<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/state';
	import { seoTranslations } from '$lib/i18n/seo';

	let { children } = $props();

	// ============================================================
	// IDIOMA ACTUAL
	// ============================================================

	const lang = $derived(
		page.params.lang === 'ja'
			? 'ja'
			: page.params.lang === 'es'
				? 'es'
				: 'en'
	);

	// Mantiene actualizado <html lang="..."> cuando se cambia
	// de idioma mediante la navegación interna.
	$effect(() => {
		document.documentElement.lang = lang;
	});

	// ============================================================
	// URL PRINCIPAL DEL SITIO
	// ============================================================

	const siteUrl = 'https://augustobosco.com';

	// ============================================================
	// RUTA ACTUAL SIN EL PREFIJO DE IDIOMA
	// ============================================================
	//
	// /              → /
	// /ja/           → /
	//
	// /about/        → /about/
	// /ja/about/     → /about/
	//
	// /media/        → /media/
	// /ja/media/     → /media/
	//

	const pathWithoutLanguage = $derived.by(() => {
		let path = page.url.pathname.replace(/^\/(ja|es)(?=\/|$)/, '');

		if (!path) {
			path = '/';
		}

		if (!path.endsWith('/')) {
			path += '/';
		}

		return path;
	});

	// ============================================================
	// URLs EQUIVALENTES EN CADA IDIOMA
	// ============================================================

	const englishUrl = $derived(
		`${siteUrl}${pathWithoutLanguage}`
	);

	const japaneseUrl = $derived(
		pathWithoutLanguage === '/'
			? `${siteUrl}/ja/`
			: `${siteUrl}/ja${pathWithoutLanguage}`
	);

	// ============================================================
	// PÁGINAS JAPONESAS YA TERMINADAS
	// ============================================================
	//
	// TODAS LAS PÁGINAS PRINCIPALES YA ESTÁN TRADUCIDAS:
	//
	// /           → Home
	// /about/     → About
	// /contact/   → Contact
	// /media/     → Media
	//

	const japaneseReadyPaths = [
		'/',
		'/about/',
		'/contact/',
		'/media/'
	];

	const hasJapaneseVersion = $derived(
		japaneseReadyPaths.includes(pathWithoutLanguage)
	);

	// ============================================================
	// URL CANÓNICA
	// ============================================================

	const canonicalUrl = $derived(
		lang === 'ja' && hasJapaneseVersion
			? japaneseUrl
			: englishUrl
	);

	// ============================================================
	// PÁGINAS JAPONESAS TODAVÍA SIN TRADUCIR
	// ============================================================
	//
	// Actualmente todas las páginas principales japonesas
	// están terminadas.
	//
	// Dejamos igualmente esta lógica preparada para futuras páginas.
	//

	const japanesePageNotReady = $derived(
		lang === 'ja' && !hasJapaneseVersion
	);

	// ============================================================
	// SEO: TÍTULO Y DESCRIPCIÓN
	// ============================================================
	//
	// Cada página tiene ahora un título y una descripción
	// independientes para inglés y japonés.
	//
	// Si más adelante agregamos español, mientras no tenga
	// contenido propio utiliza temporalmente el SEO inglés.
	//

	const seoLanguage = $derived(
		lang === 'ja' ? 'ja' : 'en'
	);

	const seo = $derived.by(() => {
		const pages = seoTranslations[seoLanguage];

		return (
			pages[pathWithoutLanguage as keyof typeof pages] ??
			pages['/']
		);
	});
</script>

<svelte:head>

	<!-- ======================================================== -->
	<!-- FAVICON                                                  -->
	<!-- ======================================================== -->

	<link rel="icon" href={favicon} />


	<!-- ======================================================== -->
	<!-- SEO: TÍTULO Y DESCRIPCIÓN                               -->
	<!-- ======================================================== -->

	<title>{seo.title}</title>

	<meta
		name="description"
		content={seo.description}
	/>


	<!-- ======================================================== -->
	<!-- SEO: PÁGINA CANÓNICA                                    -->
	<!-- ======================================================== -->

	{#if !japanesePageNotReady}
		<link
			rel="canonical"
			href={canonicalUrl}
		/>
	{/if}


	<!-- ======================================================== -->
	<!-- SEO: VERSIONES DE IDIOMA                                -->
	<!-- ======================================================== -->

	{#if hasJapaneseVersion}

		<link
			rel="alternate"
			hreflang="en"
			href={englishUrl}
		/>

		<link
			rel="alternate"
			hreflang="ja"
			href={japaneseUrl}
		/>

		<link
			rel="alternate"
			hreflang="x-default"
			href={englishUrl}
		/>

	{/if}


	<!-- ======================================================== -->
	<!-- SEO: PÁGINA JAPONESA TODAVÍA NO TERMINADA              -->
	<!-- ======================================================== -->

	{#if japanesePageNotReady}

		<meta
			name="robots"
			content="noindex, follow"
		/>

	{/if}

</svelte:head>

{@render children?.()}