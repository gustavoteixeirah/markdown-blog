export async function load({ params }) {
	try {
		const postSlug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
		const post = await import(`../../posts/${postSlug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch(e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}