import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.DEVELOPMENT === "true" ? ".env.test" : ".env",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
