<script lang="ts">
	import { showForm } from '../contexts/userDetails';

	let pageType: 'Login' | 'Register' = 'Register';

	const formData = {
		Username: '',
		Password: '',
		ConfirmPassword: ''
	};
	function handleLogin() {
		fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify(formData)
		});
	}
	function handleRegister() {
		fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(formData)
		});
	}
</script>

<div class="flex flex-col absolute bg-black bg-opacity-40 p-8 rounded-xl">
	<h1 class="text-xl">Chess Clone</h1>
	<p>{pageType} Form</p>
	<input
		type="text"
		placeholder="username"
		onchange={(e) => (formData.Username = e.currentTarget.value)}
	/>
	<input
		type="password"
		placeholder="password"
		onchange={(e) => (formData.Password = e.currentTarget.value)}
	/>
	{#if pageType === 'Register'}
		<input
			type="password"
			placeholder="confirm-password"
			onchange={(e) => (formData.ConfirmPassword = e.currentTarget.value)}
		/>
	{/if}
	<button onclick={() => (pageType === 'Login' ? handleLogin() : handleRegister())}
		>{pageType}</button
	>
	<div class="flex">
		{#if pageType === 'Register'}
			<p>Already registered?</p>
			<button onclick={() => (pageType = 'Login')}>Login</button>
		{:else}
			<p>Not registered?</p>
			<button onclick={() => (pageType = 'Register')}>Register</button>
		{/if}
	</div>

	<button class="bg-blue-700 text-white" onclick={() => ($showForm = false)}>Guest Login</button>
</div>
