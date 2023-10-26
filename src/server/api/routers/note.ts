import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { notes } from "~/server/db/schema";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";

/**
 * ZOD OBJECTS
 */

const createNoteObject = z.object({
  title: z.string(),
  details: z.string(),
  user_id: z.string(),
})

/**
 * Types
 */
type NoteProps = {
  id: string;
  title: string;
  details: string;
  user_id: string;
}

/**
 * This adds the user to the note that we are fetching.
 */
const addUserDataToNote = async (notes: NoteProps[]) => {
  const userId = notes.map((note) => note.user_id)
  const users = (
    await clerkClient.users.getUserList({
      userId: userId,
      limit: 110
    })
  ).map(filterUserForClient)

  return notes.map((note) => {
    const author = users.find((user) => user.id === note.user_id);

    if (!author) {
      console.error("AUTHOR NOT FOUND", note);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Author for note not found. Note ID ${note.id}, User ID: ${note.user_id}`
      })
    }
    if (!author.username) {
      if (!author.externalUsername) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Author has not Google Account ${author.id}`
        })
      }
      author.username = author.externalUsername
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
  createNote: publicProcedure.input(createNoteObject).mutation(async ({ ctx, input }) => {
    const newNote = await ctx.db.insert(notes).values({
      title: input.title,
      details: input.details,
      user_id: input.user_id
    })
    return newNote
  }),

  getAllNotes: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.notes.findMany({
      limit: 100,
      orderBy:[desc(notes.createdAt)]
    })
  }),

  getNotesByUserId: publicProcedure.input(z.object({ userId: z.string() })).query(async ({ ctx, input }) => {
    return ctx.db.query.notes.findMany({
      where: eq(notes.user_id, input.userId)
    })
  })
});
