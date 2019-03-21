import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

const CLIENT_DIR = join(process.cwd(), 'dist/client');
applyDomino(global, join(CLIENT_DIR, 'index.html'))

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: CLIENT_DIR,
      bundle: require('../../dist/server/main.js')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
