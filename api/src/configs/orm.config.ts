import { ConnectionOptions } from "typeorm";

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${__dirname}/../../../../data/line.sqlite`,
  entities: [`${__dirname}/../entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/../migrations`,
    entitiesDir: `${__dirname}/../entities`,
  },
  logging: true,
};

export default options;
