import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Humble Superhero API')
    .setDescription('API to manage superheroes with humility scores.')
    .setVersion('1.0')
    .addTag('superheroes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
  console.log('Swagger Docs available at: http://localhost:3000/api-docs');
}
bootstrap();
