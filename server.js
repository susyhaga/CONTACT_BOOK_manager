import jsonServer from "json-server";
import cors from "cors";
import { join } from "path";

const server = jsonServer.create();
const router = jsonServer.router(join(process.cwd(), "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

// Endpoint para deletar contatos
server.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  // Verifica se o contato a ser deletado é o de id 1
  if (id === "1") {
    return res.status(403).json({ message: "Contact with id 1 cannot be deleted" });
  }

  // Remove o contato e verifica se a remoção foi bem-sucedida
  const result = router.db.get("contacts").remove({ id: Number(id) }).write();

  if (result.changes === 0) {
    return res.status(404).json({ message: "Contact not found" });
  }

  res.status(200).json({ message: "Contact deleted" });
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running on port 4000");
});
