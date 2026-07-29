<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	import Youtube from '$lib/assets/youtube.png';
	import Patreon from '$lib/assets/patreon.png';
	import Instagram from '$lib/assets/Instagram.png';
	import Soundcloud from '$lib/assets/saundclaud.png';
	import Facebook from '$lib/assets/FACEBOOOCK.png';
	import LinkedIn from '$lib/assets/linkedin.png';
	import Twitter from '$lib/assets/twitter.png';
	import Artstation from '$lib/assets/artstation.png';
</script>

<Navbar selected="contact" />

<section class="content">
	<a href="mailto:augustobosco0@gmail.com" class="email"
		><span style="font-weight: bold">augustobosco0</span>@gmail.com</a
	>
	<div class="logos">
		<a href="https://linkedin.com/in/augusto-bosco-848291182/"
			><img src={LinkedIn} alt="LinkedIn" /></a
		>
		<a href="https://x.com/augustobosco_" class="twitter"><img src={Twitter} alt="Twitter" /></a>
		<a href="https://soundcloud.com/augustobosco" class="soundcloud"
			><img src={Soundcloud} alt="Soundcloud" /></a
		>
		<a href="https://www.artstation.com/augustobosco" class="artstation"
			><img src={Artstation} alt="Artstation" /></a
		>
		<a href="https://instagram.com/augustobosco_/" class="instagram"
			><img src={Instagram} alt="Instagram" /></a
		>
		<a href="https://youtube.com/@augustobosco_"><img src={Youtube} alt="Youtube" /></a>
		<a href="https://patreon.com/AugustoBosco"><img src={Patreon} alt="Patreon" /></a>
		<a href="https://www.facebook.com/profile.php?id=100009868776195"
			><img src={Facebook} alt="Facebook" /></a
		>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

	.email {
		display: block;
		text-align: center;
		font-size: 2.2rem;
		color: rgb(242, 240, 255);
		transition: letter-spacing 0.25s;
		display: block;
		width: fit-content;
		margin: 0 auto;

		background-color: rgb(47, 38, 80);
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.email:hover {
		letter-spacing: 0.05rem;
	}

	.content {
		font-family: 'Raleway';
		color: white;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	.logos {
		width: 50%;
		align-items: center;
		justify-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}

	a {
		width: 50%;
	}

	.instagram {
		width: 60%;
	}

	.soundcloud {
		width: 60%;
	}

	.artstation {
		width: 60%;
	}

	@media (max-width: 768px) {
		.email {
			font-size: 1.4rem;
		}

		.logos {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
			width: 100%;
		}
	}
</style>
