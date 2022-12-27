import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "./atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const { TO_DO, DOING, DONE, DELETE } = Categories;
  const onClick = (changeCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      if (changeCategory === DELETE) {
        const deleteToDo = [...oldToDos];
        deleteToDo.splice(targetIndex, 1);
        return deleteToDo;
      } else {
        const changeToDo = { text, id, category: changeCategory };
        const newToDos = [...oldToDos];
        newToDos.splice(targetIndex, 1, changeToDo);
        return newToDos;
      }
    });
  };

  return (
    <LIST>
      <ToDotext>{text}</ToDotext>
      <ToDobtns>
        {category !== DOING && (
          <ToDobtn onClick={() => onClick(DOING)}>Doing</ToDobtn>
        )}
        {category !== TO_DO && (
          <ToDobtn onClick={() => onClick(TO_DO)}>ToDo</ToDobtn>
        )}
        {category !== DONE && (
          <ToDobtn onClick={() => onClick(DONE)}>DONE</ToDobtn>
        )}
        {category !== DELETE && (
          <ToDobtn onClick={() => onClick(DELETE)}>DELETE</ToDobtn>
        )}
      </ToDobtns>
    </LIST>
  );
};

export default ToDo;

const LIST = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

const ToDotext = styled.span`
  font-size: 14px;
  font-weight: 400;
  background-color: powderblue;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-left: 1em;
`;

const ToDobtns = styled.div`
  display: flex;
`;

const ToDobtn = styled.button`
  width: 55px;
  height: 50px;
  font-size: 10px;
`;
