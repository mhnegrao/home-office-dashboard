<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let email;
	let password;
	let error;
	async function login() {
		error = undefined;
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			console.log(res.body.email)
			if (res.ok) {
				dispatch('success');
			} else {
				error = 'Não autorizado';
				console.log(error);
			}
		} catch (err) {
			console.log(err);
			error = 'Ocorreu um erro';
		}
	}
</script>

<section>
	<h2>Acesso a Plataforma</h2>
	<input type="text" placeholder="Digite seu e-mail" bind:value={email} />
	<input type="password" placeholder="Digite sua senha" bind:value={password} />

	<button type="button" on:click={login}>Login</button>
</section>
{#if error}<p>{error}</p>{/if}