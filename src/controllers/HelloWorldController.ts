import { Request, Response } from 'express'

export class HelloWorldController {
  constructor () {
  }

  public async hello (req: Request, res: Response): Promise<Response> {
    return res.json({message: "Hello World"})
  }
}
