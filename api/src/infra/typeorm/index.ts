import { Connection, createConnection } from "typeorm";
import optionConfig from "../../configs/orm.config";

export default async (): Promise<Connection> => {
  return createConnection(optionConfig);
};
