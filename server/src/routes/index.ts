import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
import ChatGroupUserController from "../controllers/ChatGroupUserController.js";
import ChatsController from "../controllers/ChatsController.js";
import LocationController from "../controllers/LocationController.js";
import UserSearchController from "../controllers/UserSearchController.js";

const router = Router();

// Auth Route
router.post("/auth/login", AuthController.login);

//User location route
router.post("/details", authMiddleware, LocationController.addlocation);

//User Search route
router.get("/search", UserSearchController.search)

// Chat Group Route
router.post("/chat-group", authMiddleware, ChatGroupController.store);
router.get("/chat-group", authMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", ChatGroupController.show);
router.put("/chat-group/:id", authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", authMiddleware, ChatGroupController.destroy);

// Chat Group Users
router.get("/chat-group-users", ChatGroupUserController.index);
router.post("/chat-group-users", ChatGroupUserController.store);

// Chat Group Message
router.get("/chats/:groupId", ChatsController.index);

export default router;