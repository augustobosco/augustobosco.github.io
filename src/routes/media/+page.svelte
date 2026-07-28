<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import img1 from '$lib/assets/media/1.png';
	import img2 from '$lib/assets/media/2.png';
	import img3 from '$lib/assets/media/3.png';
	import img4 from '$lib/assets/media/4.png';
</script>

<Navbar selected="media" />

<!-- Envolvemos todo en un gran contenedor para poder reordenar las piezas -->
<div class="contenedor-general">

	<!-- ESTA IMAGEN 1 SUELTA: Solo se enciende en celulares (Turno 1) -->
	<img src={img1} class="img1-celular" />

	<!-- EL MOSAICO: En compu va primero. En celu va último (Turno 3) -->
	<div class="mosaic">
		<!-- Esta es la imagen 1 normal. Se apaga en celulares para no repetirse -->
		<img src={img1} class="img1-compu" />
		<img src={img2} />
		<img src={img3} />
		<img src={img4} />
	</div>

	<!-- LOS VIDEOS: En compu van al final. En celu van al medio (Turno 2) -->
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
		></iframe>

		<iframe 
			class="video"
			src="https://www.youtube.com/embed/nps4-HFdQBc?si=RQRn5OFdsZl98MZl" 
			title="YouTube video player" 
			frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen>
		</iframe>
	</div>

</div>

<style>
	/* --- REGLAS DE ESTRUCTURA Y ORDEN EN COMPUTADORA --- */
	.contenedor-general {
		display: flex;
		flex-direction: column;
	}

	.mosaic { order: 1; }
	.contenedor-videos { order: 2; }

	.img1-celular { display: none; } /* Apagamos la imagen suelta en la compu */
	.img1-compu { display: block; }  /* Mantenemos encendida la del mosaico */


	/* --- TUS ESTILOS DE DISEÑO (Sin modificar) --- */
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


	/* --- EL ORDEN EN CELULARES --- */
	@media (max-width: 768px) {
		
		/* 1. La imagen 1 suelta salta arriba de todo */
		.img1-celular {
			display: block; 
			order: 1;       
			width: 85%;     
			margin: 2rem auto 0 auto; 
			object-fit: cover;
		}

		/* 2. Los videos saltan al medio */
		.contenedor-videos {
			order: 2;       
		}

		/* 3. El resto del mosaico se va abajo de los videos */
		.mosaic {
			order: 3;       
			margin-top: 0;
		}

		/* Apagamos la imagen 1 de adentro del mosaico */
		.img1-compu {
			display: none;  
		}

		.video {
			width: 85%;
		}

		.mosaic img {
			height: auto;
			width: 85%; /* <- Acá faltaba el % y te lo agregué */
		}
	}
</style>