import { config } from "dotenv";
import Redis from "ioredis";

config();

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = parseInt(process.env.REDIS_PORT || "6379");

export const redisClient = new Redis({
  host: redisHost,
  port: redisPort,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (error) => {
  console.error("Redis error", error);
});
