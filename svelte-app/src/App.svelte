
<script>
	import Image from './Image.svelte';
	import Router from './Router.svelte';

	import { store } from './store.js';
	import { router, navigate } from './router.js';

</script>
	<header>
		<div class="topbar">
			<Image style="height: 100px;" src="swish-logo.jpg" alt="logo" />
			<h1>Professional Window Cleaning Services</h1>
			<div class="flex-box">
				<p class="contact-text">
					<img src="images/icons/phone.png" alt="phone" class="icon">
					{$store.phone}
				</p>
				<p class="contact-text">
					<img src="images/icons/gmail.jpeg" alt="phone" class="icon">
					{$store.email}
				</p>
			</div>
		</div>
		<nav>
			<div link on:click={() => navigate('home')} active={$router === 'home' || $router === '/'}>Home</div>
			<div link on:click={() => navigate('about')} active={$router === 'about'}>About</div>
			<div link on:click={() => navigate('gallery')} active={$router === 'gallery'}>Gallery</div>
		</nav>
	</header>

	<main>
		<Router />
	</main> 	

	<footer>
		<nav>
			<div link on:click={() => navigate('home')} active={$router ===  'home' || $router === '/'}>Home</div>
			<div link on:click={() => navigate('about')} active={$router === 'about'}>About</div>
			<div link on:click={() => navigate('gallery')} active={$router === 'gallery'}>Gallery</div>
		</nav>
		<p class="footer-message">Proudly serving Sunbury, Gisborne, Diggers Rest and the surrounding areas</p>
		<p>Swish Professional Window Cleaning Services. Website Designed by Tyson Hauke</p>
	</footer>
<style>
	* {
		--primary-color: rgb(0,141,228);
		--highlight-color: rgb(0, 90,200);
		--light-color: rgb(0,121,208);
		--white: rgb(253,254,255);
		text-align: center;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	main {
		padding: 0;
		margin-top: 0px;
	}
	div {
		padding: 0;
		margin: 0;
	}

	.flex-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.contact-text {
		margin: 15px 10px 10px 10px;
		font-size: 18px;
		line-height: 24px;
	}
	.icon {
		height: 18px;
		margin-top: 5px;
		transform: translateY(3px);
	}

	h1 {
		color: black;
		font-size: 30px;
		font-family: serif;
	}

	header {
		top: 0;
		width: 100vw;
		padding: 0;
		margin: 0;
		background: var(--white);
		text-align: center;
	}

	.topbar {
		display: flex;	
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 20px;
		width: 100vw;
	}
	.topbar > * {
		margin: 10px 20px 10px 20px;
	}


	nav {
		box-sizing: border-box;
		width: 100vw;
		display: flex;
		position: sticky;
		justify-content: center;
		background: var(--primary-color);
		color: var(--white);
		margin: 0; height: 48px;
	}

div[link] {
		cursor: pointer;
		color: var(--white);
		font-size: 20px;
		padding: 0 20px 0 20px;
		height: 48px;
		line-height: 48px;
		transition: 0.3s;
		text-decoration: none;
	}
div[link]:hover {
		background: var(--highlight-color);
	}
div[link][active="true"] {
		background: var(--light-color)
	}
div[link]:visited {
		color: #333;
	}

	footer {
		width: 100vw;
		background: var(--highlight-color);
		margin: 0;
		padding-bottom: 20px;
		-webkit-box-shadow: 0px 62px 5px 18px var(--highlight-color);
		-moz-box-shadow: 0px 62px 5px 18px var(--highlight-color);
		box-shadow: 0px 62px 5px 18px var(--highlight-color);
	}
	footer > p {
		font-size: 14px;
		color: #eee;
	}
	.footer-message {
		font-size: 18px;
		color: white;
		padding: 20px;
	}
</style>