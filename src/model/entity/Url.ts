import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Url {
  @PrimaryColumn()
  shortedUrlID!: string;

  @Column()
  originalUrl!: string;
}
