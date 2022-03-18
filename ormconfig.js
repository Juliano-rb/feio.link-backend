require("dotenv").config();

const basePath = process.env.NODE_ENV === "DEV" ? "src" : "dist";
const NODE_ENV = process.env.NODE_ENV;
const ssl = NODE_ENV === "PROD" ? true : false;

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  extra: {
    ssl: ssl,
  },
  entities: ["src/model/entity/*.ts", "dist/model/entity/*.js"],
  migrations: [`${basePath}/model/migration/*.{js,ts}`],
  subscribers: [`${basePath}/model/subscriber/*.{js,ts}`],
  cli: {
    migrationsDir: `${basePath}/model/migration`,
  },
};
