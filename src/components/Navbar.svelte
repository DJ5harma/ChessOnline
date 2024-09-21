<script lang="ts">
	import { showForm, userDetails } from '../contexts/userDetails';
</script>

<nav class="border flex w-screen p-4 justify-between items-center">
	<h1>ChessClone.org</h1>
	<div class="flex">
		{#if $userDetails.isGuest}
			<button class="text-sm" onclick={() => showForm.update(() => true)}>Login / Signup</button>
		{/if}
		<p>{$userDetails.username}</p>
	</div>
</nav>
