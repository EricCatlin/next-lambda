export default (req, res) => {
  res.status(200).json({
    hello: "world",
    source: "api/mock/sync"
  });
};
