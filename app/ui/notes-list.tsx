import Note from "@/app/ui/note";

export type removeNoteType = (noteIdx: number) => void;

export default function NotesList({
  notes,
  removeNote,
}: {
  notes: string[];
  removeNote: removeNoteType;
}) {
  return (
    <div className="flex flex-wrap mx-3 my-3">
      {notes.map((note, idx) => (
        <Note key={idx} note={note} removeNote={()=>{removeNote(idx)}}/>
      ))}
    </div>
  );
}
