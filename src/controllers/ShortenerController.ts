import { Request, Response } from "express";
import { ConnectionManager } from "../database/Connection";
import { User } from "../database/entity/User";

const db = async () => {
  const connection = await ConnectionManager.getConnection();
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
};

export class ShortenerController {
  constructor() {}

  public async hello(req: Request, res: Response): Promise<Response> {
    const users = await db();

    return res.json(users);
  }

  public async shorten({ body }: Request, res: Response): Promise<Response> {
    const { url } = body;
    return res.json({ message: url });
  }
}
