import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";
import { createBookmarkDto } from '../dtos/createBookmarkDto'

@Controller()
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    @Get()
    index() {
        return this.bookmarkService.index()
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id) {
        return this.bookmarkService.show(id)
    }


    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() body: createBookmarkDto) {
        return this.bookmarkService.create(body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id) {
        return this.bookmarkService.delete(id)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id) {
        return this.bookmarkService.update(id)
    }
}