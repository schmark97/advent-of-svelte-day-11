<script>
	import '../app.pcss';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
</script>

<slot />
<BottomNav
	position="fixed"
	classInner="grid-cols-4 bg-gray-900 w-full max-w-full"
	outerClass="bg-gray-900 w-full !border-0 print:hidden"
>
	<BottomNavItem btnName="Home" href="/">
		<HomeSolid
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>
