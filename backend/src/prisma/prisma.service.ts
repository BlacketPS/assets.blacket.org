import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	private readonly logger = new Logger(PrismaService.name);

	constructor() {
		super({
			log: [
				{
					emit: "event",
					level: "query"
				},
				{
					emit: "event",
					level: "error"
				},
				{
					emit: "event",
					level: "info"
				},
				{
					emit: "event",
					level: "warn"
				}
			],
			errorFormat: "pretty"
		});
	}

	async onModuleInit() {
		await this.$connect()
			.then(() => this.logger.log("Database ready"))
			.catch((err) => this.logger.error("Database connection error", err));
	}

	async onModuleDestroy() {
		await this.$disconnect()
			.then(() => this.logger.log("Database disconnected"))
			.catch((err) => this.logger.error("Database disconnection error", err));
	}
}
