import React, { FormEvent, useState } from "react";
import styled from "styled-components";

import client from "../utils/sanityClient";

const FormContainer = styled.form`
  margin: 1.5rem;
`;

const createTodo = async (title: string, description: string) => {
  const todo = {
    _type: "todo",
    title,
    description,
  };

  try {
    const newTodo = await client.create(todo);
    console.log(`New todo created, document ID is ${newTodo._id}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(title, description);
    setTitle("");
    setDescription("");
  };

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
      <button>Add</button>
    </FormContainer>
  );
};

export default Form;
