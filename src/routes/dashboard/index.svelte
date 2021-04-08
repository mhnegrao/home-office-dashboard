<script context="module">
	export const load = async ({ session }) => {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/auth/unauthorized'
			}
		}
		return{
			props:{
				email:session.email
			}
		}
	};
</script>

<script>
	import {onMount} from 'svelte';
	export let email;
	let name;

	onMount(async () => {
		const res = await fetch('/user');
		const user = await res.json();
		name = user.name;
	});
	const logout = () => {

	};
</script>

<section>
	<main>
		<h1>Bem Vindo</h1>
		<h2>Painel de Controle</h2>
		<h3>Olá {name}! Vocé está autencicado com o e-mail: {email}</h3>
		<button on:click={logout}>Logout</button>
	</main>
	
</section>
