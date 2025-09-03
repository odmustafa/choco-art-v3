import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Example table - replace with your own schema
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
});
