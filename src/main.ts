import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Study API')
    .setDescription('これは勉強用です。')
    .setVersion('1.0')
    .build()

  // create swagger document
  const document = SwaggerModule.createDocument(app, config)

  // setup swagger
  SwaggerModule.setup('api', app, document)
  
  await app.listen(3000);
}
bootstrap();
