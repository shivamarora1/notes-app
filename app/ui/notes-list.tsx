import Note from "@/app/ui/note";
export default function NotesList({ notes }: { notes: string[] }) {
  return (
    <div className="flex flex-wrap mx-3 my-3">
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
    </div>
  );
}
