import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  bookings: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().min(1, "Phone is required"),
          eventType: z.string().min(1, "Event type is required"),
          eventDate: z.string().min(1, "Event date is required"),
          guestCount: z.number().min(1, "Guest count must be at least 1"),
          venue: z.string().min(1, "Venue is required"),
          serviceType: z.string().min(1, "Service type is required"),
          dietaryRequirements: z.string().optional(),
          additionalDetails: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const booking = await createBooking({
            name: input.name,
            email: input.email,
            phone: input.phone,
            eventType: input.eventType,
            eventDate: input.eventDate,
            guestCount: input.guestCount,
            venue: input.venue,
            serviceType: input.serviceType,
            dietaryRequirements: input.dietaryRequirements || null,
            additionalDetails: input.additionalDetails || null,
            status: "new",
          });

          // Notify owner of new booking
          await notifyOwner({
            title: `New Booking Inquiry from ${input.name}`,
            content: `Event Type: ${input.eventType}\nDate: ${input.eventDate}\nGuests: ${input.guestCount}\nEmail: ${input.email}\nPhone: ${input.phone}`,
          });

          return { success: true, message: "Booking inquiry submitted successfully!" };
        } catch (error) {
          console.error("[Bookings] Failed to create booking:", error);
          throw new Error("Failed to submit booking inquiry");
        }
      }),
    list: publicProcedure.query(async () => {
      try {
        return await getBookings();
      } catch (error) {
        console.error("[Bookings] Failed to fetch bookings:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
