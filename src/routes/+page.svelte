<script lang="ts">
	import { onlineUsers } from '../contexts/onlineUsers';
	import {
		ignoreAllMatchRequests,
		ignoreMatchRequest,
		matchRequests
	} from '../contexts/matchRequests';
	import { socketC } from '../socketio/client/initialize';
</script>

<svelte:head>
	<title>Chess</title>
	<meta name="Play chess online...." content="Chess App" />
</svelte:head>

<section class="flex-col">
	<h2>Play Section</h2>
	{#if $matchRequests.size > 0}
		<button onclick={ignoreAllMatchRequests}>Ignore All requests</button>
	{/if}
	{#each $matchRequests as [socketId, requester]}
		<div class="flex flex-col bg-black rounded-xl p-2">
			<p>A match request by:</p>
			<p>
				{requester.username}
			</p>
			<div class="flex">
				<button
					class="bg-blue-700 text-white"
					onclick={() => socketC.sendAMatchAcceptance(socketId, requester.tempKey)}
					>Join Game!</button
				>
				<button class="bg-red-700 text-white" onclick={() => ignoreMatchRequest(socketId)}
					>Ignore</button
				>
			</div>
		</div>
	{/each}
	<p>Online users are:</p>
	{#each $onlineUsers as [socketId, user]}
		<div class="flex gap-0 justify-center items-center">
			<p class="bg-black rounded-lg p-4">
				{user.username}
				{socketId}
			</p>
			{#if user.wantingToPlay}
				<button
					onclick={() => socketC.sendAMatchRequest(socketId)}
					class="bg-green-700 text-white p-2 rounded-l-none text-sm cursor-pointer"
				>
					Request A match
				</button>
			{:else}{/if}
		</div>
	{/each}
</section>
