import express from "express";
import getRoot from "../controllers/root/getRoot";
import postRoot from "../controllers/root/postRoot";
import getEvent from "../controllers/root/getEvent";

const root = express.Router();

root.get("/", getRoot);
root.get("/event", getEvent);
root.post("/", postRoot);

export default root;
