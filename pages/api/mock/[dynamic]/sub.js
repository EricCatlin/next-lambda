export default async (req, res) => {
  const { dynamic } = req.query;
  res.status(200).json({
    hello: "world",
    source: "api/mock/[dynamic]/sub",
    dynamic
  });
};
