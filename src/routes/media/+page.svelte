<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';
	
	import img5 from '$lib/assets/media/5.jpeg';
	import img6 from '$lib/assets/media/6.jpeg'; // <-- SOLO DEJAMOS ESTA. (Si es .jpg, borrale la 'e')

	// IMPORTANTE: Si te tira error, cambiá ".jpg" por ".png" o ".jpeg" según corresponda a tu archivo real
	import img7 from '$lib/assets/media/7.jpg';
	import img8 from '$lib/assets/media/8.jpg';
	import img9 from '$lib/assets/media/9.jpg';
	import img10 from '$lib/assets/media/10.jpg';
	import img11 from '$lib/assets/media/11.jpg';

	// Variables para los reproductores de la grilla (fachadas)
	let ytHowl = $state(false);
	let yt1 = $state(false);
	let yt2 = $state(false);
	let vLuna = $state(false);

	// Variables para las ventanas flotantes (modales)
	let modalHowl = $state(false);
	let modalYt1 = $state(false);
	let modalYt2 = $state(false);
	let modalLuna = $state(false);
	
	// Variable para la foto ampliada
	let modalFoto = $state<string | null>(null);

	// Administrador inteligente de la grilla
	function reproducirSolo(cual: string) {
		ytHowl = cual === 'howl';
		yt1 = cual === 'yt1';
		yt2 = cual === 'yt2';
		vLuna = cual === 'luna';
	}

	// Administrador inteligente de modales
	function abrirModal(cual: string) {
		reproducirSolo('ninguno'); // Apaga cualquier cosa sonando de fondo
		modalHowl = cual === 'howl';
		modalYt1 = cual === 'yt1';
		modalYt2 = cual === 'yt2';
		modalLuna = cual === 'luna';
	}

	function cerrarModales() {
		modalHowl = false;
		modalYt1 = false;
		modalYt2 = false;
		modalLuna = false;
		modalFoto = null; 
	}
</script>

<Navbar selected="media" />

<div class="contenedor-general">

	<!-- SECCIÓN DE FOTOS -->
	<div class="seccion-mosaico">
		<h2 class="titulo-seccion">Photo Gallery</h2>
		<div class="mosaic">
			<img src={img8} class="foto-clicable" onclick={() => modalFoto = img8} alt="Gallery" />
			<img src={img2} class="foto-clicable" onclick={() => modalFoto = img2} alt="Gallery" />
			<img src={img9} class="foto-clicable" onclick={() => modalFoto = img9} alt="Gallery" />
			<img src={img1} class="imagen-uno foto-clicable" onclick={() => modalFoto = img1} alt="Gallery" />
			<img src={img7} class="foto-clicable" onclick={() => modalFoto = img7} alt="Gallery" />
			<img src={img10} class="foto-clicable" onclick={() => modalFoto = img10} alt="Gallery" />
			<!-- ¡ACÁ AGREGUÉ TU FOTO NUEVA PARA QUE SE VEA! -->
			<img src={img6} class="foto-clicable" onclick={() => modalFoto = img6} alt="Gallery" />
		</div>
	</div>

	<!-- SECCIÓN DE VIDEOS -->
	<div class="seccion-videos">
		
		<!-- 1. TRABAJOS ORIGINALES (LA LUNA CON YOUTUBE LOQVj4U3RDA) -->
		<h2 class="titulo-seccion">Original Works</h2>
		
		<div class="grilla-noah">
			<div class="tarjeta-video">
				<button class="encabezado-video" onclick={() => abrirModal('luna')} title="Project Info">
					<span class="titulo-video">LA LUNA - WALTZ NO. 1</span>
					<span class="boton-info">↗</span>
				</button>

				{#if vLuna}
					<iframe
						class="video"
						src="https://www.youtube.com/embed/LOQVj4U3RDA?autoplay=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				{:else}
					<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/LOQVj4U3RDA/maxresdefault.jpg');" onclick={() => reproducirSolo('luna')}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>
		</div>

		<!-- LÍNEA SEPARADORA -->
		<hr class="linea-separadora">

		<!-- 2. SPEC WORK (HOWL CON VIDEO LOCAL) -->
		<div class="grilla-noah">
			<div class="tarjeta-video">
				<button class="encabezado-video" onclick={() => abrirModal('howl')} title="Project Info">
					<span class="titulo-video">HOWL’S MOVING CASTLE | LIVE ORCHESTRA</span>
					<span class="boton-info">↗</span>
				</button>

				{#if ytHowl}
					<video class="video" controls autoplay>
						<source src="/MEDIA/HowlsMovingCastle/video-howl.mp4" type="video/mp4">
					</video>
				{:else}
					<button class="video fachada" style="background-image: url('/MEDIA/HowlsMovingCastle/portada-howl.jpg');" onclick={() => reproducirSolo('howl')}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

			<!-- DRAGONS -->
			<div class="tarjeta-video">
				<button class="encabezado-video" onclick={() => abrirModal('yt1')} title="Project Info">
					<span class="titulo-video">DRAGONS | OVERWATCH ANIMATED SHORT</span>
					<span class="boton-info">↗</span>
				</button>

				{#if yt1}
					<iframe
						class="video"
						src="https://www.youtube.com/embed/jIgz_IhCmEY?autoplay=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				{:else}
					<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/jIgz_IhCmEY/maxresdefault.jpg');" onclick={() => reproducirSolo('yt1')}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

			<!-- POCAHONTAS -->
			<div class="tarjeta-video">
				<button class="encabezado-video" onclick={() => abrirModal('yt2')} title="Project Info">
					<span class="titulo-video">DISNEY POCAHONTAS | RESCORE</span>
					<span class="boton-info">↗</span>
				</button>

				{#if yt2}
					<iframe 
						class="video"
						src="https://www.youtube.com/embed/nps4-HFdQBc?autoplay=1" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						allowfullscreen
					></iframe>
				{:else}
					<button class="video fachada" style="background-image: url('https://img.youtube.com/vi/nps4-HFdQBc/maxresdefault.jpg');" onclick={() => reproducirSolo('yt2')}>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path class="fondo-boton" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				{/if}
			</div>

		</div>
	</div>

	<!-- FOOTER -->
	<div class="footer">
		© 2026 Augusto Bosco <br>
		Website by Zokalyx
	</div>

</div>

<!-- VENTANA FLOTANTE PARA VER FOTOS AMPLIADAS -->
{#if modalFoto}
	<div class="modal-fondo" onclick={cerrarModales}>
		<div class="modal-tarjeta-foto" onclick={(e) => e.stopPropagation()}>
			<button class="btn-cerrar-foto" onclick={cerrarModales}>✕</button>
			<img src={modalFoto} class="foto-ampliada" alt="Ampliación" />
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 4: LA LUNA - WALTZ NO. 1 -->
{#if modalLuna}
	<div class="modal-fondo" onclick={cerrarModales}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={cerrarModales}>✕</button>
			<h3>LA LUNA - WALTZ NO. 1</h3>
			
			<iframe
				class="modal-media"
				src="https://www.youtube.com/embed/ythCQF-ag_0"
				title="La Luna - Waltz No. 1"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>

			<p>Presented to the public for the first time in the UCA auditorium, I am very grateful to everyone involved in the presentation of the piece. During that year, I lived an experience that will accompany me throughout the development of my professional career. 
				
				My approach to orchestration has evolved significantly over the years and many of the decisions I make today are a direct result of the invaluable experience gained during that time. There's a moment every composer knows: weeks of preparation in notation software, hundreds of hours of arranging, everything meticulously planned on screen. Then the first rehearsal happens, and suddenly it's all real.</p>
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 1: HOWL -->
{#if modalHowl}
	<div class="modal-fondo" onclick={cerrarModales}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={cerrarModales}>✕</button>
			<h3>HOWL’S MOVING CASTLE | LIVE ORCHESTRA</h3>
			
			<img src={img11} class="modal-media" alt="Howl's Moving Castle Live Orchestra" />

			<iframe
				title="Soundcloud Howl"
				width="100%"
				height="120"
				scrolling="no"
				frameborder="no"
				loading="lazy"
				class="modal-soundcloud"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2370137360%3Fsecret_token%3Ds-8QTC0vOrImq&color=%231e1a0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
			></iframe>

			<p>This project was presented live at the UCA Auditorium in 2023, marking the first public performance of my reorchestration for Howl’s Moving Castle. I am deeply grateful to the orchestra, conductor, and faculty for making this experience possible, as it became a milestone in my growth as a composer and orchestrator.

Beyond the creative process of composition, this project demanded the full responsibility of preparing professional materials: delivering a complete conductor’s score as well as clear, accurate parts for each instrument, all within strict deadlines. It required balancing readability with musical intention, ensuring performers could confidently bring the music to life in a single rehearsal cycle.

From an orchestration perspective, the challenge was to use all available instruments in a way that each voice contributed meaningfully, building a coherent soundscape that matched the imagery on screen. Every decision was made with synchronization in mind, ensuring the live performance aligned seamlessly with the film’s narrative flow. Is clearly inspired by Joe Hisaishi’s original score, particularly in its use of a waltz as the structural foundation. I also considered other waltz traditions I’ve studied such as Shostakovich, though only as a very subtle influence that colored some of my decisions without altering the essence of the piece.

The main difference from the original lies in the form. Hisaishi’s version introduces a change once the characters reach the balcony, building into a large orchestral tutti as Howl departs. In my approach, I kept the music continuous: it begins with the first scene and flows seamlessly until the next, creating a single arc rather than a sectional shift.</p>
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 2: YOUTUBE 1 (DRAGONS) -->
{#if modalYt1}
	<div class="modal-fondo" onclick={cerrarModales}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={cerrarModales}>✕</button>
			<h3>ANIMATION SCORE PROJECT</h3>
			
			<img src={img3} class="modal-media" alt="Dragons Score Project" />

			<iframe
				title="Soundcloud Dragons"
				width="100%"
				height="120"
				scrolling="no"
				frameborder="no"
				loading="lazy"
				class="modal-soundcloud"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2370140375%3Fsecret_token%3Ds-NnZvI4mfFod&color=%231e1a0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
			></iframe>

			<p>This project is my personal tribute to Blizzard’s Dragons cinematic. I recreated the entire soundtrack with original music, recorded in my studio, and redesigned the soundscape by layering assets from the original game together with custom sounds and commercial libraries. The result is a fully reimagined audio experience that respects the spirit of the short while offering my own interpretation.

For the score, I drew on a blend of feudal Japanese aesthetics and cyberpunk elements, inspired by contemporary Japanese music and composers such as Joe Hisaishi. I began by focusing on the sound design, carefully editing and synchronizing audio cues. Ableton was used to sculpt new textures, while Nuendo provided the environment for assembling and finalizing the soundscape. The original dialogue was preserved, but all other elements were reworked to give the project a distinct identity.

Once the sound design foundation was in place, I composed original motifs for the two main characters, writing the first drafts traditionally on paper before moving into Dorico for orchestration. The challenge was to create a coherent score within a highly variable tempo map, following the structure of the cinematic while shaping my own musical narrative.

The orchestral mockup was produced in Nuendo using Kontakt libraries, switching between large ensembles for epic moments and smaller groups for intimate passages. Finally, I recorded live violins, cellos, and quena (a Peruvian flute whose timbre closely resembles the Japanese shakuhachi), adding a personal and organic layer to the mix.

This project showcases my ability to integrate composition, orchestration, sound design, live recording, and production into a cohesive storytelling tool for games and animation.

Special thanks to Gonzalo Naessens, who assisted in some artistic decisions during the mix.</p>
		</div>
	</div>
{/if}

<!-- VENTANA FLOTANTE 3: YOUTUBE 2 (POCAHONTAS) -->
{#if modalYt2}
	<div class="modal-fondo" onclick={cerrarModales}>
		<div class="modal-tarjeta" onclick={(e) => e.stopPropagation()}>
			<button class="modal-cerrar" onclick={cerrarModales}>✕</button>
			<h3>CINEMATIC SOUND DESIGN</h3>
			
			<img src={img5} class="modal-media" alt="Pocahontas Sound Design" />

			<iframe
				title="Soundcloud Pocahontas"
				width="100%"
				height="120"
				scrolling="no"
				frameborder="no"
				loading="lazy"
				class="modal-soundcloud"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2370068753%3Fsecret_token%3Ds-ETTmEg6MgUS&color=%2313101e&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
			></iframe>

			<p>This is a project I completed in 2024, with both the composition and production created during that time. It remains one of my favorite works from my student years, largely because of the challenge it presented, the scene depicts the first meeting between Pocahontas and John Smith, their very first glance at each other. For me, as a composer, capturing that moment felt monumental (it was a true challenge), but I believe I managed to resolve it in a way that feels effective and different from the original. While the original score leaned more toward intimacy, I wanted to highlight the feeling of love at first sight.
				
As a student work, the piece draws inspiration from both Dvořák’s Symphony No. 9 and Hisaishi’s thematic writing, since both composers often worked with folk-inspired materials, the references emerged after a thorough personal investigation and a detailed analysis of the scene. What I consider my personal achievement in this piece lies in the construction and realization of the music: although I drew on these two references, I also found a way to create something that came from my own voice.

In addition to the composition, I handled the sound design and reworked aspects of the production (essentially remastering it), so that it could fit well in my portfolio. For me it serves not only as a showcase of my early craft but also as a meaningful reminder of those formative years.</p>
		</div>
	</div>
{/if}

<style>
	/* ---------------------------------------------------- */
	/* 1. ESTILOS GENERALES Y LAYOUTS BASE                  */
	/* ---------------------------------------------------- */
	
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

	.linea-separadora {
		width: 100%;
		border: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
		margin-top: 3rem;
		margin-bottom: 3rem;
	}

	/* FOOTER AL FINAL */
	.footer {
		order: 3;
		margin-top: 5rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		line-height: 1.8;
		font-family: 'Raleway', sans-serif;
	}

	/* ========================================================== */
	/* SISTEMA DE GRILLA ACTIVO: RESPETA TAMAÑO COMPLETO (AUTO)   */
	/* ========================================================== */
	.mosaic {
		display: grid;
		width: 100%;
		gap: 1.5rem;
		align-items: start;
		grid-template-columns: repeat(4, 1fr); 
	}

	.mosaic img {
		width: 100%;
		height: auto; /* Muestra el 100% de la foto sin recortes verticales */
		border-radius: 2px;
		display: block;
	}

	/* EFECTO HOVER PARA LAS FOTOS */
	.foto-clicable {
		cursor: pointer;
		transition: transform 0.3s ease, filter 0.3s ease;
	}

	.foto-clicable:hover {
		transform: scale(1.03);
		filter: brightness(1.15);
		box-shadow: 0 5px 15px rgba(0,0,0,0.3);
	}

	/* GRILLA A 2 COLUMNAS ESTILO NOAH GLADSTONE PARA VIDEOS (PC) */
	.grilla-noah {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem 2rem;
	}

	.tarjeta-video {
		display: flex;
		flex-direction: column;
	}

	/* Título y flecha de videos */
	.encabezado-video {
		background: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem; /* Un poquito más de espacio entre el texto y la flecha */
		margin-bottom: 1rem;
		cursor: pointer;
		padding: 0;
	}

	/* ========== TÍTULO Y FLECHA MEJORADOS ========== */
	.titulo-video {
		color: rgb(210, 195, 130);
		font-family: 'Raleway', sans-serif;
		font-size: 0.85rem;
		letter-spacing: 0.12em;
		font-weight: 500;
		text-align: center;
		
		/* text-decoration: underline;
		text-decoration-color: rgba(210, 195, 130, 0.3);
		text-underline-offset: 4px;
		transition: color 0.2s, text-decoration-color 0.2s;*/
	}

	.boton-info {
		color: rgb(255, 226, 94);
		font-size: 1.4rem; /* Flecha más grande y visible */
		line-height: 1;
		transition: transform 0.25s ease, color 0.2s ease;
	}

	.encabezado-video:hover .titulo-video {
		color: white;
		text-decoration-color: white;
	}

	/* Animación de la flecha al pasar el mouse (se agranda y se desplaza) */
	.encabezado-video:hover .boton-info {
		transform: translate(3px, -3px) scale(1.1);
		color: white;
	}
	/* ================================================================ */

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

	/* ESTILOS DE LA VENTANA FLOTANTE GENERAL */
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
		padding: 1rem;
	}

	.modal-tarjeta {
		background-color: rgb(35, 30, 67);
		color: white;
		font-family: 'Raleway', sans-serif;
		padding: 2rem 1.5rem;
		border-radius: 6px;
		max-width: 600px;
		width: 100%;
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.15);
		max-height: 85vh;
		overflow-y: auto;
	}

	/* ESTILOS ESPECÍFICOS PARA LA FOTO AMPLIADA */
	.modal-tarjeta-foto {
		position: relative;
		display: inline-block;
	}

	.foto-ampliada {
		max-width: 90vw;
		max-height: 85vh;
		border-radius: 4px;
		object-fit: contain;
		box-shadow: 0 10px 40px rgba(0,0,0,0.6);
		display: block;
	}

	.btn-cerrar-foto {
		position: absolute;
		top: -35px;
		right: 0px;
		background: none;
		border: none;
		color: white !important;
		font-size: 1.6rem;
		cursor: pointer;
		padding: 0;
		margin: 0;
		float: none;
	}

	.btn-cerrar-foto:hover {
		color: #ff5555 !important;
	}

	.modal-cerrar {
		position: sticky;
		top: 0;
		float: right;
		background: none;
		border: none;
		color: grey;
		font-size: 1.4rem;
		cursor: pointer;
		margin-top: -1rem;
		margin-right: -0.5rem;
		z-index: 10;
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

	.modal-media {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 4px;
		margin-bottom: 1rem;
		display: block;
		object-fit: cover;
	}

	.modal-soundcloud {
		margin-bottom: 1rem;
		border-radius: 4px;
	}

	.modal-tarjeta p {
		line-height: 1.6;
		font-size: 1.05rem; 
		color: rgb(220, 220, 230);
		margin: 0;
		white-space: pre-line;
	}

	/* ---------------------------------------------------- */
	/* 2. MEDIA QUERIES (ADAPTACIÓN MÓVIL) - AL FINAL       */
	/* ---------------------------------------------------- */

	/* Monitores medianos/Laptops */
	@media (max-width: 1400px) {
		.mosaic {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Tablets y Celulares */
	@media (max-width: 1024px) {
		.mosaic {
			grid-template-columns: repeat(2, 1fr);
		}

		.grilla-noah {
			grid-template-columns: 1fr;
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

		.mosaic img.imagen-uno {
			display: none;
		}
	}

	/* Celulares chicos */
	@media (max-width: 768px) {
		.mosaic {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>