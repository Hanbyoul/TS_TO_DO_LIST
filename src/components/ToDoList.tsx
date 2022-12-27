import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoSelector from "./ToDoSelector";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  console.log(toDos, "toDoSelector");
  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <ToDoSelector />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoList;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  h1 {
    margin-top: 1em;
  }
`;
