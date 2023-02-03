import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";

import client from "../utils/sanityClient";

const FormContainer = styled.form`
  margin: 1.5rem;
`;

type Todo = {
  _type: "todo";
  title: string;
  description: string;
};

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const mutation = useMutation({
    mutationFn: (todo: Todo) => {
      return client.create(todo);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (mutation.isLoading) {
    return <p>Adding todo...</p>;
  }

  if (mutation.isError) {
    return <p>Could not add todo</p>;
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          mutation.mutate({ _type: "todo", title, description });
          setTitle("");
          setDescription("");
        }}
      >
        Add
      </button>
    </FormContainer>
  );
};

export default Form;
