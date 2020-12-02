import React from 'react';
//Import Components
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
