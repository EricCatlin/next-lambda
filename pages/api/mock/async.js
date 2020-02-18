export default async (req, res) => {
  // Await a 3 second delay, simualting a slow network call or expensive process
  await new Promise((res, rej) => setTimeout(() => res(), 3000));
  res.status(200).json({
    hello: "world",
    source: "api/mock/async"
  });
};
