import { ADD_TASK, CHANGE_IS_DONE, EDIT_TASK } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Climb Mountain Everest",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Swim in the Great Barrier Reef",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Go to Hawaii",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Visit the great wall of china",
      isDone: false,
    },
  ],
};

function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_IS_DONE: {
      return {
        todos: state.todos.map((item) =>
          item.id === payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    }
    case EDIT_TASK: {
      return {
        todos: state.todos.map((item) =>
          item.id === payload.id ? { ...item, task: payload.taskText } : item
        ),
      };
    }
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), task: payload, isDone: false },
        ],
      };
    }
    default:
      return state;
  }
}

export default todosReducer;
