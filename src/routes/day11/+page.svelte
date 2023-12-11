<script>
	import { Section } from 'flowbite-svelte-blocks';
	import { Label, Input, Button, Helper, Modal } from 'flowbite-svelte';
	export let data;

	let form = {
		error: false,
		message: ''
	};

	let defaultModal = false;

	let generatedName = '';
	let name = '';
	const { names } = data;

	const getName = () => {
		generatedName = '';

		if (!names.firstNames.length || !names.lastNames.length) {
			return;
		}
		if (name.length < 1) {
			form.error = true;
			form.message = 'Name is required';
			return;
		}

		const nameLength = name.length;
		let nameNumber = 0;

		for (let i = 0; i < nameLength; i++) {
			nameNumber += name.charCodeAt(i);
		}

		const firstName = names.firstNames[nameNumber % names.firstNames.length];
		const lastName = names.lastNames[nameNumber % names.lastNames.length];
		generatedName = `${firstName} ${lastName}`;
		defaultModal = true;

		name = '';
		form.error = false;
		form.message = '';
	};
</script>

<Section name="crudcreateform">
	<form on:submit|preventDefault={getName}>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="sm:col-span-2">
				<Label
					for="name"
					class="mb-2 
				{form?.error ? 'text-red-500' : 'text-white'}">Your Name</Label
				>
				<Input
					type="text"
					name="name"
					id="name"
					class="{form?.error
						? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
						: 'text-white'}}"
					placeholder="Type product name"
					bind:value={name}
					required
				/>
				{#if form?.error}
					<Helper class="mt-2">
						<span class="font-medium text-red-500">{form?.message}</span>
					</Helper>
				{/if}
			</div>
			<Button type="submit" class="w-32 pri">Submit</Button>
		</div>
	</form>
</Section>

<Modal
	background={'bg-red-700'}
	title="Your Elf Name Is:"
	bind:open={defaultModal}
	class="bg-red-700"
	autoclose
	outsideclose
	placement="top-center"
>
	<p class="text-white text-xl font-bold">
		{generatedName}
	</p>
</Modal>
