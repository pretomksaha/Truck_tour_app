import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrucksModule } from './trucks/trucks.module';

@Module({
  imports: [TrucksModule, MongooseModule.forRoot('mongodb+srv://pretomksaha:aebFQKLeN5H4uRZ0@cluster0.pz80p.mongodb.net/truck_tour?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
