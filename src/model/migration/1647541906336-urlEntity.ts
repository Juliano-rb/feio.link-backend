import {MigrationInterface, QueryRunner} from "typeorm";

export class urlEntity1647541906336 implements MigrationInterface {
    name = 'urlEntity1647541906336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("shortedUrlID" varchar PRIMARY KEY NOT NULL, "originalUrl" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
