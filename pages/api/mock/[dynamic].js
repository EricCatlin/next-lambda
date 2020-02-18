// Demonstrates NextJS Ability to read path params by returning 
// params payload as response 
export default (req, res) => {
  const { dynamic } = req.query;
  res.status(200).json({
    hello: "world",
    source: "api/mock/:dynamic",
    dynamic
  });
};
