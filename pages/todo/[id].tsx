import { dehydrate, QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useTodo } from "../../hooks/useTodo";
import { fetchTodos } from "../../hooks/useTodos";

import client from "../../utils/sanityClient";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

export default function Todo() {
  const router = useRouter();
  const id = router.query["id"] as string;
  const { isLoading, isError, data } = useTodo(id);
  const mutation = useMutation({
    mutationFn: (id: string) => {
      return client.delete(id);
    },
  });

  if (mutation.isLoading) {
    return <p>Deleting todo...</p>;
  }

  if (mutation.isError) {
    return <p>Could not delete todo</p>;
  }

  if (mutation.isSuccess) {
    router.push("/");
  }

  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={() => {
          mutation.mutate(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
