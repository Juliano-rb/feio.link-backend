import {MigrationInterface, QueryRunner} from "typeorm";

export class UrlKeywordEntity1647624186620 implements MigrationInterface {
    name = 'UrlKeywordEntity1647624186620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ugly_keyword" ("id" SERIAL NOT NULL, "keyword" character varying NOT NULL, CONSTRAINT "PK_8d3acdccf200b156704398bb5bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "url" ("shortUrlID" character varying NOT NULL, "originalUrl" character varying NOT NULL, CONSTRAINT "PK_baed7a8e9b66656e8d63f0ee8e9" PRIMARY KEY ("shortUrlID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
        await queryRunner.query(`DROP TABLE "ugly_keyword"`);
    }

}
