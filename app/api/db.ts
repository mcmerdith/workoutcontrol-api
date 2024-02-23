import { Client, Config } from "@planetscale/database";
import fs from "fs";
import path from "path";

const config: Config = {
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
};

// Guard clauses for environment variables

if (!config.host) {
  throw new Error("DATABASE_HOST is not set");
}

if (!config.username) {
  throw new Error("DATABASE_USERNAME is not set");
}

if (!config.password) {
  throw new Error("DATABASE_PASSWORD is not set");
}

const database = new Client(config);
export default database;

async function getDropCommand(): Promise<string> {
  return await fs.promises.readFile(
    path.join(process.cwd(), "schema", "schema_drop.sql"),
    "utf-8"
  );
}

async function getCreateCommand(): Promise<string> {
  return await fs.promises.readFile(
    path.join(process.cwd(), "schema", "schema_create.sql"),
    "utf-8"
  );
}

export async function dropSchema() {
  await database.execute(await getDropCommand());
}

export async function createSchema() {
  await database.execute(await getCreateCommand());
}

export async function resetSchema() {
  await dropSchema();
  await createSchema();
}
