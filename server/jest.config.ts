import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testTimeout: 15000,
};

export default config;
