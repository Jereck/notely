import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { desc } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { notes } from "~/server/db/schema";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";

const addUserDataToNotes = async (notes) => {
  const userId = notes.map((note) => note.user)
  const user = (
    await clerkClient.users.getUserList({
      userId: userId,
      limit: 10
    })
  ).map(filterUserForClient)

  return notes.map((note) => { 
    const author = user.find((user) => user.id === note.user_id)

    if (!author) {
      console.error("AUTHOR NOT FOUND", note);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Author for the note note found. NOTE ID: ${note.id}, USER ID: ${note.user_id}`
      });
    }
    if (!author.username) {
      if (!author.externalUsername) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Author has no Google Account: ${author.id}`
        });
      }
      author.username = author.externalUsername;
    }
    return {
      note,
      author: {
        ...author,
        username: author.username ?? "(username not found)"
      }
    }
  })
}

export const noteRouter = createTRPCRouter({
  getAllNotes: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.notes.findMany({
      limit: 100,
      orderBy:[desc(notes.createdAt)]
    })
  })

});
