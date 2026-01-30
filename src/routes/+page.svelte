<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import HomeImage from '$lib/assets/homepage.jpg';

	let content: HTMLElement;

	function scroll() {
		content.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Navbar selected="" />

<section class="parallax" style="background-image: url({HomeImage});">
	<button onclick={scroll} class="hook" title="Know more">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<polyline points="19 12 12 19 5 12"></polyline>
		</svg>
	</button>
</section>

<section class="content" bind:this={content}>
	<p class="summary">
		Augusto Bosco is a composer, orchestrator, and music producer specializing in music for film,
		animation, and video games. With a Bachelor’s Degree in Film Scoring from the Pontifical
		Catholic University of Argentina (UCA), his work bridges classical training with modern
		production techniques, blending orchestral writing, sound design, and advanced mockup creation.
		Having scored and designed sound for animated shorts and other visual projects, he combines
		musical storytelling with technical expertise to deliver scores that are both emotionally
		impactful and production-ready. Fluent in Spanish and English and currently studying Japanese,
		Augusto brings an international perspective to his collaborations, working with directors and
		studios to create original music and immersive soundscapes for visual media.
	</p>
	<iframe
		title="Soundcloud"
		width="100%"
		height="400"
		scrolling="no"
		frameborder="no"
		allow=""
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2182925621%3Fsecret_token%3Ds-QT5rYje2bwR&color=%2313101e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	></iframe>
	<!-- <div
		style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
	>
		<a
			href="https://soundcloud.com/augustobosco"
			title="Augusto Bosco"
			target="_blank"
			style="color: #cccccc; text-decoration: none;">Augusto Bosco</a
		>
		·
		<a
			href="https://soundcloud.com/augustobosco/sets/fire-blossom"
			title="Fire Blossom"
			target="_blank"
			style="color: #cccccc; text-decoration: none;">Fire Blossom</a
		>
	</div> -->
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	html,
	body {
		overflow-x: hidden;
	}

	.summary {
		color: white;
		font-family: 'Raleway';
		text-align: justify;
		margin-bottom: 2rem;
	}

	.parallax {
		position: relative;
		padding-top: 2rem;
		height: 60vh;
		background-attachment: scroll;
		background-position: calc(50% + 0em) 50%;
		background-repeat: no-repeat;
		background-size: cover;
		/* animation: parallax linear both;
		animation-timeline: scroll();
		animation-range: 0% 100%; */
	}
	.parallax::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image: url('https://grainy-gradients.vercel.app/noise.svg');
		background-repeat: repeat;
		background-size: 400px;
		opacity: 0.1;
		background-attachment: scroll;
		background-position: center;
		/* animation: parallax linear both;
		animation-timeline: scroll();
		animation-range: 0% 100%; */
	}

	.hook {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background: none;
		border: none;
		transition:
			transform 0.25s,
			background 0.25s;
		animation: fade linear both;
		animation-timeline: scroll();
		animation-range: 0% 100%;
	}
	@media (hover: hover) {
		.hook:hover {
			cursor: pointer;
			transform: translate(-50%, 1rem);
			background-color: rgb(46, 41, 82);
		}
	}
	.hook svg {
		width: 50%;
		height: 50%;
		color: white;
	}

	.content {
		position: relative;
		background: rgb(35, 30, 67);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 2rem 10vw 3rem 10vw;
	}
	@media (max-width: 768px) {
		.content {
			padding: 2rem 5vw 3rem 5vw;
		}
		.navbar {
			padding: 0.3rem 0 0.5rem 0;
		}
		.tabs {
			padding-top: 0.25rem;
			font-size: 1.2rem;
		}
	}

	@keyframes parallax {
		from {
			background-position: center 0;
		}
		to {
			background-position: center -200px;
		}
	}

	@keyframes fade {
		0% {
			opacity: 1;
			visibility: visible;
		}
		50% {
			opacity: 0;
			visibility: hidden;
		}
		100% {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
