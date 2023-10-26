"use client";

import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { api } from '~/trpc/react';

const CreateNote = () => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const { mutate, isLoading } = api.notes.createNote.useMutation({
    onSuccess: () => {
      setTitle("")
      setDetails("")
    },
    onError: (e) => {
      console.log("Error create note: ", e.message)
    }
  })

  if (!user) return null

  return (
    <div className="flex flex-col p-8 gap-2">
      <input 
        placeholder="Title"
        className="grow bg-transparent border p-2"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Details"
        className="grow bg-transparent border p-2"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button onClick={() => mutate({
        title: title,
        details: details,
        user_id: user.id
      })}>Submit</button>
    </div>
  )
}

export default CreateNote