import { redisClient } from "../config/redisConnection";

export const getCache = async (key: string) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Redis GET error", error);
    return null;
  }
};

export const setCache = async (key: string, value: any, ttl: number) => {
  try {
    await redisClient.set(key, JSON.stringify(value), "EX", ttl);
  } catch (error) {
    console.error("Redis SET error", error);
  }
};
