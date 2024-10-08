import winston from "winston";

const logger = winston.cratelogger({});
    transport: [new winston.transport.console()],

test("test logger", () => {
    logger.log("info", "test logger");
});

