import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";

import TodosList from "../components/TodosList";
import client from "../utils/sanityClient";

export default function Home({ todos }) {
  return (
    <main>
      <TodosList />
    </main>
  );
}

export async function getStaticProps() {
  const query = groq`*[_type == "todo"]{
    _id,
    title,
    description,
    isComplete,
  }`;
  const data = await client.fetch(query);
  console.log(data);
  return {
    props: {
      todos: data,
    },
  };
}
