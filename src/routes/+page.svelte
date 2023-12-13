<script>
	import { Card, Button } from 'flowbite-svelte';
</script>

<div class="bg-gray-800 min-h-screen flex justify-center items-center">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		<Card
			img="/images/day11.png"
			class="mb-4 rounded-none bg-transparent border-0 hover:bg-transparent "
			href="/day11"
			padding="none"
		>
			<div class="bg-white p-5 mt-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Day 11 - Tinsel Transformers
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
					This tool will allow anyone to enter their “Human name” and receive a unique, elf-inspired
					name in return. It’s a wonderful way for people everywhere to feel connected to the magic
					of the North Pole!
				</p>
				<Button class="bg-gray-700">View Solution</Button>
			</div>
		</Card>
	</div>
</div>
