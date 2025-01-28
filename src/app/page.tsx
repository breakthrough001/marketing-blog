import { client } from "@/sanity/lib/client";
import { SanityTypes } from "../../@types";

async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc)`;

  return await client.fetch(query);
}

export default async function Home() {
  const posts: SanityTypes.Post[] = await getPosts();
  console.log(posts);

  return <div></div>;
}
