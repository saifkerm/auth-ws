import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { START_PORT, APP_PREFIX } from './config/config.env';

async function buildMain() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/private-key.pem'),
  //   cert: fs.readFileSync('./secrets/public-certificate.pem'),
  // };

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APP_PREFIX);
  await app.listen(START_PORT);
}

buildMain().then(() => {
  console.log(`Microservice Authentication Started on port ${START_PORT}`);
});
