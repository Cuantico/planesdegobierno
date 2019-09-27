const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "PROJECT_ID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default projectReducer;
