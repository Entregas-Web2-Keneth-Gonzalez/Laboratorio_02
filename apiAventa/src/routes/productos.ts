import { Router } from "express";
import ProductosController from "../controller/ProductosController";

const routes = Router();

routes.get("", ProductosController.getAll)
routes.get("/getOne/:id", ProductosController.getOne)
routes.post("", ProductosController.create)
routes.delete("/deleteOne/:id", ProductosController.delete)
routes.put("/update/:id", ProductosController.update)

export default routes;