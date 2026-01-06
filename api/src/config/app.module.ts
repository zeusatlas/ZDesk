import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
  ],
})
export class AppModule {}
