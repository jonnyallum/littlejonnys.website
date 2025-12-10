import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  mysqlEnum,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).notNull().default("user"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .default(sql`(now())`)
    .onUpdateNow(),
  lastSignedIn: timestamp("lastSignedIn")
    .notNull()
    .default(sql`(now())`),
});

export type InsertUser = typeof users.$inferInsert;

export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  eventType: varchar("eventType", { length: 100 }).notNull(),
  eventDate: varchar("eventDate", { length: 20 }).notNull(),
  guestCount: int("guestCount").notNull(),
  venue: text("venue").notNull(),
  serviceType: varchar("serviceType", { length: 255 }).notNull(),
  dietaryRequirements: text("dietaryRequirements"),
  additionalDetails: text("additionalDetails"),
  status: mysqlEnum("status", [
    "new",
    "contacted",
    "confirmed",
    "completed",
    "cancelled",
  ])
    .notNull()
    .default("new"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .default(sql`(now())`)
    .onUpdateNow(),
});

export type InsertBooking = typeof bookings.$inferInsert;
