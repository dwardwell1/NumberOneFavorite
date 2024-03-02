
<script lang="ts">
	import type { Favorite } from "$lib/data-model";


    export let favorite: Favorite;
    export let title: string = `youtube.com/watch?v=${favorite.path}`;
    export let tag: "a"|"div" = "div";
    export const youtubeBaseURL = `https://www.youtube.com/watch?v=`;

    let url = `https://www.youtube.com/watch?v=${favorite.path}`;

</script>


<svelte:element this={tag} class="favorite-item">
    <a class="title" href={url} target="_blank">
        {title}
    </a>

    <p class="blurb">{favorite.blurb}</p>

</svelte:element>

<style>
    .favorite-item {
        padding: 0.5rem;
        margin: 0 -0.5rem 1rem 0rem;
        border-radius: 6px;
    }

    .favorite-item:hover {
        background-color: #e2e2ff;
        
    }

    .title {
        font-size: 1.5em;
    }
    .blurb {}
</style>