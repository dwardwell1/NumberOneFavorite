<script lang="ts">
	import { onMount } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import NavLinkBackdrop from "./NavLinkBackdrop.svelte";

	export let href: HTMLAnchorAttributes["href"];
	export let text: string = "Link Text";

	export let anchorProps: HTMLAnchorAttributes = $$restProps;

	onMount(() => {});
</script>

<div class="z-stack nav-item-container">
	<NavLinkBackdrop>
		<a class="nav-item" {href} {...anchorProps} on:click>
			<slot>{text}</slot>
		</a>
	</NavLinkBackdrop>
</div>

<style>
	.nav-item-container {
		width: min-content;
	}
	.nav-item {
		margin: 2px 2px;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		display: block;
	}

	.nav-item:hover,
	.nav-item:focus {
		background-color: var(--nav-item-bg);
		text-decoration-color: var(--nav-item-bg);
	}
</style>
