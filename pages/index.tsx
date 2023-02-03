import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import TodoItem from "../components/TodoItem";
import client from "../utils/sanityClient";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

const fetchTodos = () => {
  const query = groq`*[_type == "todo"]{
    _id,
    title,
    description,
    isComplete,
  }`;

  return client.fetch(query);
};

export default function Home() {
  const todosQuery = useQuery(["todos"], () => fetchTodos());

  if (todosQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (todosQuery.isError) {
    return <p>Error...</p>;
  }

  return (
    <main>
      {todosQuery.data.map((todo: Todo) => (
        <TodoItem key={todo._id} {...todo} />
      ))}
    </main>
  );
}
