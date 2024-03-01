<script lang="ts">
	import AddFavorite from "$lib/components/AddFavorite.svelte";
	import FavoriteListItem from "$lib/components/FavoriteListItem.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Feed</h1>

<div class="layout">
	<div class="feed">
		{#each data.feed as feed}
			<FavoriteListItem favorite={feed} />
		{:else}
			<p>No items in feed</p>
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

	}

	.detail {
		height: 100%;
		position: sticky;
		top: 0;
		bottom: 0;
		padding: 1rem 1rem;
	}
</style>
