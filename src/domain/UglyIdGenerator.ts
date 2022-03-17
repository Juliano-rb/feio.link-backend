import { ConnectionManager } from "../model/Connection";
import { UglyKeyword } from "../model/entity/UglyKeyword";
export class UglyIdGenerator {
  private generateRandomPart(length: number): string {
    const randomText = Math.random().toString(36).substring(2, 12);

    return randomText.substring(0, length);
  }
  async generateRandomUglyId(): Promise<string> {
    const connection = await ConnectionManager.getConnection();
    const keyWordsRepository = await connection.getRepository(UglyKeyword);

    const keyWords = await (
      await keyWordsRepository.find()
    ).map((k) => k.keyword);

    if (keyWords.length == 0) return "_" + this.generateRandomPart(3);

    const index = Math.floor(Math.random() * keyWords.length);
    return keyWords[index] + "_" + this.generateRandomPart(3);
  }
}
