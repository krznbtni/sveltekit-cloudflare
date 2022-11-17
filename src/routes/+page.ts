// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
	console.log('post -> counter', counter);
}
