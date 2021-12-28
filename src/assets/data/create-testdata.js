(() => {
  const pages = 49;
  const samplesPerPage = 2;
  const data = {
    title: "CajonBasics",
    pages: [...Array(pages).keys()].map((p) => ({
      number: p + 1,
      samples: [...Array(samplesPerPage).keys()].map((s) => ({
        name: `CajonBasics${(p * samplesPerPage + s + 1).toLocaleString(
          "de-AT",
          {
            minimumIntegerDigits: 2,
          }
        )}.mp3`,
      })),
    })),
  };
  console.log("module.exports = " + JSON.stringify(data, null, 2));
})();
