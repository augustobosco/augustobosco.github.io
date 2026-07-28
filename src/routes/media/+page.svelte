<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';

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
		<video class="video" controls preload="metadata" poster="/MEDIA/HowlsMovingCastle/portada-howl.jpg">
		  <source src="/MEDIA/HowlsMovingCastle/video-howl.mp4" type="video/mp4">
		</video>

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
				<div class="boton-play">▶</div>
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
				<div class="boton-play">▶</div>
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

	.boton-play {
		font-size: 3rem;
		color: white;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 50%;
		width: 80px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 5px;
		transition: background-color 0.2s, transform 0.2s;
	}

	.fachada:hover .boton-play {
		background-color: red;
		transform: scale(1.1);
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