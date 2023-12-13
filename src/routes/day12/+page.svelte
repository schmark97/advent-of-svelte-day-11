<script>
	import { Button } from 'flowbite-svelte';

	const drag = (node) => {
		let moving = false;
		let left = parseInt(node.dataset.x);
		let top = parseInt(node.dataset.y);
		node.style.position = 'absolute';
		node.style.top = `${top}px`;
		node.style.left = `${left}px`;
		node.style.cursor = 'move';
		node.style.userSelect = 'none';
		node.style.opacity = '1';
		node.style.zIndex = '1000';

		node.addEventListener('mousedown', () => {
			moving = true;
		});

		window.addEventListener('mousemove', (e) => {
			if (moving) {
				left += e.movementX;
				top += e.movementY;
				node.style.top = `${top}px`;
				node.style.left = `${left}px`;
			}
		});

		window.addEventListener('mouseup', () => {
			moving = false;
		});
	};

	let cardTexts = [];

	const addText = () => {
		cardTexts = [
			...cardTexts,
			{
				text: 'Tap to edit/Double tap to remove',
				x: 0,
				y: 0
			}
		];
	};
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');
	</style>
</svelte:head>

<div class="bg-primary-200 min-h-screen min-w-screen">
	<div class="flex justify-between p-24">
		<div class="">
			<Button class="print:hidden" on:click={addText}>Add text</Button>
			<div class="relative">
				{#each Array(11) as _, index (index)}
					{@const x = index > 4 ? (index - 5) * 100 : index * 100}
					{@const y = index > 4 ? 200 : 100}
					<img
						class="opacity-0 transition-opacity duration-200 ease-in-out h-auto w-16 print:block"
						use:drag
						data-x={x}
						data-y={y}
						src={`https://advent.sveltesociety.dev/data/2023/day-twelve/${index + 1}.png`}
						alt=""
					/>
				{/each}
			</div>
		</div>

		<div class="border-2 relative bg-white border-primary-900 border-dashed w-[800px] h-[700px]">
			{#each cardTexts as ct}
				<div
					class="text-5xl font-display"
					use:drag
					data-x="0"
					data-y="0"
					contenteditable="true"
					role="button"
					tabindex="0"
					on:dblclick={() => {
						cardTexts = cardTexts.filter((item) => item !== ct);
					}}
				>
					{ct.text}
				</div>
			{/each}
		</div>
	</div>
</div>
