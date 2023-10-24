import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { desc } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { notes } from "~/server/db/schema";


export const noteRouter = createTRPCRouter({
  getAllNotes: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.notes.findMany({
      limit: 100,
      orderBy:[desc(notes.createdAt)]
    })
  })

});
