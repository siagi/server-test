import app from "./app";
import config from "./config";

export const clients: unknown[] = [];

app.listen(config.port, () => {
  console.log(`🚀 ${config.name} ${config.version} 🚀`);
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`
  );
});
