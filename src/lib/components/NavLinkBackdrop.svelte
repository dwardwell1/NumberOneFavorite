<script context="module" lang="ts">
	const maxPills = 6;
	const minPills = 3;
	const count = range(minPills, maxPills);

	const createRenderer = (canvas: HTMLCanvasElement, width: number, height: number) => {
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext("2d");

		const items = Array.from({ length: count }).map((el, i) => {
			return {
				i,
				x: range(0, 10),
				y: range(0, 10)
			};
		});

		if (context) {
			context.fillStyle = "#000";
			context.strokeRect(0, 0, width, height);
		}

		const onMouseOver = () => {};
		const onMouseOut = () => {};
		const draw = () => {};

		return {
			context,
			width,
			height,
			onMouseOver,
			onMouseOut,
			draw
		};
	};
</script>

<script lang="ts">
	import { randomNumber, range } from "$lib/modules/numbers";

	import { onMount } from "svelte";

	export const count = Math.min(
		minPills + Math.round(Math.random() * (maxPills - minPills)),
		maxPills
	);

	let canvasRef: HTMLCanvasElement;
	let containerRef: HTMLDivElement | null = null;

	onMount(() => {
		if (canvasRef && containerRef) {
			const [width, height] = [containerRef.clientWidth * 2, containerRef.clientHeight * 2];
			const renderer = createRenderer(canvasRef, width, height);
			console.log(renderer);
		}
	});
</script>

<div class="backdrop z-stack">
	<canvas class="background" bind:this={canvasRef} />
	<div bind:this={containerRef} class="foreground">
		<slot />
	</div>
</div>

<style>
	.backdrop {
		position: relative;
	}

	.background {
		position: absolute;
		z-index: 1;
		left: -50%;
		top: -50%;
	}

	.foreground {
		z-index: 2;
	}
</style>
