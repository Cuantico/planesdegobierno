const initState = {
  button: "btn btn-primary",
  buttonsIcon: "icon-th-large",
  article: "col-xs-12 article-wrapper"
};

const classReducer = (state = initState, action) => {
  switch (action.type) {
    case "BUTTON_CLASS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default classReducer;
