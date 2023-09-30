import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
	query {
		blogPosts {
			data {
				attributes {
					urlSlug
				}
			}
		}
	}
`;

const GET_ALL_POSTS = gql`
	query {
		blogPosts {
			data {
				attributes {
					title
					description
					urlSlug
				}
			}
		}
	}
`;

const GET_INDIVIDUAL_POST = gql`
	query ($slugUrl: String!) {
		blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
			data {
				attributes {
					title
					content
					date
					imgUrl{
						data {
							attributes {
								url
							}
						}
					}
					videoUrl{
						data {
							attributes {
								url
							}
						}
					}	
				}
			}
		}
	}
`;

const GET_POST_BY_CATEGORY = gql`
	query ($category: String!) {
		blogPosts(filters: { category: { eq: $category } }) {
			data {
				attributes {
					title,
          			urlSlug,
		  			description
				}
			}
		}
	}
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS, GET_POST_BY_CATEGORY };

export type Post = {
	id: string;
	attributes: {
		title: string;
		content: string;
		urlSlug: string;
		description: string;
		date: string;
		imgUrl: string;
	}
}
