import { Router } from "express";
import { ShortenerController } from "./controllers/ShortenerController";

const shortenerController = new ShortenerController();

const routes = Router();

// shorten
routes.post("/", (req, res) => shortenerController.shorten(req, res));

// undo shorten and redirect
routes.get("/list", (req, res) => shortenerController.list(req, res));

export { routes };
