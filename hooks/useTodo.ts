import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import client from "../utils/sanityClient";

const fetchTodo = (id: string) => {
  const query = groq`*[_type == "todo" && _id == "${id}"]{
    _id,
    title,
    description,
    isComplete,
  }`;

  return client.fetch(query);
};

const useTodo = (id: string) => {
  return useQuery(["todo", id], () => fetchTodo(id));
};

export { fetchTodo, useTodo };
