import { useRouter } from "next/router";
import styled from "styled-components";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

const Main = styled.section`
  margin: 1.5rem;
`;

type TodoItemProps = {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

const TodoItem = ({ _id, title, description, isComplete }: TodoItemProps) => {
  const router = useRouter();

  return (
    <Main>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Complete: {isComplete ? "Yes" : "No"}</p>
      <button onClick={() => router.push(`/todo/${_id}`)}>View Todo</button>
    </Main>
  );
};

export default TodoItem;
