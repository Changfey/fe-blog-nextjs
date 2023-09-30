import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../graphql/queries";
import { client } from "../index";

export default function Post({ post }) {
	try {
		return (
			<div>
				<h1>{post.title}</h1>
				<span>{post.date}</span>
				<br />
				{post.video && (
					<video controls width='600px'>
						<source src={post.video} type='video/webm' />
					</video>
				)}
				{/* <MDXRemote {...post.content} /> */}
				<p>{post.content}</p>
				{post.url && (
					<img src={post.url} width='600px' alt='this is the image' />
				)}
			</div>
		);
	} catch (e) {
		return <div>Oops </div>;
	}
}

export async function getStaticPaths() {
	try {
		const { data } = await client.query({ query: GET_ALL_SLUGS });

		const paths = data.blogPosts.data.map((post) => ({
			params: {
				slug: post.attributes.urlSlug,
			},
		}));

		return {
			paths,
			fallback: false,
		};
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
}

export async function getStaticProps({ params }) {
	try {
		const { data } = await client.query({
			query: GET_INDIVIDUAL_POST,
			variables: { slugUrl: params.slug },
		});

		const attrs = data.blogPosts.data[0].attributes;
		// const _html = await serialize(attrs.content);

		return {
			props: {
				post: {
					title: attrs.title,
					content: attrs.content,
					date: attrs.date,
					// url: `http://localhost:1337/${attrs.imgUrl.data[0].attributes.url}`,
					// url2: `http://localhost:1337${attrs.imgUrl.data[1].attributes.url}`,
					// url3: `http://localhost:1337${attrs.imgUrl.data[2].attributes.url}`,
					// url4: `http://localhost:1337${attrs.imgUrl.data[3].attributes.url}`,
					// video: `http://localhost:1337/${attrs.videoUrl.data[0].attributes.url}`,
				},
			},
		};
	} catch (e) {
		return {
			props: {
				post: {
					title: "",
					content: "",
					date: "",
					url: "",
				},
			},
		};
	}
}
