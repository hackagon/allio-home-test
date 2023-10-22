import { NestFactory } from '@nestjs/core';
import setUpApplication from './common/setup';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const { logInfo, port } = setUpApplication(app);
  await app.listen(port);
  logInfo();
}
bootstrap();
