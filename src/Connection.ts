import {Connection, createConnection} from "typeorm";

class ConnectionManager {
    private connection: Connection | undefined;
    constructor (){
    }
    public async getConnection(): Promise<Connection> {
        if(!this.connection){
            this.connection = await createConnection()
        }
        return this.connection
    }
}

const connectionManager = new ConnectionManager()

export {connectionManager}