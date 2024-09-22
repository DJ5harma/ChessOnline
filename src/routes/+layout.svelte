<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Form from '../components/Form.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { showForm, updateUserDetails, userDetails } from '../contexts/userDetails';
	import type { IonlineUser } from '../utils/types';
	import connectSocket, { disconnectSocket } from '../socketio/client/initialize';

	onMount(() => {
		let username = $userDetails.username || localStorage.getItem('guestUsername');
		if (!username) {
			username = `Anonymous ${(Math.random() * 10000000).toFixed(0)}`;
			localStorage.setItem('guestUsername', username);
		}
		let myInfo: IonlineUser = {
			username: username,
			wantingToPlay: true
		};
		connectSocket(myInfo);
		updateUserDetails({ ...$userDetails, username });
		return () => disconnectSocket();
	});
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
