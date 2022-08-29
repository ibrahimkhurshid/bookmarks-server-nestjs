import { IsString, IsUrl } from "class-validator";

export class createBookmarkDto {
    @IsString()
    // @IsUrl()
    url: string
}