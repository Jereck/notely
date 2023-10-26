"use client";

import React from 'react'
import dayjs from 'dayjs';
import NotesListHeader from '../notes-list-header'

type NotesProps = {
  id: number;
  title: string | null;
  createdAt: Date;
  details: string | null;
  updatedAt: Date | null;
  user_id: string | null;
}[] | undefined

const NotesList = ({ notes, setIsNoteSelected }: { notes: NotesProps, setIsNoteSelected: any }) => {
  return (
    <div>
      <NotesListHeader />
      <div className="cursor-pointer">
        { notes?.map((note) => (
          <button 
            key={ note.id }
            className="border p-2 flex flex-col w-full hover:bg-gray-600"
            onClick={() => {
              setIsNoteSelected(note.id)
            }}
          >
            <div>
              <p className="text-lg">{ note.title }</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{ dayjs(note.createdAt).format('MM/DD/YY') }</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default NotesList