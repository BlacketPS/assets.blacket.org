import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";
import { useContainer } from "class-validator";
import { AppModule } from "./app.module";
import { LoggerService } from "./logger/logger.service";

config({ path: "../.env" });

async function bootstrap() {
	const PORT = process.env.PORT;
	if (!PORT) {
		throw new Error("PORT is not defined in environment variables:");
	}

	const app = await NestFactory.create(AppModule, { bufferLogs: true });

	const logger = app.get(LoggerService);

	app.useLogger(logger);

	app.useGlobalPipes(new ValidationPipe({
		forbidNonWhitelisted: true,
		whitelist: true,
		transform: true
	}));

	app.setGlobalPrefix("api");

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	await app.listen(PORT);
}

void bootstrap();
