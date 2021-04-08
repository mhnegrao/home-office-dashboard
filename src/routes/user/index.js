import { Tedis } from 'tedis';

const db = new Tedis({
	host: '127.0.0.1',
	port: 6379
});
export async function get({ context }) {
	if (!context.authenticated) {
		return {
			status: 401,
			body: {
				message: 'Não autorizado'
			}
		};
	}
	const user = JSON.parse(await db.get(context.email));

	if (!user) {
		return {
			status: 404,
			body: {
				message: 'Usuário não encontrado'
			}
		};
	}
	delete user.password;
	return {
		status: 200,
		body: user
	};
}
