import { RequestHandler, Response } from "express";
import { clients } from "../..";

/**
 * Echo endpoint
 */
const postRoot: RequestHandler = (req, res) => {
  const json = req.body;
  //   res.json(json);
  (clients as unknown as Response[]).forEach((r) => r.write("data:aaa\n\n"));
  res.status(200).send("Update sent successfully");
};

export default postRoot;
