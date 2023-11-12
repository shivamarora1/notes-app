"use client";
import { useState } from "react";
import Image from "next/image";
import NotesList from "./ui/notes-list";
import NoteForm from "./ui/note-form";

export default function Home() {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (newNote: string) => {
    setNotes([...notes, newNote]);
  };
  const removeNote =(noteIdx: number) =>{
    const newNotes = [...notes];
    newNotes.splice(noteIdx,1)
    setNotes(newNotes);
  }
  return (
    <main>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} removeNote={removeNote}/>
    </main>
  );
}


// add ui to add note