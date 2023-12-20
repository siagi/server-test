import { RequestHandler, Response } from "express";
import { clients } from "../..";

/**
 * Echo endpoint
 */
const postRoot: RequestHandler = (req, res) => {
  console.log("clients", clients);
  //   console.log(req.body);
  //   const json = req.body;

  (clients as unknown as Response[]).forEach((r) =>
    r.write(`data:${JSON.stringify(req.body)}\n\n`)
  );
  res.status(200).json({ data: "success" });
};

export default postRoot;
