import React from 'react';

const Listshow = ({ Todos, dispatch }) => {
  return (
    <div className="mt-6  max-w-3xl w-full ml-56 px-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <ul className="space-y-3">
        {Todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-start bg-white/20 backdrop-blur-md border border-white/30 text-white  px-4 py-3 rounded-lg shadow-lg"
          >
            <span
              className={`flex-1 break-words overflow-auto  font-bold pr-4 ${
                todo.completed ? 'line-through text-black' : ''
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch({ type: 'TODODELETE', payload: todo.id })}
              className="text-red-500 mr-4 hover:text-red-700 text-2xl font-bold leading-none shrink-0"
              aria-label="Delete todo"
              title="Delete"
            >
              &times;
            </button>

            <button
              onClick={() => dispatch({ type: 'TOGGLETODO', payload: todo.id })}
              className="text-[#ffcc00] font-bold"
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listshow;



