export const handleLoadlLocales = messages => {
  return {
    type: "UPDATE_LOCALES",
    payload: messages
  };
};

export const styleClassStore = nr => {
  return {
    type: "BUTTON_CLASS",
    payload: nr
  };
};

export const projectStore = nr => {
  return {
    type: "PROJECT_ID",
    payload: nr
  };
};
