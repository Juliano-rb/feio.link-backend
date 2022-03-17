import { Connection, createConnection } from "typeorm";

class ConnectionManager {
  private static connection: Connection | undefined;
  constructor() {}
  public static async getConnection(): Promise<Connection> {
    if (!ConnectionManager.connection) {
      ConnectionManager.connection = await createConnection();
    }
    return ConnectionManager.connection;
  }
}

export { ConnectionManager };
