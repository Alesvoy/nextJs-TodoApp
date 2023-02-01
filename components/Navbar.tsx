import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  padding: 1rem;
  background: papayawhip;
  display: flex;
  gap: 1rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">Todo App</Link>
      <Link href="/addTodo">Add Todo</Link>
    </Nav>
  );
};

export default Navbar;
