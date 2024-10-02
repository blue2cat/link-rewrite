import { config } from 'dotenv';

config();

// Define the Env type used to gather the redirects list
export interface Env {
	JSON_URL: string;
}

// Main/default action
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		let redirects;

		try {

			// Fetch the list and check the results
			const response = await fetch(env.JSON_URL);
			if (!response.ok) {
				throw new Error('Failed to load redirects');
			}

			redirects = response.json();

		} catch (error) {
			console.error(error);
			return new Response('Error loading redirects', { status: 500 });
		}

		// Check the redirect mappings
		for (const redirect of redirects) {
			if (url.pathname === redirect.uri) {
				return Response.redirect(redirect.target, 301);
			}
		}

		// Default response for other requests
		return new Response('Invalid', { status: 404 });
	},
} satisfies ExportedHandler<Env>;
