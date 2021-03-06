import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedCopmlimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listTagController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/sent", ensureAuthenticated, listUserSentComplimentsController.handle);
router.get("/users/compliments/received", ensureAuthenticated, listUserReceivedComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
