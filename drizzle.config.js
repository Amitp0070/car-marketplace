/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://account:T0hVBiz5DRqn@ep-crimson-boat-a51qo1bs.us-east-2.aws.neon.tech/Car-marketcity?sslmode=require',
  },
};
