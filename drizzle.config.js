/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:zNL1TiAnO8uQ@ep-crimson-boat-a51qo1bs.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
};
