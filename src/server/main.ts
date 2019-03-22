import { NestFactory } from '@nestjs/core';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().catch(err => console.error(err));
