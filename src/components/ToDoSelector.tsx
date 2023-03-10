import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "./atoms";

const ToDoSelector = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const { TO_DO, DOING, DONE } = Categories;
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select value={category} onInput={onInput}>
      <option value={TO_DO}>To Do</option>
      <option value={DOING}>Doing</option>
      <option value={DONE}>Done</option>
    </select>
  );
};

export default ToDoSelector;
