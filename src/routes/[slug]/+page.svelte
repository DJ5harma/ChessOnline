<script lang="ts">
	import { onMount } from 'svelte';
	import { socketC } from '../../socketio/client/initialize';

	export let data: { slug: string };

	onMount(() => {
		socketC.startMyGame(data.slug);
	});
</script>

<section></section>
