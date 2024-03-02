<!-- <svelte:options namespace="http://www.w3.org/2000/svg" /> -->

<script lang="ts">
	export let width: number | string = 10;
	export let height: number | string = 2;
	export let fill: CSSStyleDeclaration["fill"] = "currentColor";
	export let stroke: CSSStyleDeclaration["stroke"] = "currentColor";
	export let strokeWidth: number | string = 1;
	export let strokeLinecap: "inherit" | "butt" | "round" | "square" | null = "round";
	export let rotation: number = 0;
	export let rotationOriginX: number | string = "50%";
	export let rotationOriginY: number | string = "50%";
	export let rx: string = "6px";

	// export let pathProps: Partial<CSSStyleDeclaration> = $$restProps;

	let transform: string = "";
	$: transform = `rotate(${rotation} ${rotationOriginX} ${rotationOriginY})`;
</script>

<svg
	width="100%"
	height="100%"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid meet"
>
	<rect
		{width}
		{height}
		{fill}
		{stroke}
		stroke-linecap={strokeLinecap}
		stroke-width={strokeWidth}
		{transform}
		{rx}
	/>
</svg>

<style>
	svg {
		color: currentColor;
	}
</style>
