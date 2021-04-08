<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let email;
	let password;
	let name;
	export let error ;

	async function register() {
		
		try {
			const res = await fetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify({
					name,
					email,
					password
				}),
				headers: { 'Content-Type': 'application/json' }
			});
			console.log(res)
			if (res.ok) {
				dispatch('success');
			} else {
				error = 'Ocorreu um erro';
			}
		} catch (err) {
			console.log(err);
			error = 'Ocorreu um erro';
		}
	}
</script>

<section>

	<h2>Registrar na Plataforma</h2>
    
	<input type="text" placeholder="Digite seu nome" bind:value={name} />
	<input type="text" placeholder="Digite seu e-mail" bind:value={email} />
	<input type="password" placeholder="Digite sua senha" bind:value={password} />

	<button type="button" on:click={register}>Registrar</button>
</section>
