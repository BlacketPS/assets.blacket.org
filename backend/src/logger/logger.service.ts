import { ConsoleLogger, Injectable } from "@nestjs/common";
import { ConsoleLogLevel } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LoggerService extends ConsoleLogger {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	private async save(level: ConsoleLogLevel, message: any) {
		try {
			await this.prisma.consoleLog.create({
				data: {
					level,
					message: typeof message === "string" ? message : JSON.stringify(message)
				}
			});
		} catch (err) {
			super.error("Failed to persist log:", err);
		}
	}

	log(message: any, context?: string) {
		super.log(message, context);
		void this.save(ConsoleLogLevel.LOG, message);
	}

	error(message: any, stack?: string, context?: string) {
		super.error(message, stack, context);
		void this.save(ConsoleLogLevel.ERROR, message);
	}

	warn(message: any, context?: string) {
		super.warn(message, context);
		void this.save(ConsoleLogLevel.WARN, message);
	}

	debug(message: any, context?: string) {
		super.debug(message, context);
		void this.save(ConsoleLogLevel.DEBUG, message);
	}

	verbose(message: any, context?: string) {
		super.verbose(message, context);
		void this.save(ConsoleLogLevel.VERBOSE, message);
	}
}
