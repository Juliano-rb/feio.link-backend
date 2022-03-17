import { Router } from "express";
import { ShortenerController } from "./controllers/ShortenerController";

const shortenerController = new ShortenerController();

const routes = Router();

// shorten
routes.post("/", (req, res) => shortenerController.shorten(req, res));

// undo shorten and redirect
routes.get("/:urlId", (req, res) => shortenerController.redirect(req, res));

// list all only in dev
if (process.env.NODE_ENV === "DEV")
  routes.get("/list/a", (req, res) => shortenerController.list(req, res));

export { routes };
