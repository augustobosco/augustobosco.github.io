<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import HomeImage from '$lib/assets/homepage.jpg';
	import img1 from '$lib/assets/media/1.png';

	let content: HTMLElement;
	
	// Variable que controla si se hizo clic en la miniatura
	let playReel = $state(false);

	function scroll() {
		content.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Navbar selected="" />

<section class="parallax" style="--bg-desktop: url({HomeImage}); --bg-mobile: url({img1});">
	<button onclick={scroll} class="hook" title="Know more">
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
	</button>
</section>

<section class="content" bind:this={content}>
	<p class="summary">
		Augusto Bosco is a composer, orchestrator, and music producer specializing in music for film,
		animation, and video games. With a Bachelor’s Degree in Film Scoring from the Pontifical
		Catholic University of Argentina (UCA), his work bridges classical training with modern
		production techniques, blending orchestral writing, sound design, and advanced mockup creation.
		Having scored and designed sound for animated shorts and other visual projects, he combines
		musical storytelling with technical expertise to deliver scores that are both emotionally
		impactful and production-ready. Fluent in Spanish and English and currently studying Japanese,
		Augusto brings an international perspective to his collaborations, working with directors and
		studios to create original music and immersive soundscapes for visual media.
	</p>
	<iframe
		title="Soundcloud"
		width="100%"
		height="400"
		scrolling="no"
		frameborder="no"
		allow=""
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2182925621%3Fsecret_token%3Ds-QT5rYje2bwR&color=%2313101e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	></iframe>
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

	.summary {
		color: white;
		font-family: 'Raleway';
		text-align: justify;
		margin-bottom: 2rem;
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

	/* ESTILO DEL VIDEO REEL */
	.video-reel {
		width: 100%;
		margin-top: 3rem; /* Lo separa del soundcloud */
		border-radius: 4px;
		overflow: hidden;
	}

	/* =========================================== */
	/* CLASES DE LA FACHADA DEL VIDEO (YT TRAP)    */
	/* =========================================== */
	.video {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9; /* Reemplaza el height fijo y lo hace responsive */
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