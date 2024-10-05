import jsonServer from "json-server";
import cors from "cors";
import { join } from "path";

const server = jsonServer.create()
const router = jsonServer.router(join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

server.use(cors()); // Middleware CORS
server.use(middlewares);

// Impedir deleção do id 1
server.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  if (id === "1") {
    return res.status(403).json({ message: "Contact with id 1 cannot be deleted" });
  }

  router.db.get("contacts").remove({ id: Number(id) }).write();
  res.status(200).json({ message: "Contact deleted" });
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
