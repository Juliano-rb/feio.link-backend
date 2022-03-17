import {MigrationInterface, QueryRunner} from "typeorm";

export class UrlAndKeywordsEntity1647544530993 implements MigrationInterface {
    name = 'UrlAndKeywordsEntity1647544530993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ugly_keyword" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "keyword" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "url" ("shortUrlID" varchar PRIMARY KEY NOT NULL, "originalUrl" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "url"`);
        await queryRunner.query(`DROP TABLE "ugly_keyword"`);
    }

}
