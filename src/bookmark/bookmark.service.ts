import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Bookmark } from "./bookmark.entity";
import { createBookmarkDto } from "./createBookmarkDto";
const { parser } = require('html-metadata-parser')


@Injectable()
export class BookmarkService {
    constructor(
        @InjectRepository(Bookmark)
        private readonly bookmarkRepository: Repository<Bookmark>
    ) { }

    index() {
        return this.bookmarkRepository.find()
    }

    create(bookmarkDto: createBookmarkDto) {
        const titlePromise = (async () => {
            return parser(bookmarkDto.url);
        })();
        console.log(titlePromise)
        titlePromise.then(
            (res) => {
                const title = res['meta']['title']
                const newBookmark = {
                    url: bookmarkDto.url,
                    title: title
                }
                return this.bookmarkRepository.save(newBookmark)
            }, (rej) => {
                const title = "error getting"
                const newBookmark = {
                    url: bookmarkDto.url,
                    title: title
                }
                return this.bookmarkRepository.save(newBookmark)
            })
    }

    delete(id: number) {
        return `Delete ${id}`
    }

    update(id: number) {
        return `update ${id}`
    }
}