import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Bookmark } from "./bookmark.entity";
import { createBookmarkDto } from "../dtos/createBookmarkDto";
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

    show(id: number) {
        return this.bookmarkRepository.find({
            where: {
                id: id
            }
        })
    }

    create(bookmarkDto: createBookmarkDto) {
        const titlePromise = (async () => {
            return parser(bookmarkDto.url);
        })();
        titlePromise.then(
            (res) => {
                const title = res['meta']['title']
                const newBookmark = {
                    url: bookmarkDto.url,
                    title: title
                }
                console.log(newBookmark)

                return this.bookmarkRepository.save(newBookmark)
            }, (rej) => {
                const title = "Loading..."
                const newBookmark = {
                    url: bookmarkDto.url,
                    title: title
                }
                console.log(newBookmark)
                this.bookmarkRepository.save(newBookmark)
                return `$Error: ${rej} :: {newBookmark}`
            })
    }

    delete(id: number) {
        return this.bookmarkRepository.delete(id)
    }

    update(id: number,) {
        return `update ${id}`
    }

    search(query: string) {
        return this.bookmarkRepository.find({
            where: {
                url: Like(`%${query}%`)
            }
        })
    }
}