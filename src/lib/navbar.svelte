<script>
	let { selected } = $props();
</script>

<section class="navbar">
	<a href="/" class="title">AUGUSTO BOSCO</a>
	<h1 class="subtitle">COMPOSER & ORCHESTRATOR FOR ANIMATION</h1>
	<div class="tabs">
		<a href="/about" class="tab" class:active={selected === 'about'}>ABOUT</a>
		<a href="/contact" class="tab" class:active={selected === 'contact'}>CONTACT</a>
		<a href="/media" class="tab" class:active={selected === 'media'}>MEDIA</a>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	.navbar {
		font-family: 'Raleway';
		top: 0;
		z-index: 100;
		background-color: rgb(35, 30, 67);
		color: white;
		padding-bottom: 0.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tabs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2em;
	}

	.tab {
		text-align: center;
		letter-spacing: 0.1em;
		color: grey;
		transition: color 0.25s;
	}
	
	.tab:hover {
		cursor: pointer;
		color: white;
	}

	.active {
		color: white;
	}

	.title {
		transform: translateX(0.2rem);
		font-size: 2rem;
		letter-spacing: 0.2em;
		color: rgb(153, 135, 255);
		mix-blend-mode: lighten;
		text-align: center;
		margin-bottom: -0.5rem;
		white-space: nowrap;
		transition:
			letter-spacing 0.25s,
			color 0.25s;
	}

	.title:hover, .title:active {
		cursor: pointer;
		letter-spacing: 0.22em;
		color: rgb(188, 180, 232);
	}

	.subtitle {
		font-size: clamp(1rem, 6vw, 0.8rem);
		color: rgb(132, 124, 179);
		letter-spacing: 0.1em;
		mix-blend-mode: lighten;
		text-align: center;
	}

	a {
		display: inline-flex;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.navbar {
			padding: 0.5rem 0 0.5rem 0;
		}
		
		.tabs {
			padding-top: 0.40rem;
			font-size: 1.2rem;
		}
		
		.title {
			font-size: 1.5rem;
			letter-spacing: 0.13em;
		}

		.subtitle {
			font-size: 0.8rem;
			transform: scaleY(1.05);
			letter-spacing: 0.08em;
		}
	}
</style>