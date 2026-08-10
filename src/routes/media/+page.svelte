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
	import img12 from '$lib/assets/media/12.jpeg';

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


<!-- ======================================================== -->
<!-- ÍCONO DE INFORMACIÓN                                     -->
<!-- Celeste por fuera y amarillo únicamente en la "i"       -->
<!-- ======================================================== -->

{#snippet iconoInformacion()}
	<svg
		class="icono-info-svg"
		viewBox="0 0 2376.83 2381.51"
		aria-hidden="true"
		focusable="false"
	>
		<!-- ======================================================== -->
		<!-- FONDO DEL ÍCONO                                         -->
		<!-- ======================================================== -->

		<circle
			class="icono-info-relleno"
			cx="1188.415"
			cy="1190.755"
			r="1106"
		/>


		<!-- ======================================================== -->
		<!-- CONTORNO EXTERIOR                                       -->
		<!-- ======================================================== -->

		<path
			class="icono-info-contorno"
			d="m1187.9,0c655.53-.74,1187.36,531.33,1188.92,1189.45,1.56,657.24-533.45,1193.46-1189.36,1192.06C530.8,2380.1-.32,1847.38,0,1190.48.32,533.08,531.52.74,1187.9,0Zm1103.22,1191.84c2.41-607-492.08-1103.41-1101.6-1105.87C583.79,83.54,88.1,579.13,85.72,1189.56c-2.37,606.86,492.21,1103.42,1101.56,1105.97,605.64,2.53,1101.42-493.18,1103.85-1103.69Z"
		/>


		<!-- ======================================================== -->
		<!-- "i" ORIGINAL, PERO MÁS FINA                             -->
		<!-- ======================================================== -->
		<!--
			IMPORTANTE:
			El 0.76 es el grosor horizontal de la "i".

			1.00 = grosor original
			0.85 = un poco más fina
			0.76 = fina, recomendado
			0.68 = bastante fina

			La forma original NO cambia.
		-->

		<g transform="translate(1285 0) scale(0.83 1) translate(-1285 0)">

			<!-- CUERPO DE LA "i" -->
			<path
				class="icono-info-letra"
				d="m1247.57,1651.48c44.77-35.1,78.73-73.31,108.37-115.7,31.25-44.71,50.21-47,91.76-11.09,30.98,26.78,61.7,53.85,92.68,80.62,15.26,13.19,23.44,29.17,17.45,49.27-49.2,165.25-135.1,300.77-304.22,364.72-78.42,29.65-160.35,34.83-240.84,8.52-107.26-35.06-153.65-118.87-169.34-224.54-14.74-99.32,5.89-193.97,38.09-287.08,31.84-92.06,63.58-184.15,95.31-276.24,9.74-28.26,8.87-29.16-21.28-24.48-36.54,5.67-72.96,12.49-109.68,16.57-39.01,4.33-58.7-17.31-53.5-56.07,7.26-54.12,15.33-108.14,21.85-162.35,3.35-27.91,16.86-44.27,44.48-50.2,124.6-26.73,248.67-56.27,373.86-79.79,57.17-10.74,116.64-4.38,174.93-1.9,30.93,1.31,43.86,28.48,34.13,63.65-38.44,138.97-77.22,277.85-115.79,416.79-25.02,90.12-49.91,180.27-74.78,270.43-1.23,4.46-1.72,9.13-3.49,18.9Z"
			/>

			<!-- PUNTO DE LA "i" -->
			<path
				class="icono-info-letra"
				d="m1058.83,577.22c-.54-125.69,99.95-226.27,226.05-226.24,124.14.03,224.6,100.09,225.3,224.38.71,125.64-100.3,228.25-224.82,228.4-125.25.15-225.98-100.59-226.53-226.55Z"
			/>

		</g>

	</svg>
{/snippet}

<!--Este comentario es el snippet pero sin relleno
		<svg
		class="icono-info-svg"
		viewBox="0 0 2376.83 2381.51"
		aria-hidden="true"
		focusable="false"
	>
		
		<circle
			class="icono-info-relleno"
			cx="1188.415"
			cy="1190.755"
			r="1106"
		/>

		
		<path
			class="icono-info-contorno"
			d="m1187.9,0c655.53-.74,1187.36,531.33,1188.92,1189.45,1.56,657.24-533.45,1193.46-1189.36,1192.06C530.8,2380.1-.32,1847.38,0,1190.48.32,533.08,531.52.74,1187.9,0Zm1103.22,1191.84c2.41-607-492.08-1103.41-1101.6-1105.87C583.79,83.54,88.1,579.13,85.72,1189.56c-2.37,606.86,492.21,1103.42,1101.56,1105.97,605.64,2.53,1101.42-493.18,1103.85-1103.69Z"
		/>

		
		<path
			class="icono-info-letra"
			d="m1247.57,1651.48c44.77-35.1,78.73-73.31,108.37-115.7,31.25-44.71,50.21-47,91.76-11.09,30.98,26.78,61.7,53.85,92.68,80.62,15.26,13.19,23.44,29.17,17.45,49.27-49.2,165.25-135.1,300.77-304.22,364.72-78.42,29.65-160.35,34.83-240.84,8.52-107.26-35.06-153.65-118.87-169.34-224.54-14.74-99.32,5.89-193.97,38.09-287.08,31.84-92.06,63.58-184.15,95.31-276.24,9.74-28.26,8.87-29.16-21.28-24.48-36.54,5.67-72.96,12.49-109.68,16.57-39.01,4.33-58.7-17.31-53.5-56.07,7.26-54.12,15.33-108.14,21.85-162.35,3.35-27.91,16.86-44.27,44.48-50.2,124.6-26.73,248.67-56.27,373.86-79.79,57.17-10.74,116.64-4.38,174.93-1.9,30.93,1.31,43.86,28.48,34.13,63.65-38.44,138.97-77.22,277.85-115.79,416.79-25.02,90.12-49.91,180.27-74.78,270.43-1.23,4.46-1.72,9.13-3.49,18.9Zm41.6-683.83c-21.37.36-42.51.21-63.83,5.02-85.43,19.27-171.2,37.04-256.77,55.73-72.63,15.87-71.87,16.18-81.29,90.63-2.29,18.11,3.22,19.96,18.18,17.38,39.33-6.78,78.83-12.52,118.17-19.26,61.26-10.49,82.98,15.14,62.24,73.81-48.39,136.86-98.9,273.03-140.68,412.12-22.82,75.97-29.34,153.47-7.42,230.95,19.38,68.51,64.06,109.89,135.87,119.26,102.02,13.32,190.59-15.96,265.81-85.64,48.75-45.16,82.35-100.92,108.9-161.28,21.52-48.94,20.71-48.09-19.23-83.86-15.71-14.07-22.69-9.46-34.08,4.28-18.62,22.47-38.81,43.81-59.85,64.04-24.6,23.64-50.49,46.08-83.21,58.33-50.95,19.07-90.55-6.21-94.07-60.24-1.34-20.54-.05-40.96,5.47-60.95,55.77-201.94,111.49-403.9,167.33-605.81,15.08-54.54,15.26-54.49-41.53-54.5Z"
		/>

		 
		<path
			class="icono-info-letra"
			d="m1058.83,577.22c-.54-125.69,99.95-226.27,226.05-226.24,124.14.03,224.6,100.09,225.3,224.38.71,125.64-100.3,228.25-224.82,228.4-125.25.15-225.98-100.59-226.53-226.55Zm364.41-.95c-.3-77.06-61.79-138.76-139-139.46-75.59-.69-139.44,63.26-139.22,139.45.23,79.1,62.13,140.74,140.82,140.24,77-.49,137.7-62.44,137.4-140.23Z"
		/>
	</svg>
{/snippet}
-->

<Navbar selected="media" />

<div class="contenedor-general">

	<!-- SECCIÓN DE FOTOS -->
	<div class="seccion-mosaico">
		<h2 class="titulo-seccion">Photo Gallery</h2>

		<div class="mosaic">
			<img src={img8} class="foto-clicable" onclick={() => modalFoto = img8} alt="Gallery" />
			<img src={img2} class="foto-clicable" onclick={() => modalFoto = img2} alt="Gallery" />

			<!--<img src={img9} class="foto-clicable" onclick={() => modalFoto = img9} alt="Gallery" />-->
			<!--<img src={img12} class="foto-clicable" onclick={() => modalFoto = img12} alt="Gallery" />>-->
			<!--<img src={img1} class="imagen-uno foto-clicable" onclick={() => modalFoto = img1} alt="Gallery" />-->

			<img src={img7} class="foto-clicable" onclick={() => modalFoto = img7} alt="Gallery" />
			<img src={img10} class="foto-clicable" onclick={() => modalFoto = img10} alt="Gallery" />

			<!-- ¡ACÁ AGREGUÉ TU FOTO NUEVA PARA QUE SE VEA! -->
			<!--<img src={img6} class="foto-clicable" onclick={() => modalFoto = img6} alt="Gallery" />-->
		</div>
	</div>


	<!-- SECCIÓN DE VIDEOS -->
	<div class="seccion-videos">

		<!-- ======================================================== -->
		<!-- 1. TRABAJOS ORIGINALES                                  -->
		<!-- ======================================================== -->

		<h2 class="titulo-seccion">Original Works</h2>
		
		<div class="grilla-noah">

			<div class="tarjeta-video">

				<button
					class="encabezado-video"
					onclick={() => abrirModal('luna')}
					title="Project Info"
				>
					<span class="titulo-video">
						LA LUNA | WALTZ NO. 1
					</span>

					<span class="acciones-info" aria-hidden="true">
						{@render iconoInformacion()}
					</span>
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

					<button
						class="video fachada"
						style="background-image: url('https://img.youtube.com/vi/LOQVj4U3RDA/maxresdefault.jpg');"
						onclick={() => reproducirSolo('luna')}
					>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path
								class="fondo-boton"
								d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
								fill="#212121"
								fill-opacity="0.8"
							></path>

							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>

				{/if}

			</div>
		</div>


		<!-- LÍNEA SEPARADORA -->
		<hr class="linea-separadora">


		<!-- ======================================================== -->
		<!-- 2. SPEC WORK                                            -->
		<!-- ======================================================== -->

		<div class="grilla-noah">


			<!-- HOWL -->
			<div class="tarjeta-video">

				<button
					class="encabezado-video"
					onclick={() => abrirModal('howl')}
					title="Project Info"
				>
					<span class="titulo-video">
						HOWL’S MOVING CASTLE | LIVE ORCHESTRA
					</span>

					<span class="acciones-info" aria-hidden="true">
						{@render iconoInformacion()}
					</span>
				</button>


				{#if ytHowl}

					<video class="video" controls autoplay>
						<source
							src="/MEDIA/HowlsMovingCastle/video-howl.mp4"
							type="video/mp4"
						>
					</video>

				{:else}

					<button
						class="video fachada"
						style="background-image: url('/MEDIA/HowlsMovingCastle/portada-howl.jpg');"
						onclick={() => reproducirSolo('howl')}
					>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path
								class="fondo-boton"
								d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
								fill="#212121"
								fill-opacity="0.8"
							></path>

							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>

				{/if}

			</div>


			<!-- DRAGONS -->
			<div class="tarjeta-video">

				<button
					class="encabezado-video"
					onclick={() => abrirModal('yt1')}
					title="Project Info"
				>
					<span class="titulo-video">
						DRAGONS | SCORE & SOUND REDESIGN
					</span>

					<span class="acciones-info" aria-hidden="true">
						{@render iconoInformacion()}
					</span>
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

					<button
						class="video fachada"
						style="background-image: url('https://img.youtube.com/vi/jIgz_IhCmEY/maxresdefault.jpg');"
						onclick={() => reproducirSolo('yt1')}
					>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path
								class="fondo-boton"
								d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
								fill="#212121"
								fill-opacity="0.8"
							></path>

							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>

				{/if}

			</div>


			<!-- POCAHONTAS -->
			<div class="tarjeta-video">

				<button
					class="encabezado-video"
					onclick={() => abrirModal('yt2')}
					title="Project Info"
				>
					<span class="titulo-video">
						POCAHONTAS | SCORE & SOUND REDESIGN
					</span>

					<span class="acciones-info" aria-hidden="true">
						{@render iconoInformacion()}
					</span>
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

					<button
						class="video fachada"
						style="background-image: url('https://img.youtube.com/vi/nps4-HFdQBc/maxresdefault.jpg');"
						onclick={() => reproducirSolo('yt2')}
					>
						<svg viewBox="0 0 68 48" class="boton-youtube">
							<path
								class="fondo-boton"
								d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
								fill="#212121"
								fill-opacity="0.8"
							></path>

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


<!-- ======================================================== -->
<!-- VENTANA FLOTANTE PARA VER FOTOS AMPLIADAS                -->
<!-- ======================================================== -->

{#if modalFoto}

	<div class="modal-fondo" onclick={cerrarModales}>

		<div
			class="modal-tarjeta-foto"
			onclick={(e) => e.stopPropagation()}
		>
			<button
				class="btn-cerrar-foto"
				onclick={cerrarModales}
			>
				✕
			</button>

			<img
				src={modalFoto}
				class="foto-ampliada"
				alt="Ampliación"
			/>
		</div>

	</div>

{/if}


<!-- ======================================================== -->
<!-- VENTANA FLOTANTE 4: LA LUNA - WALTZ NO. 1               -->
<!-- ======================================================== -->

{#if modalLuna}

	<div class="modal-fondo" onclick={cerrarModales}>

		<div
			class="modal-tarjeta"
			onclick={(e) => e.stopPropagation()}
		>

			<button
				class="modal-cerrar"
				onclick={cerrarModales}
			>
				✕
			</button>

			<h3>LA LUNA | WALTZ NO. 1</h3>
			
			<iframe
				class="modal-media"
				src="https://www.youtube.com/embed/ythCQF-ag_0"
				title="La Luna - Waltz No. 1"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>

			<p>This work was premiered at the UCA Auditorium as part of a live orchestral performance, giving me the opportunity to take an original piece through the complete process from composition and orchestration to score preparation, rehearsal and performance.

Preparing the music for a real ensemble required producing a complete conductor’s score and individual instrumental parts, working within fixed deadlines and then hearing those decisions translated by the orchestra in rehearsal. Being able to communicate directly with the conductor and musicians gave me a much clearer understanding of how orchestration behaves beyond the mockup.

That experience had a lasting influence on the way I write today. Decisions involving balance, register, articulation, dynamics and instrumental roles are no longer purely theoretical for me — they are informed by having heard my own orchestrations performed and interpreted by a live ensemble.</p>

		</div>

	</div>

{/if}


<!-- ======================================================== -->
<!-- VENTANA FLOTANTE 1: HOWL                                 -->
<!-- ======================================================== -->

{#if modalHowl}

	<div class="modal-fondo" onclick={cerrarModales}>

		<div
			class="modal-tarjeta"
			onclick={(e) => e.stopPropagation()}
		>

			<button
				class="modal-cerrar"
				onclick={cerrarModales}
			>
				✕
			</button>

			<h3>HOWL’S MOVING CASTLE | LIVE ORCHESTRA</h3>
			
			<img
				src={img11}
				class="modal-media"
				alt="Howl's Moving Castle Live Orchestra"
			/>

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

			<p>This project combines my orchestral work with a scene from Howl’s Moving Castle, presenting the piece as a scoring and synchronization exercise for animation. The music was performed live at the UCA Auditorium in 2023, with a full conductor’s score and individual instrumental parts prepared for the ensemble.

The project required me to think simultaneously as a composer and orchestrator: shaping the musical arc around the picture while ensuring that every instrumental role remained practical and meaningful in live performance.

The score is clearly influenced by Joe Hisaishi’s approach to orchestral storytelling, particularly his use of the waltz, while also drawing subtly from other waltz traditions I had studied. Rather than following the structural changes of the original soundtrack, I chose to maintain a continuous musical arc throughout the sequence, allowing the scene to develop as a single uninterrupted gesture.

Working through composition, orchestration, synchronization, score preparation and live performance made this project an important part of the way I approach music for animation today.</p>

		</div>

	</div>

{/if}


<!-- ======================================================== -->
<!-- VENTANA FLOTANTE 2: YOUTUBE 1 (DRAGONS)                 -->
<!-- ======================================================== -->

{#if modalYt1}

	<div class="modal-fondo" onclick={cerrarModales}>

		<div
			class="modal-tarjeta"
			onclick={(e) => e.stopPropagation()}
		>

			<button
				class="modal-cerrar"
				onclick={cerrarModales}
			>
				✕
			</button>

			<h3>ANIMATION SCORE PROJECT</h3>
			
			<img
				src={img3}
				class="modal-media"
				alt="Dragons Score Project"
			/>

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

			<p>This project is a complete rescore and sound redesign of Blizzard’s Dragons cinematic. With the exception of the original dialogue, I rebuilt the audio experience from the ground up with original music, redesigned sound effects and live instrumental recordings.

For the score, I developed contrasting musical identities around the two central characters, combining orchestral writing with elements inspired by Japanese musical aesthetics and modern hybrid production. The music was written around a highly variable tempo map, allowing the score to follow the pacing, action and dramatic structure of the cinematic while maintaining a coherent musical arc.

I developed the orchestration and mockup before recording live violins, cellos and quena, combining those performances with the larger virtual ensemble to bring an organic layer into the production.

Alongside the score, I rebuilt the surrounding soundscape using edited game assets, custom-designed elements and additional sound libraries, carefully balancing music, dialogue and effects throughout the sequence.

The project brings together the different areas of my workflow — composition, orchestration, mockup production, synchronization, live recording, sound design, editing and mixing — into a complete audiovisual production.

Special thanks to Gonzalo Naessens for his input on selected artistic decisions during the mix.</p>

		</div>

	</div>

{/if}


<!-- ======================================================== -->
<!-- VENTANA FLOTANTE 3: YOUTUBE 2 (POCAHONTAS)              -->
<!-- ======================================================== -->

{#if modalYt2}

	<div class="modal-fondo" onclick={cerrarModales}>

		<div
			class="modal-tarjeta"
			onclick={(e) => e.stopPropagation()}
		>

			<button
				class="modal-cerrar"
				onclick={cerrarModales}
			>
				✕
			</button>

			<h3>CINEMATIC SOUND DESIGN</h3>
			
			<img
				src={img5}
				class="modal-media"
				alt="Pocahontas Sound Design"
			/>

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

			<p>This project is an original rescore of the first meeting between Pocahontas and John Smith, created in 2024 as an exercise in character-driven orchestral storytelling.

The central challenge was deciding how to interpret a moment that already carries a very strong emotional identity. While the original score approaches the scene with greater intimacy, I chose to emphasize the sense of discovery and immediate emotional connection between the characters, giving the first encounter a broader romantic arc.

The composition draws from orchestral and folk-inspired influences, particularly Dvořák’s Symphony No. 9 and elements of Joe Hisaishi’s thematic writing. These references served as a starting point for exploring color, melody and orchestral texture while developing a musical identity specific to my interpretation of the scene.

I handled the composition, orchestration, mockup production, synchronization and sound design, later revisiting the project to refine its editing and final production for the portfolio.

The result represents a more intimate side of my orchestral writing and shows how I approach an existing dramatic scene by first identifying its emotional function and then building the music around that interpretation.</p>

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


	.seccion-mosaico {
		order: 1;
	}


	.seccion-videos {
		order: 2;
		margin-top: 3rem;
	}


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


	/* ======================================================== */
	/* FOOTER                                                  */
	/* ======================================================== */

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

		/* MINIATURAS PAREJAS: todas se muestran en proporción 4:3.
		   La imagen original NO se recorta: object-fit solo oculta el sobrante
		   dentro de la grilla. Al hacer click, el modal sigue mostrando la foto completa. */

		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center;

		border-radius: 2px;
		display: block;
	}


	/* ======================================================== */
	/* EFECTO HOVER PARA LAS FOTOS                             */
	/* ======================================================== */

	.foto-clicable {
		cursor: pointer;

		transition:
			transform 0.3s ease,
			filter 0.3s ease;
	}


	.foto-clicable:hover {
		transform: scale(1.03);
		filter: brightness(1.15);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}


	/* ======================================================== */
	/* GRILLA A 2 COLUMNAS ESTILO NOAH GLADSTONE PARA VIDEOS   */
	/* ======================================================== */

	.grilla-noah {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem 2rem;
	}


	.tarjeta-video {
		display: flex;
		flex-direction: column;
	}


	/* ======================================================== */
	/* TÍTULO + ÍCONO DE INFORMACIÓN                           */
	/* ======================================================== */

	.encabezado-video {
		background: none;
		border: none;

		display: flex;
		justify-content: center;
		align-items: center;

		gap: 0.5rem;

		margin-bottom: 1rem;

		cursor: pointer;
		padding: 0;
	}


	.titulo-video {
		color: rgb(210, 195, 130);

		font-family: 'Raleway', sans-serif;

		font-size: 0.85rem;
		letter-spacing: 0.12em;
		font-weight: 500;

		text-align: center;

		transition: color 0.2s ease;
	}


	/* ======================================================== */
	/* GRUPO DEL ÍCONO DE INFORMACIÓN                          */
	/* ======================================================== */

	.acciones-info {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}


	/* ======================================================== */
	/* ÍCONO SVG DE INFORMACIÓN                                */
	/* ======================================================== */

	.icono-info-svg {
		display: block;

		/* ==================================================== */
		/* TAMAÑO DEL ÍCONO EN PC                               */
		/* Si lo querés más grande, aumentá estos dos valores.  */
		/* ==================================================== */

		width: 1.65rem;
		height: 1.65rem;

		flex-shrink: 0;

		transform-origin: center;

		transition:
			transform 0.28s ease,
			filter 0.28s ease;
	}


	/* ======================================================== */
	/* COLORES DEL ÍCONO                                       */
	/* ======================================================== */

	/* Contorno + relleno celeste */
	.icono-info-relleno,
	.icono-info-contorno {
		fill: rgba(101, 77, 167, 0.829);

		transition: fill 0.25s ease;
	}


	/* Únicamente la "i" queda amarilla */
	.icono-info-letra {
		fill: rgb(255, 255, 255);

		transition: fill 0.25s ease;
	}


	/* ======================================================== */
	/* HOVER DEL TÍTULO                                        */
	/* ======================================================== */

	.encabezado-video:hover .titulo-video {
		color: white;
	}


	/* ======================================================== */
	/* ANIMACIÓN DEL ÍCONO DE INFORMACIÓN                      */
	/* ======================================================== */

	.encabezado-video:hover .icono-info-svg,
	.encabezado-video:focus-visible .icono-info-svg {
		transform:
			translateY(-5px)
			scale(1.15)
			rotate(10deg);

		filter:
			drop-shadow(0 0 5px rgba(100, 205, 255, 0.45))
			drop-shadow(0 0 10px rgba(100, 205, 255, 0.2));
	}


	/* El celeste se ilumina un poquito con el hover */
	.encabezado-video:hover .icono-info-relleno,
	.encabezado-video:hover .icono-info-contorno,
	.encabezado-video:focus-visible .icono-info-relleno,
	.encabezado-video:focus-visible .icono-info-contorno {
		fill: rgba(125, 218, 255, 0.767);
	}


	/* Pequeña respuesta cuando hacés click/tap */
	.encabezado-video:active .icono-info-svg {
		transform: scale(0.94);
	}


	/* ======================================================== */
	/* VIDEOS                                                  */
	/* ======================================================== */

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
		transition:
			fill 0.1s cubic-bezier(0.4, 0, 1, 1),
			fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
	}


	.fachada:hover .fondo-boton {
		fill: #ff0000;
		fill-opacity: 1;
	}


	/* ======================================================== */
	/* ESTILOS DE LA VENTANA FLOTANTE GENERAL                  */
	/* ======================================================== */

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


	/* ======================================================== */
	/* ESTILOS ESPECÍFICOS PARA LA FOTO AMPLIADA               */
	/* ======================================================== */

	.modal-tarjeta-foto {
		position: relative;
		display: inline-block;
	}


	.foto-ampliada {
		max-width: 90vw;
		max-height: 85vh;

		border-radius: 4px;

		object-fit: contain;

		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);

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


	/* ======================================================== */
	/* BOTÓN DE CERRAR MODALES                                 */
	/* ======================================================== */

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


	/* ======================================================== */
	/* CONTENIDO DE LOS MODALES                                */
	/* ======================================================== */

	.modal-tarjeta h3 {
		margin-top: 0;
		margin-bottom: 1rem;

		font-size: 1.1rem;
		letter-spacing: 0.1em;
		font-weight: 500;

		color: rgb(210, 195, 130);
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
	/* 2. MEDIA QUERIES (ADAPTACIÓN MÓVIL)                  */
	/* ---------------------------------------------------- */


	/* ======================================================== */
	/* MONITORES MEDIANOS / LAPTOPS                            */
	/* ======================================================== */

	@media (max-width: 1400px) {

		.mosaic {
			grid-template-columns: repeat(3, 1fr);
		}

	}


	/* ======================================================== */
	/* TABLETS Y CELULARES                                     */
	/* ======================================================== */

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


	/* ======================================================== */
	/* CELULARES CHICOS                                        */
	/* ======================================================== */

	@media (max-width: 768px) {

		/* ==================================================== */
		/* INFO DE LOS PROYECTOS EN TELÉFONO                   */
		/* ==================================================== */

		/* El encabezado ocupa exactamente el ancho del video.
		   El padding simétrico mantiene el título centrado
		   aunque el icono esté a la derecha. */

		.encabezado-video {
			position: relative;

			width: 100%;

			box-sizing: border-box;

			padding-left: 2.6rem;
			padding-right: 2.6rem;
		}


		/* El icono queda completamente al extremo derecho
		   del ancho del video. */

		.acciones-info {
			position: absolute;

			right: 0;
			top: 50%;

			transform: translateY(-50%);
		}


		/* ==================================================== */
		/* TAMAÑO DEL ÍCONO EN TELÉFONO                        */
		/* Si querés modificarlo, cambiá estos dos valores.    */
		/* ==================================================== */

		.icono-info-svg {
			width: 1.85rem;
			height: 1.85rem;

			/* Pulso muy suave para indicar que se puede tocar */
			animation: info-respira 2.8s ease-in-out infinite;
		}


		.mosaic {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

	}


	/* ======================================================== */
	/* ANIMACIÓN SUAVE DEL ÍCONO EN TELÉFONO                   */
	/* ======================================================== */

	@keyframes info-respira {

		0%,
		100% {
			transform: scale(1);

			filter:
				drop-shadow(0 0 0 rgba(100, 205, 255, 0));
		}

		50% {
			transform: scale(1.06);

			filter:
				drop-shadow(0 0 6px rgba(100, 205, 255, 0.28));
		}

	}


	/* ======================================================== */
	/* ACCESIBILIDAD: MENOS MOVIMIENTO                         */
	/* ======================================================== */

	@media (prefers-reduced-motion: reduce) {

		.icono-info-svg {
			animation: none;
			transition: none;
		}

	}

</style>