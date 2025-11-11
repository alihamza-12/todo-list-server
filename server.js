const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ✅ Root route so Railway doesn't fail
server.get("/", (req, res) => {
  res.send("✅ JSON Server is running");
});

server.use(router);

const port = process.env.PORT || 3000;

// ✅ Must bind 0.0.0.0
server.listen(port, "0.0.0.0", () => {
  console.log("✅ JSON Server is running on port " + port);
});
