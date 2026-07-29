<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';

	let v1 = $state(false);
	let yt1 = $state(false);
	let yt2 = $state(false);

	let modalHowl = $state(false);
	let modalYt1 = $state(false);
	let modalYt2 = $state(false);
</script>

<Navbar selected="media" />

<div class="contenedor-general">

	<!-- SECCIÓN DE FOTOS (PHOTO GALLERY) -->
	<div class="seccion-mosaico">
		<h2 class="titulo-seccion">Photo Gallery</h2>
		<div class="mosaic">
			<img src={img1} class="imagen-uno" />
			<img src={img2} />
			<img src={img3} />
			<img src={img4} />
		</div>
	</div>

	<!-- SECCIÓN DE VIDEOS (VIDEO GALLERY ESTILO NOAH) -->
	<div class="seccion-videos">
		<h2 class="titulo-seccion">Video Gallery</h2>
		
		<div class="grilla-noah">
			
			<!-- PROYECTO 1: HOWL'S MOVING CASTLE -->
			<div class="tarjeta-video">
				<div class="encabezado-video">
					<span class="titulo-video">HOWL’S MOVING CASTLE | LIVE ORCHESTRA</span>
					<button class="boton-info" onclick={() => modalHowl = true} title="Project Info">↗</button>
				</div>

				{#if v1}
					<video class="video" controls autoplay>
						<source src="/MEDIA/HowlsMovingCastle/video-howl.mp4" type="video/mp4">
					</video>
				{:else}
					<button class="video fachada" style="background-image: url('/MEDIA/HowlsMovingCastle/portada-howl.jpg');" onclick={() => v1 = true}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

			<!-- PROYECTO 2: YOUTUBE 1 -->
			<div class="tarjeta-video">
				<div class="encabezado-video">
					<span class="titulo-video">DRAGONS | OVERWATCH ANIMATED SHORT</span>
					<button class="boton-info" onclick={() => modalYt1 = true} title="Project Info">↗</button>
				</div>

				{#if yt1}
					<iframe
						class="video"
						src="https://www.youtube.com/embed/jIgz_IhCmEY?autoplay=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				{:else}
					<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/jIgz_IhCmEY/maxresdefault.jpg');" onclick={() => yt1 = true}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

			<!-- PROYECTO 3: YOUTUBE 2 -->
			<div class="tarjeta-video">
				<div class="encabezado-video">
					<span class="titulo-video">DISNEY POCAHONTAS 1995 | RESCORE</span>
					<button class="boton-info" onclick={() => modalYt2 = true} title="Project Info">↗</button>
				</div>

				{#if yt2}
					<iframe 
						class="video"
						src="https://www.youtube.com/embed/nps4-HFdQBc?autoplay=1" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen
					></iframe>
				{:else}
					<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/nps4-HFdQBc/maxresdefault.jpg');" onclick={() => yt2 = true}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

		</div>
	</div>

</div>

<!-- VENTANA FLOTANTE 1: HOWL -->
{#if modalHowl}
	<div class="modal-fondo" onclick={() => modalHowl = false}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={() => modalHowl = false}>✕</button>
			<h3>HOWL'S MOVING CASTLE — RESCORE</h3>
			<img src="/MEDIA/HowlsMovingCastle/portada-howl.jpg" class="modal-img" />
			<p>This project was presented live at the UCA Auditorium in 2023, marking the first public performance of my reorchestration for Howl’s Moving Castle. I am deeply grateful to the orchestra, conductor, and faculty for making this experience possible, as it became a milestone in my growth as a composer and orchestrator.
Beyond the creative process of composition, this project demanded the full responsibility of preparing professional materials: delivering a complete conductor’s score as well as clear, accurate parts for each instrument, all within strict deadlines. It required balancing readability with musical intention, ensuring performers could confidently bring the music to life in a single rehearsal cycle.
From an orchestration perspective, the challenge was to use all available instruments in a way that each voice contributed meaningfully, building a coherent soundscape that matched the imagery on screen. Every decision was made with synchronization in mind, ensuring the live performance aligned seamlessly with the film’s narrative flow. Is clearly inspired by Joe Hisaishi’s original score, particularly in its use of a waltz as the structural foundation. I also considered other waltz traditions I’ve studied such as Shostakovich, though only as a very subtle influence that colored some of my decisions without altering the essence of the piece.
The main difference from the original lies in the form. Hisaishi’s version introduces a change once the characters reach the balcony, building into a large orchestral tutti as Howl departs. In my approach, I kept the music continuous: it begins with the first scene and flows seamlessly until the next, creating a single arc rather than a sectional shift.</p>
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 2: YOUTUBE 1 -->
{#if modalYt1}
	<div class="modal-fondo" onclick={() => modalYt1 = false}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={() => modalYt1 = false}>✕</button>
			<h3>ANIMATION SCORE PROJECT</h3>
			<img src="https://img.youtube.com/vi/jIgz_IhCmEY/maxresdefault.jpg" class="modal-img" />
			<p>Custom music score for animated short film. Focuses on thematic character motifs and dynamic synchronization with visual cues.</p>
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 3: YOUTUBE 2 -->
{#if modalYt2}
	<div class="modal-fondo" onclick={() => modalYt2 = false}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={() => modalYt2 = false}>✕</button>
			<h3>CINEMATIC SOUND DESIGN</h3>
			<img src="https://img.youtube.com/vi/nps4-HFdQBc/maxresdefault.jpg" class="modal-img" />
			<p>Immersive sound design and Foley work. Created custom textures and ambient soundscapes to build atmosphere and depth.</p>
		</div>
	</div>
{/if}

<style>
	.contenedor-general {
		display: flex;
		flex-direction: column;
		background-color: rgb(19, 16, 30);
		min-height: 100vh;
		padding: 2rem 5vw 4rem 5vw;
	}

	.seccion-mosaico { order: 1; }
	.seccion-videos { order: 2; margin-top: 3rem; }

	.titulo-seccion {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 1.3rem;
		font-weight: 400;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
		padding-bottom: 0.5rem;
	}

	.mosaic {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5em;
	}

	.mosaic img {
		height: 18em;
		object-fit: cover;
		border-radius: 2px;
	}

	/* GRILLA A 2 COLUMNAS ESTILO NOAH GLADSTONE */
	.grilla-noah {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem 2rem;
	}

	.tarjeta-video {
		display: flex;
		flex-direction: column;
	}

	.encabezado-video {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.6rem;
	}

	.titulo-video {
		color: rgb(210, 195, 130); /* Tono dorado tenue elegante similar al de Noah */
		font-family: 'Raleway', sans-serif;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		font-weight: 500;
		text-align: center;
	}

	.boton-info {
		background: none;
		border: none;
		color: rgb(153, 135, 255);
		font-size: 1rem;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		transition: transform 0.2s, color 0.2s;
	}

	.boton-info:hover {
		transform: translate(2px, -2px);
		color: white;
	}

	.video {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 2px;
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

	/* ESTILOS DE LA VENTANA FLOTANTE (MODAL) */
	.modal-fondo {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.85);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		padding: 1.5rem;
	}

	.modal-tarjeta {
		background-color: rgb(35, 30, 67);
		color: white;
		font-family: 'Raleway', sans-serif;
		padding: 2rem;
		border-radius: 6px;
		max-width: 550px;
		width: 100%;
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.modal-cerrar {
		position: absolute;
		top: 1rem;
		right: 1.2rem;
		background: none;
		border: none;
		color: grey;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.modal-cerrar:hover {
		color: white;
	}

	.modal-tarjeta h3 {
		margin-top: 0;
		font-size: 1.1rem;
		letter-spacing: 0.1em;
		color: rgb(210, 195, 130);
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.modal-img {
		width: 100%;
		height: auto;
		border-radius: 4px;
		margin-bottom: 1rem;
	}

	.modal-tarjeta p {
		line-height: 1.6;
		font-size: 0.95rem;
		color: rgb(220, 220, 230);
		margin: 0;
	}

	/* ADAPTACIÓN PARA CELULARES Y PANTALLAS CHICAS */
	@media (max-width: 1024px) {
		.grilla-noah {
			grid-template-columns: 1fr; /* Pasa a 1 columna en celulares */
			gap: 2.5rem;
		}

		.seccion-videos {
			order: 1;
			margin-top: 0;
			margin-bottom: 2rem;
		}

		.seccion-mosaico {
			order: 2;
		}

		.imagen-uno {
			display: none;
		}

		.mosaic img {
			height: auto;
			width: 100%;
		}
	}
</style>