<script>
	import { Card, Button } from 'flowbite-svelte';
</script>

<div class="bg-gray-800 min-h-screen flex justify-center items-center">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		<Card
			class="mb-4 rounded-none bg-transparent border-0 hover:bg-transparent "
			href="/day11"
			padding="none"
		>
			<img src="/images/day11.png" alt="" class="w-100 h-auto max-h-[260px] object-contain" />
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
		<Card
			class="mb-4 rounded-none bg-transparent border-0 hover:bg-transparent "
			href="/day12"
			padding="none"
		>
			<img src="/images/day12.png" alt="" class="w-100 h-auto max-h-[260px] object-contain" />
			<div class="bg-white p-5 mt-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Day 12 - Greetings and salutations
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
					Your mission is to build an interactive application that allows users to design their own
					Christmas cards with ease. Embrace the festive spirit and Svelte’s capabilities to create
					a tool where elements can be effortlessly dragged, dropped, and arranged into beautiful
					holiday greetings.
				</p>
				<Button class="bg-gray-700">View Solution</Button>
			</div>
		</Card>
	</div>
</div>
