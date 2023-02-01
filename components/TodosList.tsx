import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Link from "next/link";
import styled from "styled-components";

import client from "../utils/sanityClient";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

const Main = styled.section`
  margin: 1.5rem;
`;

const TodosList = () => {
  const query = groq`*[_type == "todo"]{
    _id,
    title,
    description,
    isComplete,
  }`;

  const todosQuery = useQuery(["todos"], () => client.fetch(query));

  if (todosQuery.isLoading) return <p>Loading...</p>;
  if (todosQuery.isError) return <p>Error...</p>;

  return (
    <Main>
      {todosQuery.data.map((todo: Todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.isCompleted ? "Complete" : "Not Complete"}</p>
        </div>
      ))}
    </Main>
  );
};

export default TodosList;
