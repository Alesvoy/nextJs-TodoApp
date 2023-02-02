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

const TodosList = () => {
  return (
    <Main>
      <h3>Todos List</h3>
    </Main>
  );
};

export default TodosList;
