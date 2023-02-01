import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";

import client from "../utils/sanityClient";

import TodosList from "../components/TodosList";

export default function Home() {
  return (
    <main>
      <TodosList />
    </main>
  );
}
