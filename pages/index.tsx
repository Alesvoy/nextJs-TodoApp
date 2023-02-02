import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";

import TodosList from "../components/TodosList";
import client from "../utils/sanityClient";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

type AppProps = {
  todos: Todo[];
};

export default function Home({ todos }: AppProps) {
  return (
    <main>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Complete: {todo.isComplete ? "Yes" : "No"}</p>
        </div>
      ))}
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
  return {
    props: {
      todos: data,
    },
  };
}
