import Note from "@/app/ui/note";
export default function NotesList({ notes }: { notes: string[] }) {
  return (
    <div>
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
    </div>
  );
}
