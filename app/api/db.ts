import { Config, connect } from "@planetscale/database";

const config: Config = {
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
};

function getConnection() {
  if (!config.host || !config.username || !config.password) {
    throw new Error("Missing database configuration");
  }
  return connect(config);
}
