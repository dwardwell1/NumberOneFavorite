<script lang="ts">
	import AddFavorite from "$lib/components/AddFavorite.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Favorites</h1>

<div class="layout">
	<div class="feed">
		{#each data.feed as feed}
			<div>
				<h2>{feed.path}</h2>
				<p>{feed.blurb}</p>
			</div>
		{:else}
			<p>No items</p>
		{/each}
	</div>
	<div class="detail">
		<AddFavorite />
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 2fr 1fr;
		max-height: 100vh;
		overflow-y: hidden;
		gap: 1rem;
	}

	.feed {
		padding: 1rem 1rem;
		height: 100%;
		overflow-y: scroll;
	}

	.detail {
		height: 100%;
		position: sticky;
		top: 0;
		bottom: 0;
		padding: 1rem 1rem;
	}
</style>
