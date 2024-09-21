<script lang="ts">
	import { onMount } from 'svelte';
	import type { IonlineUser } from '../../utils/types';
	import { userDetails } from '../../contexts/userDetails';
	import { onlineUsers } from '../../contexts/onlineUsers';
	import connectSocket, { disconnectSocket } from '../../socketio/client/initialize';

	let myInfo: IonlineUser = {
		username: $userDetails.username,
		wantingToPlay: true
	};

	let connectionStatus = 'Connecting....';

	onMount(() => {
		connectSocket(myInfo);
		connectionStatus = 'Connected';
		return () => disconnectSocket();
	});
</script>

<section class="flex-col">
	<h2>Play Section</h2>
	<p>{connectionStatus}</p>
	<p>Online users are:</p>
	{#each $onlineUsers as [socketId, user]}
		<div>
			<p>
				{user.username}
			</p>
			<p>{user.wantingToPlay ? 'Open to play' : 'Not wanting to play'}</p>
		</div>
	{/each}
</section>
