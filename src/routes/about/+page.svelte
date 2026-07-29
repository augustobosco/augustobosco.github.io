<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import SoundWave from '$lib/assets/sound-wave-svgrepo-com.svg';
	import MusicFile from '$lib/assets/music-file-paper-svgrepo-com.svg';
	import Film from '$lib/assets/film-svgrepo-com.svg';

	import img1 from '$lib/assets/about/1.png';
	import img2 from '$lib/assets/about/2.png';
	import img4 from '$lib/assets/about/4.png';
</script>

<Navbar selected="about" />

<section class="content">
	<div class="text">
		<p>
			Augusto Bosco is a composer, orchestrator and music producer focused on scoring for film,
			animation and videogame companies. He holds a degree in Cinematic Music from the Pontifical
			Catholic University of Argentina (UCA), one of the region’s leading institutions in music
			education. During his studies, his works were performed in concert by the UCA Orchestra,
			showcasing his ability to deliver professional orchestral scores for live performance.
		</p>
		<p>
			His musical background began at a very young age with studies in piano, cello, violin, and
			guitar, later expanded through formal training in composition and orchestration, which leads
			to a strong classical background combined with his current passion in music technology, he is
			adept at all phases of the music making process including composition, orchestration, mockup
			production and score preparation along with proficiency in leading DAWs, notation software and
			virtual instruments. This varied base enables him to tackle a project from numerous points of
			view, including the artist’s vantage point as well that of technical demands in today’s
			production.
		</p>
		<p>
			Augusto is interested in writing music to support visual storytelling across all forms of
			media: combining traditional orchestral techniques with modern production. He works with
			industry-standard digital audio workstations (Nuendo, Ableton Live, Pro Tools), notation
			software (Dorico, Finale) and top-notch virtual instrument libraries to create realistic
			orchestral mockups as well as efficient scoring templates that are reliable enough to support
			complex multimedia projects, always trying to be a versatile collaborator for both directors
			and studios.
		</p>
		<p>
			He specializes in original composition, orchestration for large ensembles, mockup production,
			and score preparation. His professional interests are as wide-reaching in scope, encompassing
			film, animation and video games, but he loves the interactive and animated mediums above all
			else where music plays a key role in immersive storytelling.
		</p>
		<p>
			Fluent in Spanish and English, and with basic Japanese skills, he had built in power for
			collaboration in various cultural backgrounds including international ones. As he further
			cements his reputation in the music industry, Augusto remains dedicated to creating full
			end-to-end professional music offerings for creative teams worldwide.
		</p>
		<h1 class="services">SERVICES</h1>
		<div class="service">
			<img src={Film} alt="film" class="svg" />
			<div class="service-text">
				<p class="service-title">Music Composition & Scoring</p>
				<p class="service-content">
					Original music tailored to each project, from orchestral arrangements to modern hybrid
					scores, always designed to enhance the storytelling and emotional depth of film,
					animation, and video games.
				</p>
			</div>
		</div>
		<div class="service">
			<img src={MusicFile} alt="music file" class="svg" />
			<div class="service-text">
				<p class="service-title">Orchestration & Mockups</p>
				<p class="service-content">
					Detailed orchestration and high-quality mockups that blend live instruments with virtual
					libraries providing directors and producers with realistic previews and production-ready
					materials.
				</p>
			</div>
		</div>
		<div class="service">
			<img src={SoundWave} alt="sound wave" class="svg" />
			<div class="service-text">
				<p class="service-title">Sound Design & Music Production</p>
				<p class="service-content">
					Unique sound palettes crafted to match the aesthetic of each project, combined with
					comprehensive production support including arranging, editing, and preparing final
					materials for synchronization and seamless integration into visual media.
				</p>
			</div>
		</div>
	</div>
	<div class="pics">
		<img src={img1} alt="pic" />
		<img src={img2} alt="pic" />
		<img src={img4} alt="pic" />
	</div>
</section>

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
		margin: 2rem auto 2rem auto;
		display: grid;
		grid-template-columns: 6fr 2fr;
		gap: 3rem;
		font-family: 'Raleway';
		align-items: start; /* ESTO ES LA MAGIA: Evita que la columna de fotos se estire */
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
