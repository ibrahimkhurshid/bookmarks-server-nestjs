import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { BookmarkModule } from "./bookmark/bookmark.module";

@Module({
    imports: [TypeOrmModule.forRoot({
        database: 'bookmark.db',
        type: "sqlite",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
    }), BookmarkModule],
    controllers: [AppController]
})
export class AppModule { }