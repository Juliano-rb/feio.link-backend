import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Url {
  @PrimaryColumn()
  shortUrlID!: string;

  @Column()
  originalUrl!: string;
}
