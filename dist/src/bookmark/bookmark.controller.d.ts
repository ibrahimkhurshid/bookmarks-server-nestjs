import { BookmarkService } from "./bookmark.service";
import { createBookmarkDto } from '../dtos/createBookmarkDto';
export declare class BookmarkController {
    private bookmarkService;
    constructor(bookmarkService: BookmarkService);
    index(req: any): Promise<import("./bookmark.entity").Bookmark[]>;
    search(url: any): Promise<import("./bookmark.entity").Bookmark[]>;
    show(id: any): Promise<import("./bookmark.entity").Bookmark[]>;
    create(body: createBookmarkDto): void;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
    update(id: any): string;
}
