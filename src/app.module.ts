import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalaryModule } from './salary/salary.module';
import { ConfigModule} from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SalaryModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
