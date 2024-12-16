
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './admin/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DB_STRING,
      }),
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }