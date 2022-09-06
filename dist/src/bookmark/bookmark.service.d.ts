import { Repository } from "typeorm";
import { Bookmark } from "./bookmark.entity";
import { createBookmarkDto } from "../dtos/createBookmarkDto";
export declare class BookmarkService {
    private readonly bookmarkRepository;
    constructor(bookmarkRepository: Repository<Bookmark>);
    index(): Promise<Bookmark[]>;
    show(id: number): Promise<Bookmark[]>;
    create(bookmarkDto: createBookmarkDto): void;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number): string;
    search(query: string): Promise<Bookmark[]>;
}
