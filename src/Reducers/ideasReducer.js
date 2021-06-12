const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "go to brazil",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "go to thailand",
      isDone: false,
    },
  ],
};

export default function ideasReducer(state = initialState, action) {
  // eslint-disable-next-line
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
