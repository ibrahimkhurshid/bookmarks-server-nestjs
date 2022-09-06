"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bookmark_entity_1 = require("./bookmark.entity");
const { parser } = require('html-metadata-parser');
let BookmarkService = class BookmarkService {
    constructor(bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }
    index() {
        return this.bookmarkRepository.find();
    }
    show(id) {
        return this.bookmarkRepository.find({
            where: {
                id: id
            }
        });
    }
    create(bookmarkDto) {
        const titlePromise = (async () => {
            return parser(bookmarkDto.url);
        })();
        titlePromise.then((res) => {
            const title = res['meta']['title'];
            const newBookmark = {
                url: bookmarkDto.url,
                title: title
            };
            console.log(newBookmark);
            return this.bookmarkRepository.save(newBookmark);
        }, (rej) => {
            const title = "Loading...";
            const newBookmark = {
                url: bookmarkDto.url,
                title: title
            };
            console.log(newBookmark);
            this.bookmarkRepository.save(newBookmark);
            return `$Error: ${rej} :: {newBookmark}`;
        });
    }
    delete(id) {
        return this.bookmarkRepository.delete(id);
    }
    update(id) {
        return `update ${id}`;
    }
    search(query) {
        return this.bookmarkRepository.find({
            where: {
                url: (0, typeorm_2.Like)(`%${query}%`)
            }
        });
    }
};
BookmarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bookmark_entity_1.Bookmark)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookmarkService);
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map