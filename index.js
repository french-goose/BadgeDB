export default {
  goosemodHandlers: {
    onImport: () => {
      function badge(name, img, id, isRound) {
        goosemod.patcher.userBadges.patch(name, img, () => [id], () => { }, { round: isRound })
      }
      fetch("https://badgedb.pages.dev/index.json")
        .then(response => response.json())
        .then(data => data.array.forEach(json => { badge(json.name, json.img, json.id, json.isRound) }));
    },
    onRemove: () => {
      console.log("TODO: Remove badges");
    },
  },
};
