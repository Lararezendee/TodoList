// import { ToDoItem } from "./ToDoItem";

// export function TodoList({ todos }) {
//   return (
//     <ul className="list">
//       {todos.length === 0 && "No Todos"}
//       {todos.map(todo) => {
//         return <ToDoItem {...todo} key={todo.id} />
//             // id={todo.id}
//             // completed={todo.completed}
//             // title={todo.title}
//       })}
//     </ul>
//   )
// }

import { ToDoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.lenght === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
