"use client";
import { useState } from "react";
import Image from "next/image";
import NotesList from "./ui/notes-list";

export default function Home() {
  const [notes, setNotes] = useState(["Note 1", "Note 2", "Note 3", "Note 4"]);
  return (
    <main>
      <NotesList notes={notes} />
    </main>
  );
}
