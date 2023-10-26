"use client";

import React, { useState } from 'react';

import NotesList from "./_components/notes/notes-list";
import NotesPage from "./_components/notes/note-page";
import SideMenu from "./_components/side-menu";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";


export default function Home() {
  const [isNoteSelected, setIsNoteSelected] = useState(null)
  const { isLoaded, isSignedIn, user } = useUser();

  if (!user) return <div>Loading...</div>
  const { data: notes } = api.notes.getNotesByUserId.useQuery({ userId: user.id })

  console.log("isNoteSelected: ", isNoteSelected)

  return (
    <main className="grid md:grid-cols-12 grid-cols-1 h-screen">
      <div className="col-span-1 md:col-span-3 border">
        <SideMenu />
      </div>
      <div className="col-span-1 md:col-span-3 border">
        <NotesList notes={notes} setIsNoteSelected={setIsNoteSelected} />
      </div>
      <div className="col-span-1 md:col-span-6 border">
        <NotesPage />
      </div>
    </main>
  );
}
