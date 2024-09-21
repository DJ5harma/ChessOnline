<script lang="ts">
	import '../app.css';
	import Form from '../components/Form.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { showForm } from '../contexts/userDetails';
</script>

<div class="app">
	<main class="flex-col justify-start">
		<Navbar />
		{#if $showForm}
			<div class="w-screen h-screen absolute flex justify-center backdrop-blur-sm">
				<Form />
			</div>
		{/if}
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
