import { Request, Response } from "express";
import { ParsedQs } from "qs";
import { EntityNotFoundError } from "typeorm";
import { UglyIdGenerator } from "../domain/UglyIdGenerator";
import { ConnectionManager } from "../model/Connection";
import { Url } from "../model/entity/Url";
import isURL from "validator/lib/isURL";

export class ShortenerController {
  private cleanUrl(url: string) {
    return url.replace(/https?:\/\//, "");
  }
  public async list(req: Request, res: Response): Promise<Response> {
    const connection = await ConnectionManager.getConnection();
    const urlRepository = connection.getRepository(Url);
    const urls = await urlRepository.find();

    return res.json(urls);
  }

  public async shorten({ body }: Request, res: Response): Promise<Response> {
    try {
      if (!body.url) return res.sendStatus(400);
      if (!isURL(body.url)) return res.sendStatus(400);

      const connection = await ConnectionManager.getConnection();
      const urlRepository = connection.getRepository(Url);
      const uglyIdGenerator = new UglyIdGenerator();

      const url = new Url();
      url.originalUrl = this.cleanUrl(body.url);
      url.shortUrlID = await uglyIdGenerator.generateRandomUglyId();
      const saved = await urlRepository.save(url);

      return res.json(saved);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }

  public async redirect(req: Request, res: Response) {
    try {
      const { urlId } = req.params;

      const connection = await ConnectionManager.getConnection();
      const urlRepository = connection.getRepository(Url);

      const foundUrl = await urlRepository.findOneOrFail(urlId);
      return res.redirect(302, `http://${foundUrl.originalUrl}`);
    } catch (error) {
      console.log(error);
      if (error instanceof EntityNotFoundError) return res.sendStatus(404);

      return res.sendStatus(500);
    }
  }
}
