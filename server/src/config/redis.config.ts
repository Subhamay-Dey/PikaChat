
import { Redis } from "ioredis";
import "dotenv/config";

const redis = new Redis(process.env.REDIS_URL || "rediss://modest-labrador-16866.upstash.io:6379", {
    password: process.env.REDIS_PASSWORD || "AUHiAAIjcDE3N2FjYzU1N2NmYTE0MGY5YTQyM2VhNWJlY2E3YWEwYXAxMA",
    tls: {}  // Required for Upstash (ensures secure connection)
});

export default redis;
