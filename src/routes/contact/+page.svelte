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

	// Estado del formulario de contacto
	let estado = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function enviarFormulario(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		estado = 'sending';

		try {
			const response = await fetch('https://formspree.io/f/mrpzewyw', {
				method: 'POST',
				body: new FormData(form),
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				form.reset();
				estado = 'success';
			} else {
				estado = 'error';
			}
		} catch {
			estado = 'error';
		}
	}

	function nuevoMensaje() {
		estado = 'idle';
	}
</script>

<Navbar selected="contact" />

<section class="content">

	<!-- ======================================================== -->
	<!-- FORMULARIO DE CONTACTO                                   -->
	<!-- ======================================================== -->

	<div class="contact-intro">
		<p class="contact-kicker">GET IN TOUCH</p>

		<h1>Let’s create something together.</h1>

		<p class="contact-description">
			Have a project, collaboration or idea in mind? Send me a message and I’ll get back to you.
		</p>
	</div>

	<div class="contact-form-container">

		{#if estado === 'success'}

			<div class="success-card" aria-live="polite">

				<div class="success-icon">✓</div>

				<h2>MESSAGE SENT</h2>

				<p>
					Thank you for reaching out. I’ll get back to you as soon as possible.
				</p>

				<button
					type="button"
					class="send-another"
					onclick={nuevoMensaje}
				>
					SEND ANOTHER MESSAGE
				</button>

			</div>

		{:else}

			<form
				class="contact-form"
				onsubmit={enviarFormulario}
			>

				<div class="form-row">

					<label class="field">

						<span>NAME</span>

						<input
							type="text"
							name="name"
							placeholder="Your name"
							autocomplete="name"
							required
						/>

					</label>

					<label class="field">

						<span>EMAIL</span>

						<input
							type="email"
							name="email"
							placeholder="you@email.com"
							autocomplete="email"
							required
						/>

					</label>

				</div>

				<label class="field message-field">

					<span>MESSAGE</span>

					<textarea
						name="message"
						rows="7"
						placeholder="Tell me a little about your project..."
						required
					></textarea>

				</label>

				<div class="form-bottom">

					<p class="form-note">
						I’ll only use your email to reply to your message.
					</p>

					<button
						type="submit"
						class="submit-button"
						disabled={estado === 'sending'}
					>

						{estado === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}

						{#if estado !== 'sending'}
							<span class="submit-arrow">↗</span>
						{/if}

					</button>

				</div>

				{#if estado === 'error'}

					<p class="form-error" aria-live="polite">
						Something went wrong. Please try again, or email me directly below.
					</p>

				{/if}

			</form>

		{/if}

	</div>


	<!-- ======================================================== -->
	<!-- EMAIL DIRECTO: SE MANTIENE COMO ALTERNATIVA / RESPALDO  -->
	<!-- ======================================================== -->

	<div class="email-section">

		<p class="email-label">
			OR EMAIL ME DIRECTLY
		</p>

		<a
			href="mailto:augustobosco0@gmail.com"
			class="email"
		>
			<span style="font-weight: bold">augustobosco0</span>@gmail.com
		</a>

	</div>


	<!-- ======================================================== -->
	<!-- LÍNEA SEPARADORA ENTRE EMAIL Y REDES                    -->
	<!-- ======================================================== -->

	<hr class="linea-separadora" />


	<!-- ======================================================== -->
	<!-- REDES SOCIALES                                          -->
	<!-- ======================================================== -->

	<div class="logos">

		<a href="https://linkedin.com/in/augusto-bosco-848291182/">
			<img src={LinkedIn} alt="LinkedIn" />
		</a>

		<a
			href="https://x.com/augustobosco_"
			class="twitter"
		>
			<img src={Twitter} alt="Twitter" />
		</a>

		<a
			href="https://soundcloud.com/augustobosco"
			class="soundcloud"
		>
			<img src={Soundcloud} alt="Soundcloud" />
		</a>

		<a
			href="https://instagram.com/augustobosco_/"
			class="instagram"
		>
			<img src={Instagram} alt="Instagram" />
		</a>


		<!-- ==================================================== -->
		<!-- REDES OCULTAS POR AHORA                             -->
		<!-- ====================================================

		<a href="https://youtube.com/@augustobosco_">
			<img src={Youtube} alt="Youtube" />
		</a>

		<a
			href="https://www.artstation.com/augustobosco"
			class="artstation"
		>
			<img src={Artstation} alt="Artstation" />
		</a>

		<a href="https://patreon.com/AugustoBosco">
			<img src={Patreon} alt="Patreon" />
		</a>

		<a href="https://www.facebook.com/profile.php?id=100009868776195">
			<img src={Facebook} alt="Facebook" />
		</a>

		==================================================== -->

	</div>

</section>


<!-- ======================================================== -->
<!-- FOOTER                                                   -->
<!-- ======================================================== -->

<div class="footer">
	© 2026 Augusto Bosco <br />
	Website by Zokalyx
</div>


<style>

	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');


	/* ======================================================== */
	/* INTRO DEL FORMULARIO                                     */
	/* ======================================================== */

	.contact-intro {
		width: min(820px, 90%);
		text-align: left;
	}

	.contact-kicker {
		margin: 0 0 0.8rem 0;
		color: rgb(210, 195, 130);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.18em;
	}

	.contact-intro h1 {
		margin: 0;
		color: rgb(242, 240, 255);
		font-size: clamp(2rem, 4vw, 3.4rem);
		font-weight: 400;
		line-height: 1.08;
		letter-spacing: -0.025em;
	}

	.contact-description {
		max-width: 620px;
		margin: 1rem 0 0 0;
		color: rgba(242, 240, 255, 0.68);
		font-size: 1rem;
		line-height: 1.65;
	}


	/* ======================================================== */
	/* CONTENEDOR Y FORMULARIO                                  */
	/* ======================================================== */

	.contact-form-container {
		width: min(820px, 90%);
		box-sizing: border-box;
	}

	.contact-form {
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
		background: rgba(47, 38, 80, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.09);
		border-radius: 0.75rem;
		text-align: left;
		backdrop-filter: blur(8px);
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.field span {
		color: rgb(210, 195, 130);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.14em;
	}

	.field input,
	.field textarea {
		width: 100%;
		box-sizing: border-box;
		border: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.22);
		border-radius: 0;
		outline: none;
		background: transparent;
		color: rgb(242, 240, 255);
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
		padding: 0.4rem 0 0.8rem 0;
		transition: border-color 0.2s ease;
	}

	.field textarea {
		resize: vertical;
		min-height: 150px;
		line-height: 1.6;
	}

	.field input::placeholder,
	.field textarea::placeholder {
		color: rgba(242, 240, 255, 0.35);
	}

	.field input:focus,
	.field textarea:focus {
		border-bottom-color: rgb(210, 195, 130);
	}

	.message-field {
		margin-top: 2rem;
	}

	.form-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		margin-top: 1.6rem;
	}

	.form-note {
		margin: 0;
		color: rgba(242, 240, 255, 0.38);
		font-size: 0.78rem;
		line-height: 1.5;
	}

	.submit-button,
	.send-another {
		flex-shrink: 0;
		border: 1px solid rgba(210, 195, 130, 0.65);
		border-radius: 999px;
		background: transparent;
		color: rgb(210, 195, 130);
		font-family: 'Raleway', sans-serif;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		padding: 0.9rem 1.25rem;
		cursor: pointer;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.submit-button:hover:not(:disabled),
	.send-another:hover {
		background: rgb(210, 195, 130);
		color: rgb(19, 16, 30);
		border-color: rgb(210, 195, 130);
		transform: translateY(-1px);
	}

	.submit-button:disabled {
		opacity: 0.55;
		cursor: wait;
	}

	.submit-arrow {
		display: inline-block;
		margin-left: 0.45rem;
		font-size: 1rem;
	}

	.form-error {
		margin: 1rem 0 0 0;
		color: rgb(255, 160, 160);
		font-size: 0.9rem;
		line-height: 1.5;
	}


	/* ======================================================== */
	/* CONFIRMACIÓN DESPUÉS DEL ENVÍO                           */
	/* ======================================================== */

	.success-card {
		width: 100%;
		min-height: 300px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2.5rem 2rem;
		background: rgba(47, 38, 80, 0.72);
		border: 1px solid rgba(210, 195, 130, 0.22);
		border-radius: 0.75rem;
		text-align: center;
	}

	.success-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.1rem;
		height: 3.1rem;
		margin-bottom: 1rem;
		border: 1px solid rgb(210, 195, 130);
		border-radius: 50%;
		color: rgb(210, 195, 130);
		font-size: 1.35rem;
	}

	.success-card h2 {
		margin: 0;
		color: rgb(242, 240, 255);
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0.16em;
	}

	.success-card p {
		max-width: 480px;
		margin: 1rem 0 1.5rem 0;
		color: rgba(242, 240, 255, 0.65);
		line-height: 1.6;
	}


	/* ======================================================== */
	/* EMAIL DIRECTO - RESPALDO                                 */
	/* ======================================================== */

	.email-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
	}

	.email-label {
		margin: 0;
		color: rgba(242, 240, 255, 0.42);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
	}

	.email {
		display: block;
		text-align: center;
		font-size: 2.2rem;
		color: rgb(242, 240, 255);
		transition:
			letter-spacing 0.25s,
			color 0.2s;
		width: fit-content;
		margin: 0 auto;
		background-color: rgb(47, 38, 80);
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.email:hover {
		letter-spacing: 0.05rem;
		color: rgb(210, 195, 130);
	}


	/* ======================================================== */
	/* CONTENEDOR GENERAL                                       */
	/* ======================================================== */

	.content {
		font-family: 'Raleway';
		color: white;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 4rem;
		padding-bottom: 4rem;

		/* ======================================================== */
		/* ESTE ES EL LÍMITE QUE EVITA QUE SE ROMPA EN PANTALLAS 2K */
		width: 100%;
		max-width: 2000px;
		margin: 0 auto;
		box-sizing: border-box;
		/* ======================================================== */
	}


	/* ======================================================== */
	/* REDES SOCIALES                                           */
	/* ======================================================== */

	.logos {
		width: 50%;
		align-items: center;
		justify-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;

		/* ESPACIO ENTRE LA LÍNEA Y LAS REDES */
		margin-top: 1rem;
	}

	/* Mantiene el tamaño original de los links de redes sin afectar
	   al email ni a los botones/links nuevos del formulario */
	.logos a {
		width: 50%;
	}


	/* ======================================================== */
	/* LÍNEA SEPARADORA ENTRE EMAIL Y REDES                     */
	/* ======================================================== */

	.linea-separadora {
		width: 50%;
		border: 0;
		border-bottom: 1px solid rgba(252, 246, 220, 0.253);
		margin: 1rem 0 2rem 0;
	}


	.instagram,
	.soundcloud,
	.artstation {
		width: 60%;
	}


	/* ======================================================== */
	/* ESTILOS DEL FOOTER                                       */
	/* ======================================================== */

	.footer {
		margin-top: 1rem;
		margin-bottom: 3rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		line-height: 1.8;
		font-family: 'Raleway', sans-serif;
	}


	/* ======================================================== */
	/* CELULARES                                                */
	/* ======================================================== */

	@media (max-width: 768px) {

		.contact-intro,
		.contact-form-container {
			width: 90%;
		}

		.contact-intro h1 {
			font-size: 2rem;
		}

		.contact-form {
			padding: 1.4rem;
		}

		.form-row {
			grid-template-columns: 1fr;
			gap: 1.6rem;
		}

		.message-field {
			margin-top: 1.6rem;
		}

		.form-bottom {
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
		}

		.submit-button {
			width: 100%;
		}

		.email {
			font-size: 1.4rem;
		}

		.logos {
			grid-template-columns: 1fr;
			width: 100%;
		}
	}

</style>