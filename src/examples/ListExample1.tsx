import { useCallback, useEffect, useState } from "react";
import { List, Item } from "../components";

// Todo-переписать логику с корректным key
const initialTodos = [
  "Купить хлеб",
  "Положить хлеб в хлебницу",
  "Купить колбасу",
  "Положить колбасу в пасть коту",
];

export const ListExample1 = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log(value, todos)
  });

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    // is needed to be fixed
    // todos.push(value)
    // setTodos(todos)

    setTodos([value, ...todos])
  }

  const handleDeleteFirstTodo = () => {
    // is needed to be implemented
  }



  const handleAddTodoMiddle = () => {
    const middle = todos.length / 2;

    const arrFirst = todos.slice(0, middle);
    const arrSecond = todos.slice(middle);

    setTodos([...arrFirst, value, ...arrSecond]);
  };

  const handleAddTodoLast = () => {
    setTodos([...todos, value]);
  }



  // const handleDeleteFirstTodo = () => {
  //   const resTodos = todos.slice(1, todos.length);
  //   setTodos(resTodos);
  // }

  const handleDeleteLastTodo = () => {
    const resTodos = todos.slice(0, todos.length - 1);
    setTodos(resTodos);
  }

  return (
    <>
      <h2>List & Keys</h2>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        ></form>
        <input value={value} onInput={handleChangeField} />

        <button onClick={handleAddTodo}>add first</button>
        <button onClick={handleAddTodoMiddle}>add middle</button>
        <button onClick={handleAddTodoLast}>add last</button>

        <button onClick={handleDeleteFirstTodo}>delete first</button>
        <button onClick={handleDeleteLastTodo}>delete last</button>
      </div>
      <hr />
      <List>
        {todos.map((todo) => (
          <Item>{todo}</Item>
        ))}
      </List>
    </>
  );
};
