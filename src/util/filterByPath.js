export const filterByPath = (a, path) => {
  switch (path) {
    case "important":
      return a.important;
    case "today":
      return a.type === "today" || a.type === "everyday";
    case "everyday":
      console.log(a, path);
      return a.type === "everyday";
    default:
      return null;
  }
};
