<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/navbar.svelte';
	import { homeTranslations } from '$lib/i18n/home';
	import { onMount } from 'svelte';
	import HomeImage from '$lib/assets/homepage.jpg';
	import img1 from '$lib/assets/media/1.png';

	let content: HTMLElement;

	// ============================================================
	// IDIOMA ACTUAL
	// ============================================================
	// /       → inglés
	// /ja/    → japonés
	const lang = $derived(page.params.lang === 'ja' ? 'ja' : 'en');

	// Textos correspondientes al idioma actual.
	const t = $derived(homeTranslations[lang]);
	
	// Variable que controla si se hizo clic en la miniatura
	let playReel = $state(false);

	// ----------------------------------------------------
	// CONTROL DE VOLUMEN PARA SOUNDCLOUD
	// ----------------------------------------------------
	let soundcloudIframe: HTMLIFrameElement;
	let soundcloudWidget: any = null;

	// Volumen inicial del reproductor. Cambiá este número si querés
	// que la página arranque más fuerte o más suave (0 a 100).
	let volumen = $state(50);

	function cambiarVolumen(event: Event) {
		const control = event.currentTarget as HTMLInputElement;
		volumen = Number(control.value);
		soundcloudWidget?.setVolume(volumen);
	}

	onMount(() => {
		function inicializarSoundCloud() {
			const SC = (window as any).SC;

			if (!SC || !soundcloudIframe) return;

			soundcloudWidget = SC.Widget(soundcloudIframe);

			// Esperamos a que SoundCloud confirme que el reproductor está listo
			// antes de aplicar el volumen inicial.
			soundcloudWidget.bind(SC.Widget.Events.READY, () => {
				soundcloudWidget.setVolume(volumen);
			});
		}

		const scriptExistente = document.querySelector<HTMLScriptElement>(
			'script[src="https://w.soundcloud.com/player/api.js"]'
		);

		if (scriptExistente) {
			if ((window as any).SC) {
				inicializarSoundCloud();
			} else {
				scriptExistente.addEventListener('load', inicializarSoundCloud, { once: true });
			}
		} else {
			const script = document.createElement('script');
			script.src = 'https://w.soundcloud.com/player/api.js';
			script.async = true;
			script.addEventListener('load', inicializarSoundCloud, { once: true });
			document.head.appendChild(script);
		}

		return () => {
			const SC = (window as any).SC;
			if (soundcloudWidget && SC) {
				soundcloudWidget.unbind(SC.Widget.Events.READY);
			}
		};
	});

	function scroll() {
		content.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Navbar selected="" />

<section class="parallax" style="--bg-desktop: url({HomeImage}); --bg-mobile: url({img1});">
	<!--<button onclick={scroll} class="hook" title="Know more">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<polyline points="19 12 12 19 5 12"></polyline>
		</svg>
	</button>-->
</section>

<section class="content" bind:this={content}>

	<!-- ======================================================== -->
	<!-- RESUMEN SEGÚN IDIOMA                                    -->
	<!-- ======================================================== -->
	<!--
		INGLÉS:
		Se unen todos los textos y se muestran como un único bloque.

		JAPONÉS:
		Cada elemento del array se muestra como un párrafo separado.
	-->

	{#if lang === 'ja'}
		<div class="summary summary-ja">
			{#each t.summary as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	{:else}
		<p class="summary summary-en">{t.summary.join(' ')}</p>
	{/if}

	<div class="soundcloud-bloque">
		<iframe
			bind:this={soundcloudIframe}
			title="Soundcloud"
			width="100%"
			height="400"
			scrolling="no"
			frameborder="no"
			allow=""
			src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2182925621%3Fsecret_token%3Ds-QT5rYje2bwR&color=%2313101e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
		></iframe>

		<!-- CONTROL DE VOLUMEN EXTERNO PARA SOUNDCLOUD -->
		<div class="control-volumen">
			<span class="icono-volumen" aria-hidden="true">🔊</span>

			<input
				type="range"
				min="0"
				max="100"
				step="1"
				value={volumen}
				oninput={cambiarVolumen}
				aria-label="SoundCloud volume"
			/>

			<span class="numero-volumen">{volumen}%</span>
		</div>
	</div>

<!-- 
	<div class="video-reel">
		<!-- LÓGICA DE FACHADA PARA CARGA RÁPIDA 
		{#if playReel}
			<iframe 
				class="video"
				src="https://www.youtube.com/embed/LOQVj4U3RDA?autoplay=1" 
				title="Video Reel" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
				allowfullscreen>
			</iframe>
		{:else}
			<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/LOQVj4U3RDA/maxresdefault.jpg');" onclick={() => playReel = true}>
				<svg viewBox="0 0 68 48" class="boton-youtube">
					<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
					<path d="M 45,24 27,14 27,34" fill="#fff"></path>
				</svg>
			</button>
		{/if}
	</div>
	¡Es una decisión excelente! Al ocupar el 100% del ancho del contenedor en una pantalla grande, cualquier pérdida de resolución o pixelado se notaría muchísimo.

Subir el reel a YouTube en 4K o 1080p con un bitrate alto es la jugada más inteligente: ellos ponen los servidores para procesar y streamear ese video gigante, y tu página sigue cargando en milisegundos gracias a la miniatura trampa. Es lo que hacen las agencias grandes.

Cuando tengas esa miniatura en máxima calidad diseñada por vos, cambiarla en el código va a ser súper fácil. El proceso es exactamente el mismo que usaste para la portada local de Howl.

Solo vas a tener que hacer dos cosas:

Importar tu imagen arriba de todo junto con las otras:
import portadaReel from '$lib/assets/portada-reel.jpg';

Reemplazar el link de YouTube en el botón de la fachada por tu nueva variable:
style="background-image: url({portadaReel});"

De esa manera te asegurás de tener el control total sobre la primera impresión visual de la página de inicio, manteniendo el rendimiento impecable.
	-->

	<!-- FOOTER -->
	<div class="footer">
		© 2026 Augusto Bosco <br>
		Website by Zokalyx
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	html,
	body {
		overflow-x: hidden;
	}

	/* ======================================================== */
	/* TEXTO PRINCIPAL DEL HOME                                */
	/* ======================================================== */

	.summary {
		color: white;
		font-family: 'Raleway';
		margin-bottom: 2rem;
	}

	/* ======================================================== */
	/* INGLÉS                                                  */
	/* ======================================================== */
	/*
		El texto inglés se mantiene como un único bloque
		y queda JUSTIFICADO en computadora.
	*/

	.summary-en {
		text-align: justify;
	}

	/* ======================================================== */
	/* JAPONÉS                                                 */
	/* ======================================================== */
	/*
		El japonés se divide en párrafos porque visualmente
		es más cómodo de leer que un único bloque largo.
	*/

	.summary-ja {
		text-align: left;
	}

	.summary-ja p {
		margin: 0 0 1rem 0;
	}

	.summary-ja p:last-child {
		margin-bottom: 0;
	}

	.parallax {
		position: relative;
		padding-top: 2rem;
		height: 60vh;
		background-image: var(--bg-desktop);
		background-attachment: scroll;
		background-position: calc(50% + 0em) 50%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.parallax::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image: url('https://grainy-gradients.vercel.app/noise.svg');
		background-repeat: repeat;
		background-size: 400px;
		opacity: 0.1;
		background-attachment: scroll;
		background-position: center;
	}

	.hook {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background: none;
		border: none;
		transition:
			transform 0.25s,
			background 0.25s;
		animation: fade linear both;
		animation-timeline: scroll();
		animation-range: 0% 100%;
	}

	@media (hover: hover) {
		.hook:hover {
			cursor: pointer;
			transform: translate(-50%, 1rem);
			background-color: rgb(46, 41, 82);
		}
	}

	.hook svg {
		width: 50%;
		height: 50%;
		color: white;
	}

	.content {
		position: relative;
		background: rgb(35, 30, 67);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 2rem 10vw 3rem 10vw;
	}

	/* =========================================== */
	/* CONTROL DE VOLUMEN DEL PLAYER DE SOUNDCLOUD */
	/* =========================================== */

	.soundcloud-bloque {
		width: 100%;
	}

	.soundcloud-bloque iframe {
		display: block;
	}

	.control-volumen {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 0.75rem;
		font-family: 'Raleway', sans-serif;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.65);
	}

	.control-volumen input[type='range'] {
		flex: 1;
		cursor: pointer;
		accent-color: rgb(210, 195, 130);
	}

	.icono-volumen {
		font-size: 1rem;
		line-height: 1;
	}

	.numero-volumen {
		min-width: 3rem;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	/* ESTILO DEL VIDEO REEL */

	.video-reel {
		width: 100%;
		margin-top: 3rem;
		border-radius: 4px;
		overflow: hidden;
	}

	/* =========================================== */
	/* CLASES DE LA FACHADA DEL VIDEO (YT TRAP)    */
	/* =========================================== */

	.video {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 4px;
	}

	.fachada {
		background-size: cover;
		background-position: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		border: none;
		padding: 0;
	}

	.boton-youtube {
		width: 68px;
		height: 48px;
	}

	.fondo-boton {
		transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
	}

	.fachada:hover .fondo-boton {
		fill: #ff0000;
		fill-opacity: 1;
	}

	/* ESTILOS DEL FOOTER */

	.footer {
		margin-top: 2rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		line-height: 1.8;
		font-family: 'Raleway', sans-serif;
		width: 100%;
	}
	
	@media (max-width: 768px) {
		.parallax {
			background-image: var(--bg-mobile);
		}

		.content {
			padding: 2rem 5vw 3rem 5vw;
		}

		/* ==================================================== */
		/* SOLO EN TELÉFONO                                    */
		/* ==================================================== */
		/*
			Tanto inglés como japonés quedan alineados
			a la izquierda en celular.
		*/

		.summary {
			text-align: left;
			font-size: 1.1rem;
		}

		.navbar {
			padding: 0.3rem 0 0.5rem 0;
		}

		.tabs {
			padding-top: 0.25rem;
			font-size: 1.2rem;
		}
	}

	@keyframes parallax {
		from {
			background-position: center 0;
		}

		to {
			background-position: center -200px;
		}
	}

	@keyframes fade {
		0% {
			opacity: 1;
			visibility: visible;
		}

		50% {
			opacity: 0;
			visibility: hidden;
		}

		100% {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>