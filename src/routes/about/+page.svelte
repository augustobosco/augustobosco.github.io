<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import SoundWave from '$lib/assets/sound-wave-svgrepo-com.svg';
	import MusicFile from '$lib/assets/music-file-paper-svgrepo-com.svg';
	import Film from '$lib/assets/film-svgrepo-com.svg';

	import img1 from '$lib/assets/about/1.png';
	import img2 from '$lib/assets/about/2.png';
	import img3 from '$lib/assets/about/3.jpg';
	import img4 from '$lib/assets/about/4.png';
</script>

<Navbar selected="about" />

<section class="content">
	<div class="text">
	<p>
	I’m a composer, orchestrator and music producer focused on music for animation, film and
	interactive media. I hold a Bachelor’s Degree in Cinematic Music from the Pontifical Catholic
	University of Argentina (UCA), where I studied composition, orchestration, harmony, film
	scoring and music production.
</p>

<p>
	I had the opportunity to compose and orchestrate original works that were rehearsed and performed
	by live ensembles. This gave me practical experience taking music beyond the mockup: preparing 
	conductor scores and instrumental parts, attending rehearsals, communicating with conductors
	and performers, and hearing firsthand how musical decisions translate from the studio into
	live performance.
</p>

<p>
	That experience became an important part of the way I approach scoring today. My background
	allows me to move through the complete musical process: Composition → Orchestration → Mockup
	Production → Score Preparation → Live Performance → Audio Post-Production.
</p>

<p>
My approach combines a strong classical foundation with modern music production. I adapt to the 
identity and creative direction of each project, whether developing a score from its initial 
musical concept through orchestration and production, or integrating into an existing music team 
to provide additional music, arrangements, orchestration, mockups, score preparation and other 
production support. My work is centered around musical storytelling. I’m particularly interested 
in animation and story-driven projects where music can contribute directly to character, 
atmosphere, pacing and worldbuilding. Stylistically, my work ranges from traditional orchestral 
writing to modern hybrid production.
</p>

<p>
	My primary tools include Nuendo, Pro Tools, Ableton Live and Dorico, alongside professional
	production tools and virtual instruments. I also have experience with interactive-audio
	workflows using Wwise and FMOD.
</p>

<p>
	I speak Spanish and English and I’m currently studying Japanese (JLPT N4). Based in Argentina, I’m
	available to work remotely with composers, directors, producers and creative teams
	internationally.
</p>

		<h1 class="services">SERVICES</h1>

		<div class="service">
			<img src={Film} alt="film" class="svg" />
			<div class="service-text">
				<p class="service-title">Music Composition & Scoring</p>
				<p class="service-content">
					Original orchestral and hybrid music developed around the narrative, characters and
					visual identity of each project, from initial concept through final production and delivery.
				</p>
			</div>
		</div>

		<div class="service">
			<img src={MusicFile} alt="music file" class="svg" />
			<div class="service-text">
				<p class="service-title">Orchestration & Mockups</p>
				<p class="service-content">
					Orchestration, arrangement, score preparation and detailed mockups for live or virtual
					production, working either from my own compositions or material provided by another composer.
				</p>
			</div>
		</div>

		<div class="service">
			<img src={SoundWave} alt="sound wave" class="svg" />
			<div class="service-text">
				<p class="service-title">Music Production & Additional Support</p>
				<p class="service-content">
					Additional music, creative and technical feedback, editing, stem preparation and production 
					support for composers and creative teams, available on a per-cue, episode or complete-project basis.
				</p>
			</div>
		</div>
	</div>

	<div class="pics">
		<img src={img1} alt="pic" />
		<img src={img2} alt="pic" />
		<img src={img3} alt="pic" />
		<img src={img4} alt="pic" />
	</div>
</section>

<!-- FOOTER -->
<div class="footer">
	© 2026 Augusto Bosco <br>
	Website by Zokalyx
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	:root {
		--radius: 1rem;
	}

	.services {
		font-size: 2rem;
		text-align: center;
		margin-top: 1rem;
	}

	.svg {
		transform: scale(0.5, 0.5);
	}

	.service-text {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
	}

	.service-title {
		text-align: center;
		font-size: 1.8rem;
	}

	.service-content {
		line-height: 1.2rem;
		color: rgb(198, 198, 198);
	}

	.service {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1rem;
		background-color: rgb(33, 34, 55);
		padding-right: 3rem;
		align-items: center;
		border-radius: var(--radius);
	}

	.pics {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.pics img {
		width: 100%;
		height: auto; /* Mantiene la proporción real, sin zoom ni recortes */
		border-radius: var(--radius);
		display: block;
	}

	.text {
		text-align: justify;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: white;
	}

	.content {
		width: 80%;
		/* ======================================================== */
		/* ESTE ES EL LÍMITE QUE EVITA QUE SE ROMPA EN PANTALLAS 2K */
		max-width: 1200px; 
		/* ======================================================== */
		margin: 2rem auto 2rem auto;
		display: grid;
		grid-template-columns: 6fr 2fr;
		gap: 3rem;
		font-family: 'Raleway';
		align-items: start; /* Evita que la columna de fotos se estire */
	}

	/* ESTILOS DEL FOOTER */
	.footer {
		margin-top: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		line-height: 1.8;
		font-family: 'Raleway', sans-serif;
	}

	@media (max-width: 768px) {
		.content {
			grid-template-columns: 1fr;
			margin: 1.5rem auto 1.5rem auto;
			width: 85%;
		}

		.service {
			grid-template-columns: 0fr 1fr;
			padding-right: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}

		.service-title {
			font-size: 1.25rem;
		}

		.text {
			text-align: left;
		}
	}
</style>