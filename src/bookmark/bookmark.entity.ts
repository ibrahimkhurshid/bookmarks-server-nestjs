import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bookmark {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    title: string
    @BeforeInsert() async convert() {
        this.title = this.title.toUpperCase()
    }

}