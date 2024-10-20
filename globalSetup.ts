import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

async function globalSetup(config) {
  if(process.env.test_env === undefined) {
    process.env.test_env = 'production';
  }
  dotenv.config({
    path: `./environments/.env.${process.env.test_env}`,
    override: true,
  });
}

module.exports = globalSetup;