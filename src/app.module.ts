import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookmarkModule } from "./bookmark/bookmark.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        database: 'bookmark.db',
        type: "sqlite",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
    }), BookmarkModule, AuthModule, UsersModule],
    controllers: [AppController]
})
export class AppModule { }