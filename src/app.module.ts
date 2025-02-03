import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://anwaysomani:testuser01@nestcluster.8sgq3.mongodb.net/?retryWrites=true&w=majority&appName=nestcluster', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
