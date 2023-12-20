import { RequestHandler } from "express";

/**
 * Health check endpoint
 */
const getEvent: RequestHandler = (_req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.write("data: michal");
  res.on("close", () => {
    console.log("Client closed connection");
    res.end();
  });
  // res.status(200).json({
  //     name: config.name,
  //     description: config.description,
  //     version: config.version
  // });
};

export default getEvent;
