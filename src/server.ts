import "reflect-metadata";
import express from "express";
import "express-async-errors";

import { handleError } from "./middlewares/handleError";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(handleError);

app.listen(3000, () => {
	console.log("Server is running! 🚀");
});
