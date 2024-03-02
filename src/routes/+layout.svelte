<script lang="ts">
	/* the props */
	// import "open-props/index.css";
	import "open-props/src/index.css";

	/* optional imports that use the props */
	import "open-props/src/extra/normalize.css";
	import "open-props/src/extra/buttons.css";
	import "$lib/styles/open-props.css";
	import "$lib/styles/global.css";
	import NavLink from "$lib/components/NavLink.svelte";

	export let isAuthenticated: boolean = true;
</script>

<div class="layout">
	<nav class="nav-container">
		<ul class="nav-menu unstyled">
			<li>
				<NavLink href="/">Home</NavLink>
			</li>
			<li>
				<NavLink href="/favorites">Feed</NavLink>
			</li>
			<li>
				<NavLink href="/about">About</NavLink>
			</li>
			{#if isAuthenticated}
				<li>
					<NavLink href="/account">Account</NavLink>
				</li>
			{:else}
				<li>
					<NavLink href="/Account">Login</NavLink>
				</li>
			{/if}
		</ul>
	</nav>

	<div class="container">
		<slot />
	</div>
</div>

<style>
	.container {
		padding: 2rem 2rem;
		display: grid;
		grid-template-columns: 1fr;
		align-items: baseline;
		align-content: center;
		height: 100%;
	}

	.nav-menu {
		display: flex;
		gap: 1rem;
		justify-content: center;
		background-color: var(--nav-bg);
	}

	.layout {
		display: grid;
		grid-template-columns: auto;
	}

	@media screen and (min-width: 60rem) {
		.nav-menu {
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
