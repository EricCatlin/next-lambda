// Demonstrates NextJS Ability to read query params by returning 
// Query payload as response 
export default (req, res) => {
  const { query } = req;
  res.status(200).json({
    source: "api/mock/query",
    query
  });
};
