<script lang="ts">
	/* the props */
	// import "open-props/index.css";
	import "open-props/src/index.css";

	/* optional imports that use the props */
	import "open-props/src/extra/normalize.css";
	import "open-props/src/extra/buttons.css";

	export let isAuthenticated: boolean = true;
</script>

<div class="layout">
	<nav class="nav-container">
		<ul class="navmenu unstyled">
			<li>
				<a class="nav-item" href="/">Home</a>
			</li>
			<li>
				<a class="nav-item" href="/favorites">Feed</a>
			</li>
			<li>
				<a class="nav-item" href="/about">About</a>
			</li>
			{#if isAuthenticated}
				<li>
					<a class="nav-item" href="/account">Account</a>
				</li>
			{:else}
				<li>
					<a class="nav-item" href="/account">Login</a>
				</li>
			{/if}
		</ul>
	</nav>

	<div class="container">
		<slot />
	</div>
</div>

<style>
	:root {
		--link: #32a;
		--link-visited: #43b;
	}

	:global(h1, h2) {
		margin-bottom: 1rem;
	}
	
	:global(body) {
		display: grid;
	}

	.container {
		padding: 2rem 2rem;
		display: grid;
		grid-template-columns: 1fr;
		align-items: baseline;
		align-content: center;
		height: 100%;
	}

	.navmenu {
		display: flex;
		gap: 1rem;
		justify-content: center;
		background-color: #f3a5be;
	}

	.unstyled {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-item {
		margin: 2px 2px;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		display: block;
	}

	.nav-item:hover,
	.nav-item:focus {
		background-color: #f390af;
		text-decoration-color: #f390af;
	}

	.layout {
		display: grid;
		grid-template-columns: auto;
	}

	@media screen and (min-width: 60rem) {
		.navmenu {
			display: grid;
			place-content: center;
			width: auto;
			padding: 1rem 1rem;
			height: 100%;
		}
		.layout {
			gap: 1rem;
			grid-template-columns: 1fr 2fr;
		}
	}
</style>
