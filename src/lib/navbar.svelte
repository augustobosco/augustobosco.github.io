<script>
	import { page } from '$app/state';
	import { navbarTranslations } from '$lib/i18n/navbar';

	let { selected } = $props();

	// ============================================================
	// IDIOMA ACTUAL
	// ============================================================
	// Sin prefijo → inglés
	// /ja/...     → japonés
	const lang = $derived(page.params.lang === 'ja' ? 'ja' : 'en');

	// ============================================================
	// PREFIJO PARA LA NAVEGACIÓN NORMAL
	// ============================================================
	const prefix = $derived(page.params.lang ? `/${page.params.lang}` : '');

	const t = $derived(navbarTranslations[lang]);

	// ============================================================
	// SELECTOR DE IDIOMA
	// ============================================================
	function languagePath(targetLanguage) {
		const currentPath = page.url.pathname;

		const pathWithoutLanguage = currentPath.replace(
			/^\/(ja|es)(?=\/|$)/,
			''
		);

		const basePath = pathWithoutLanguage || '/';

		if (targetLanguage === 'en') {
			return basePath;
		}

		if (basePath === '/') {
			return `/${targetLanguage}/`;
		}

		return `/${targetLanguage}${basePath}`;
	}
</script>

<section class="navbar">

	<!-- ======================================================== -->
	<!-- NOMBRE                                                  -->
	<!-- ======================================================== -->

	<a
		href={`${prefix}/`}
		class="title"
		class:english-title={lang === 'en'}
		class:japanese-title={lang === 'ja'}
	>
		AUGUSTO BOSCO
	</a>

	<!-- ======================================================== -->
	<!-- SUBTÍTULO                                               -->
	<!-- ======================================================== -->

	<h1
		class="subtitle"
		class:english-subtitle={lang === 'en'}
		class:japanese-subtitle={lang === 'ja'}
	>
		{t.subtitle}
	</h1>

	<!-- ======================================================== -->
	<!-- PESTAÑAS                                                -->
	<!-- ======================================================== -->

	<div
		class="tabs"
		class:english-tabs={lang === 'en'}
		class:japanese-tabs={lang === 'ja'}
	>
		<a
			href={`${prefix}/about/`}
			class="tab"
			class:active={selected === 'about'}
		>
			{t.about}
		</a>

		<a
			href={`${prefix}/contact/`}
			class="tab"
			class:active={selected === 'contact'}
		>
			{t.contact}
		</a>

		<a
			href={`${prefix}/media/`}
			class="tab"
			class:active={selected === 'media'}
		>
			{t.media}
		</a>
	</div>

	<!-- ======================================================== -->
	<!-- SELECTOR DE IDIOMA                                      -->
	<!-- ======================================================== -->

	<nav class="language-switcher" aria-label="Language">
		<a
			href={languagePath('en')}
			class:language-active={lang === 'en'}
			aria-label="English"
		>
			EN
		</a>

		<span class="language-separator">|</span>

		<a
			href={languagePath('ja')}
			class:language-active={lang === 'ja'}
			aria-label="日本語"
		>
			日本語
		</a>
	</nav>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	/* ======================================================== */
	/* ESTILOS GENERALES DEL NAVBAR                             */
	/* ======================================================== */

	.navbar {
		font-family: 'Raleway';
		top: 0;
		z-index: 100;
		background-color: rgb(35, 30, 67);
		color: white;
		padding-bottom: 0.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	/* ======================================================== */
	/* PESTAÑAS - BASE                                         */
	/* ======================================================== */

	.tabs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2em;
		padding-top: 0.15rem;
	}

	.tab {
		text-align: center;
		letter-spacing: 0.1em;
		color: grey;
		transition: color 0.25s;
		white-space: nowrap;
	}

	.tab:hover {
		cursor: pointer;
		color: white;
	}

	.active {
		color: white;
	}

	/* ======================================================== */
	/* AUGUSTO BOSCO - BASE                                    */
	/* ======================================================== */

	.title {
		transform: translateX(0.2rem);
		color: rgb(153, 135, 255);
		mix-blend-mode: lighten;
		text-align: center;
		margin-bottom: -0.3rem;
		white-space: nowrap;

		transition:
			letter-spacing 0.25s,
			color 0.25s;
	}

	.title:hover,
	.title:active {
		cursor: pointer;
		color: rgb(188, 180, 232);
	}

	/* ======================================================== */
	/* AUGUSTO BOSCO - INGLÉS - ESCRITORIO                    */
	/* ======================================================== */
	/*
		Mismos valores base que la versión japonesa.
		Podés modificarlos independientemente después.
	*/

	.title.english-title {
		font-size: 2.2rem;
		letter-spacing: 0.15em;
		margin-top: 0.2rem;
		font-weight: 450;
	}

	.title.english-title:hover,
	.title.english-title:active {
		letter-spacing: 0.22em;
	}

	/* ======================================================== */
	/* AUGUSTO BOSCO - JAPONÉS - ESCRITORIO                   */
	/* ======================================================== */

	.title.japanese-title {
		font-size: 2.2rem;
		letter-spacing: 0.15em;
		margin-top: 0.2rem;
	}

	.title.japanese-title:hover,
	.title.japanese-title:active {
		letter-spacing: 0.22em;
	}

	/* ======================================================== */
	/* SUBTÍTULO - BASE                                        */
	/* ======================================================== */

	.subtitle {
		color: rgb(132, 124, 179);
		mix-blend-mode: lighten;
		text-align: center;
		padding-top: 0rem;
		line-height: 1.2;

		/* IMPORTANTE:
		   Peso normal como estaba originalmente.
		   No usamos bold. */
		font-weight: 600;

		margin: 0;
		white-space: nowrap;
	}

	/* ======================================================== */
	/* SUBTÍTULO - INGLÉS - ESCRITORIO                        */
	/* ======================================================== */

	.subtitle.english-subtitle {
		font-size: 1.09rem;
		letter-spacing: 0.1em;
		margin-bottom: 0.0rem;
		letter-spacing: 0.15em;
		font-weight: 550;
	}

	/* ======================================================== */
	/* SUBTÍTULO - JAPONÉS - ESCRITORIO                       */
	/* ======================================================== */

	.subtitle.japanese-subtitle {
		font-size: 1.1rem;
		letter-spacing: 0.1em;
		margin-bottom: 0.0rem;
		letter-spacing: 0.15em;
		font-weight: 500;
	}

	/* ======================================================== */
	/* PESTAÑAS - INGLÉS - ESCRITORIO                         */
	/* ======================================================== */

	.tabs.english-tabs {
		gap: 2em;
		font-size: 1.10rem;
		padding-top: 0.4rem;
		gap: 3.9em;
		font-weight: 500;
	}

	/* ======================================================== */
	/* PESTAÑAS - JAPONÉS - ESCRITORIO                        */
	/* ======================================================== */

	.tabs.japanese-tabs {
		gap: 2em;
		font-size: 1.10rem;
		padding-top: 0.4rem;
		gap: 3.9em;
		font-weight: 500;
	}

	/* ======================================================== */
	/* LINKS GENERALES                                         */
	/* ======================================================== */

	a {
		display: inline-flex;
		text-decoration: none;
	}

	/* ======================================================== */
	/* SELECTOR DE IDIOMA - ESCRITORIO                        */
	/* ======================================================== */

	.language-switcher {
		position: absolute;
		top: 2.6rem;
		right: 0.9rem;
		display: flex;
		align-items: center;
		gap: 0.2rem;
		font-size: 0.99rem;
		letter-spacing: 0.08em;
	}

	.language-switcher a {
		color: rgba(255, 255, 255, 0.42);
		transition: color 0.2s;
	}

	.language-switcher a:hover {
		color: white;
	}

	.language-switcher .language-active {
		color: rgb(210, 195, 130);
	}

	.language-separator {
		color: rgba(255, 255, 255, 0.18);
	}

	/* ======================================================== */
	/* TELÉFONOS                                               */
	/* ======================================================== */

	@media (max-width: 768px) {

		.navbar {
			padding: 0.5rem 0 0.5rem 0;
		}

		.tabs {
			padding-top: 0.20rem;
			gap: 2rem;
		}

		/* ==================================================== */
		/* AUGUSTO BOSCO - INGLÉS - TELÉFONO                  */
		/* ==================================================== */
		/*
			Ahora usa exactamente los mismos valores iniciales
			que la versión japonesa.
		*/

		.title.english-title {
			font-size: 2rem;
			letter-spacing: 0.1em;
		}

		.title.english-title:hover,
		.title.english-title:active {
			letter-spacing: 0.12em;
		}

		/* ==================================================== */
		/* AUGUSTO BOSCO - JAPONÉS - TELÉFONO                 */
		/* ==================================================== */

		.title.japanese-title {
			font-size: 2rem;
			letter-spacing: 0.1em;
		}

		.title.japanese-title:hover,
		.title.japanese-title:active {
			letter-spacing: 0.12em;
		}

		/* ==================================================== */
		/* SUBTÍTULO - INGLÉS - TELÉFONO                      */
		/* ==================================================== */

		.subtitle.english-subtitle {
			font-size: 0.8rem;
			transform: scaleY(1.1);
			letter-spacing: 0.1em;
			font-weight: 600;
			padding-top: 0.1rem;
		}

		/* ==================================================== */
		/* SUBTÍTULO - JAPONÉS - TELÉFONO                     */
		/* ==================================================== */

		.subtitle.japanese-subtitle {
			font-size: 0.9rem;
			transform: scaleY(1.05);
			letter-spacing: 0.08em;
			padding-top: 0rem;
		}

		/* ==================================================== */
		/* ABOUT / CONTACT / MEDIA - INGLÉS - TELÉFONO        */
		/* ==================================================== */
		/*
			Mismos valores que el menú japonés.
		*/

		.tabs.english-tabs {
			gap: 2.25rem;
			padding-top: 0.3rem;
			font-size: 1.17rem;
			font-weight: 600;
			flex-wrap: nowrap;
		}

		/* ==================================================== */
		/* PESTAÑAS - JAPONÉS - TELÉFONO                      */
		/* ==================================================== */

		.tabs.japanese-tabs {
			gap: 2.0rem;
			padding-top: 0.3rem;
			font-size: 1.16rem;
			font-weight: 600;
			flex-wrap: nowrap;
		}

		/* ==================================================== */
		/* SELECTOR EN | 日本語 - TELÉFONO                    */
		/* ==================================================== */

		.language-switcher {
			position: static;
			margin-top: 0.45rem;
			font-size: 0.78rem;
			font-weight: 600;
		}
	}
</style>