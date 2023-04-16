export const filterByPath = path => a => {
  switch (path) {
    case "important":
      return a.important;
    case "today":
      return a.type === "today" || a.type === "everyday";
    case "everyday":
      return a.type === "everyday";
    default:
      return null;
  }
};
