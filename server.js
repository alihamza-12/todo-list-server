import { createApp } from "json-server/lib/app.js";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { Observer } from "json-server/lib/observer.js";

const adapter = new JSONFile("db.json");
const observer = new Observer(adapter);
const db = new Low(observer, {});
await db.read();

const app = createApp(db, { static: [] });

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log("JSON Server is running on port " + port);
});
