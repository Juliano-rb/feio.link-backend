import { Request, Response } from 'express'
import { Connection } from 'typeorm';
import { connectionManager } from "../Connection";
import { User } from '../entity/User';

const db = async () => {
  const connection = await connectionManager.getConnection();
  console.log("Inserting a new user into the database...");
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await connection.manager.find(User);

  return users;
  console.log("Loaded users: ", users);

  console.log("Here you can setup and run express/koa/any other framework.");

}

export class ShortenerController {
  constructor () {
    
  }

  public async hello (req: Request, res: Response): Promise<Response> {
    const users = await db()

    return res.json(users)
  }

  public async shorten (req: Request, res: Response): Promise<Response> {
    return res.json({message: "Hello Worlds"})
  }
}
