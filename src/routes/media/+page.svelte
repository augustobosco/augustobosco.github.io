<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';

	let v1 = $state(false);
	let yt1 = $state(false);
	let yt2 = $state(false);
</script>

<Navbar selected="media" />

<div class="contenedor-general">

	<div class="mosaic">
		<img src={img1} class="imagen-uno" />
		<img src={img2} />
		<img src={img3} />
		<img src={img4} />
	</div>

	<div class="contenedor-videos">
		
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

<style>
	.contenedor-general {
		display: flex;
		flex-direction: column;
	}

	.mosaic { order: 1; }
	.contenedor-videos { order: 2; }

	.mosaic {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2em;
		margin: 2em;
	}

	.mosaic img {
		height: 20em;
		object-fit: cover;
	}

	.video {
		display: block;
		margin: 2rem auto;
		width: 60%;
		aspect-ratio: 16 / 9;
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

	@media (max-width: 1024px) {
		
		.contenedor-videos {
			order: 1;       
		}

		.mosaic {
			order: 2;       
		}

		.imagen-uno {
			display: none;
		}

		.video {
			width: 85%;
		}

		.mosaic img {
			height: auto;
			width: 85%; 
		}
	}
</style>