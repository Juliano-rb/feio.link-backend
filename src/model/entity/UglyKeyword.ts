import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UglyKeyword {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  keyword!: string;
}
