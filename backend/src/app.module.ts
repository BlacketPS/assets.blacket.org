// import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";

import { PrismaModule } from "./prisma/prisma.module";
import { LoggerService } from "./logger/logger.service";

@Module({
	imports: [PrismaModule],
	providers: [LoggerService]
})
export class AppModule { }
