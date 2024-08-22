import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

import SwitchTheme from "../components/SwitchTheme";

export default function Home() {
  return (
    <Container maxW="7xl">
      <SwitchTheme />
      <AddTodo />
      <TodoList />
    </Container>
  );
}
