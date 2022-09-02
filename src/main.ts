import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { AppGuard } from './app.guard';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalGuards(new AppGuard())

  const config = new DocumentBuilder()
    .setTitle('Bookmarks Api')
    .setDescription('The Crud Api for bookmark resource')
    .addTag('Bookmarks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 3001);
}
bootstrap();
