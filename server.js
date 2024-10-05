// import jsonServer from "json-server";
// import cors from "cors";
// import { join } from "path";

// const server = jsonServer.create();
// const router = jsonServer.router(join(process.cwd(), "db.json")); // Use process.cwd() para garantir o caminho correto
// const middlewares = jsonServer.defaults();

// server.use(cors());
// server.use(middlewares);

// server.delete("/contacts/:id", (req, res) => {
//   const { id } = req.params;

//   if (id === "1") {
//     return res.status(403).json({ message: "Contact with id 1 cannot be deleted" });
//   }

//   router.db.get("contacts").remove({ id: Number(id) }).write();
//   res.status(200).json({ message: "Contact deleted" });
// });

// server.use(router);
// server.listen(4000, () => {
//   console.log("JSON Server is running on port 4000");
// });
