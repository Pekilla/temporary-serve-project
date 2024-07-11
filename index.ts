import { createServer } from "http";
import handler from "serve-handler";

const server = createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, { "public": "./public" });
});

const PORT = 2500;

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
