import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [text, setText] = useState('');

  // ✅ Handle form submit
  const HandleSubmit = (e) => {
    e.preventDefault(); // ❗ Fixed typo here

    // ✅ Skip if input is empty or only spaces
    if (!text.trim()) {
      return;
    }

    // ✅ Send action to reducer
    dispatch({ type: 'TodoADD', payload: text });

    // ✅ Clear the input field
    setText('');
  };

  return (
 
    <div >
      
     
      <form
        onSubmit={HandleSubmit}
        className="flex w-full justify-center items-center gap-3 mt-4"
      >
        {/* ✅ Input field for todo text */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          className="m-12 w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />

       
        <button
          type="submit"
          className="px-4 w-36 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
