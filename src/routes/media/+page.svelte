<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';
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

		<iframe
			class="video"
			src="https://www.youtube.com/embed/jIgz_IhCmEY?si=eifrKg2jNKpt1p4P"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			loading="lazy"
		></iframe>

		<iframe 
			class="video"
			src="https://www.youtube.com/embed/nps4-HFdQBc?si=RQRn5OFdsZl98MZl" 
			title="YouTube video player" 
			frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen
			loading="lazy"
		</iframe>
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

	@media (max-width: 768px) {
		
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