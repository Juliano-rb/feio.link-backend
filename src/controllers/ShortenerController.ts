import { Request, Response } from "express";
import { ParsedQs } from "qs";
import { UglyIdGenerator } from "../domain/UglyIdGenerator";
import { ConnectionManager } from "../model/Connection";
import { Url } from "../model/entity/Url";

export class ShortenerController {
  public async list(req: Request, res: Response): Promise<Response> {
    const connection = await ConnectionManager.getConnection();
    const urlRepository = connection.getRepository(Url);
    const urls = await urlRepository.find();

    return res.json(urls);
  }

  public async shorten({ body }: Request, res: Response): Promise<Response> {
    const connection = await ConnectionManager.getConnection();
    const urlRepository = connection.getRepository(Url);

    const uglyIdGenerator = new UglyIdGenerator();

    const url = new Url();
    url.originalUrl = body.url;
    url.shortUrlID = await uglyIdGenerator.generateRandomUglyId();
    const savedUrl = await urlRepository.save(url);

    return res.json(savedUrl);
  }

  public async redirect(req: Request, res: Response) {
    const { urlId } = req.params;

    const connection = await ConnectionManager.getConnection();
    const urlRepository = connection.getRepository(Url);

    try {
      const foundUrl = await urlRepository.findOneOrFail(urlId);
      return res.redirect(302, `http://${foundUrl.originalUrl}`);
    } catch (error) {
      return res.sendStatus(404);
    }
  }
}
