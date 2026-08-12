<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/state';

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
	// Se usa para generar URLs absolutas para Google.
	const siteUrl = 'https://augustobosco.com';

	// ============================================================
	// RUTA ACTUAL SIN EL PREFIJO DE IDIOMA
	// ============================================================
	//
	// /about/       → /about/
	// /ja/about/    → /about/
	// /ja/media/    → /media/
	// /ja/          → /
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
	// MUY IMPORTANTE:
	// Solo agregamos acá una página cuando su contenido principal
	// ya está realmente traducido al japonés.
	//
	// Por ahora únicamente ABOUT está terminada.
	//
	// Más adelante iremos agregando:
	// '/'
	// '/media/'
	// '/contact/'
	//
	const japaneseReadyPaths = ['/about/'];

	const hasJapaneseVersion = $derived(
		japaneseReadyPaths.includes(pathWithoutLanguage)
	);

	// ============================================================
	// URL CANÓNICA
	// ============================================================
	//
	// Inglés → su propia URL inglesa
	// Japonés terminado → su propia URL japonesa
	//
	const canonicalUrl = $derived(
		lang === 'ja' && hasJapaneseVersion
			? japaneseUrl
			: englishUrl
	);

	// ============================================================
	// PÁGINAS JAPONESAS TODAVÍA SIN TRADUCIR
	// ============================================================
	//
	// Evitamos que Google indexe temporalmente una página /ja/
	// cuyo contenido principal todavía está en inglés.
	//
	const japanesePageNotReady = $derived(
		lang === 'ja' && !hasJapaneseVersion
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- ======================================================== -->
	<!-- SEO: PÁGINA CANÓNICA                                    -->
	<!-- ======================================================== -->

	{#if !japanesePageNotReady}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<!-- ======================================================== -->
	<!-- SEO: VERSIONES DE IDIOMA                                -->
	<!-- ======================================================== -->
	<!--
		Solo aparecen cuando la versión japonesa de esta página
		ya está realmente terminada.
	-->

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
	<!-- SEO: JAPÓN TODAVÍA SIN TRADUCIR                         -->
	<!-- ======================================================== -->

	{#if japanesePageNotReady}
		<meta
			name="robots"
			content="noindex, follow"
		/>
	{/if}
</svelte:head>

{@render children?.()}