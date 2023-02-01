import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";

import client from "../utils/sanityClient";

export default function Home() {
  const query = groq`*[_type == "todo"]{
    title,
    description,
    isComplete,
  }`;
  const todosQuery = useQuery(["todos"], () => client.fetch(query));

  if (todosQuery.isLoading) return <p>Loading...</p>;
  if (todosQuery.isError) return <p>Error...</p>;

  console.log(todosQuery.data);

  return (
    <>
      <h1>Todo App</h1>
    </>
  );
}
