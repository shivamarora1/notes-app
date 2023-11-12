import { useState } from "react";

type AddNoteFunction = (note: string) => void;

export default function NoteForm({ addNote }: { addNote: AddNoteFunction }) {
  const [newNote, setNewNote] = useState("");
  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(newNote);
      setNewNote("");
    }
  };

  return (
    <>
      <div className='flex mx-6 my-4'>
          <input className="w-11/12 h-20 bg-blue-100 rounded-tl-md text-top rounded-bl-md"
            type="text"
            value={newNote} placeholder="enter any note here..."
            onChange={(e) => setNewNote(e.target.value)}
          ></input>
        <button
          type="button"
          className="h-20 w-1/12 rounded-br-md rounded-tr-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg px-2 py-1.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
    </>
  );
}
