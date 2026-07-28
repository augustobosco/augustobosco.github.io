<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';
</script>

<Navbar selected="media" />

<div class="mosaic">
	<img src={img1} />
	<img src={img2} />
	<img src={img3} />
	<img src={img4} />
</div>

<iframe 
	class="video"
	src="https://www.youtube.com/embed/_JwYA9JxTQA?si=6bqKwoyQOS-iQN9g" 
	title="YouTube video player" 
	frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
	referrerpolicy="strict-origin-when-cross-origin" 
	allowfullscreen
></iframe>

<iframe
	class="video"
	src="https://www.youtube.com/embed/mfM6DWBora0?si=-aJxivU5ChTpKyvT"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<!--<iframe
	class="video"
	src="https://drive.google.com/file/d/13WsEwhVW-fhDSmlbxjtv84U1vhSGm_E0/preview"
	title="Drive video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<iframe
	class="video"
	src="https://drive.google.com/file/d/1NPvBXMPs1KRcV0Yrksludym6WrnWwlcA/preview"
	title="Drive video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<iframe
	class="video"
	src="https://drive.google.com/file/d/115S64kYdddtMsrcx7E2Ng6WOdodUGQcU/preview"
	title="Drive video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe> -->

<style>
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
		margin: 2rem auto;
		width: 60%;
		aspect-ratio: 16 / 9;
	}

	@media (max-width: 768px) {
		.video {
			width: 85%;
		}

		.mosaic img {
			height: auto;
			width: 85;
		}
	}
</style>
