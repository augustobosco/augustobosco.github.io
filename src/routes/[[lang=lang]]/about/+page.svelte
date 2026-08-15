<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/navbar.svelte';
	import { aboutTranslations } from '$lib/i18n/about';

	import SoundWave from '$lib/assets/sound-wave-svgrepo-com.svg';
	import MusicFile from '$lib/assets/music-file-paper-svgrepo-com.svg';
	import Film from '$lib/assets/film-svgrepo-com.svg';

	import img1 from '$lib/assets/about/1.png';
	import img2 from '$lib/assets/about/2.png';
	import img3 from '$lib/assets/about/3.jpg';
	import img4 from '$lib/assets/about/4.png';

	// ============================================================
	// IDIOMA ACTUAL
	// ============================================================
	// /about/    → inglés
	// /ja/about/ → japonés
	//
	// Más adelante agregaremos español.
	// Por ahora cualquier idioma distinto de "ja" usa inglés.
	const lang = $derived(page.params.lang === 'ja' ? 'ja' : 'en');

	// Textos correspondientes al idioma actual.
	const t = $derived(aboutTranslations[lang]);

	// Íconos de las tres tarjetas de servicios.
	// Se mantienen separados de los textos para no duplicar HTML/CSS.
	const serviceIcons = [Film, MusicFile, SoundWave];

	const serviceAlts = ['film', 'music file', 'sound wave'];
</script>

<Navbar selected="about" />

<section class="content">
	<div class="text">

		<!-- ======================================================== -->
		<!-- BIOGRAFÍA - EL TEXTO CAMBIA SEGÚN EL IDIOMA             -->
		<!-- ======================================================== -->

		{#each t.bio as paragraph}
			<p>{paragraph}</p>
		{/each}

		<h1 class="services">{t.servicesTitle}</h1>

		<!-- ======================================================== -->
		<!-- SERVICIOS - MISMO DISEÑO, TEXTO SEGÚN EL IDIOMA         -->
		<!-- ======================================================== -->

		{#each t.services as service, index}
			<div class="service">
				<img
					src={serviceIcons[index]}
					alt={serviceAlts[index]}
					class="svg"
				/>

				<div class="service-text">
					<p class="service-title">{service.title}</p>

					<p class="service-content">
						{service.description}
					</p>
				</div>
			</div>
		{/each}

	</div>

	<div class="pics">
		<img src={img1} alt="pic" />
		<img src={img2} alt="pic" />
		<img src={img3} alt="pic" />
		<img src={img4} alt="pic" />
	</div>
</section>

<!-- FOOTER -->
<div class="footer">
	© 2026 Augusto Bosco <br>
	Website by Zokalyx
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	:root {
		--radius: 1rem;
	}

	.services {
		font-size: 2rem;
		text-align: center;
		margin-top: 1rem;
	}

	.svg {
		transform: scale(0.5, 0.5);
	}

	.service-text {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
	}

	.service-title {
		text-align: left;
		font-size: 1.8rem;
	}

	.service-content {
		line-height: 1.2rem;
		color: rgb(198, 198, 198);
	}

	.service {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1rem;
		background-color: rgb(33, 34, 55);
		padding-right: 3rem;
		padding-bottom: 0.08rem;
		align-items: center;
		border-radius: var(--radius);
	}

	.pics {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.pics img {
		width: 100%;
		height: auto; /* Mantiene la proporción real, sin zoom ni recortes */
		border-radius: var(--radius);
		display: block;
	}

	.text {
		text-align: justify;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: white;
	}

	.content {
		width: 80%;

		/* ======================================================== */
		/* ESTE ES EL LÍMITE QUE EVITA QUE SE ROMPA EN PANTALLAS 2K */
		max-width: 1200px;
		/* ======================================================== */

		margin: 2rem auto 2rem auto;
		display: grid;
		grid-template-columns: 6fr 2fr;
		gap: 3rem;
		font-family: 'Raleway';
		align-items: start; /* Evita que la columna de fotos se estire */
	}

	/* ESTILOS DEL FOOTER */
	.footer {
		margin-top: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		line-height: 1.8;
		font-family: 'Raleway', sans-serif;
	}

	@media (max-width: 768px) {
		.content {
			grid-template-columns: 1fr;
			margin: 1.5rem auto 1.5rem auto;
			width: 85%;
		}

		.service {
			grid-template-columns: 0fr 1fr;
			padding-right: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}

		.service-title {
			font-size: 1.25rem;
		}

		.text {
			text-align: left;
		}
	}
</style>