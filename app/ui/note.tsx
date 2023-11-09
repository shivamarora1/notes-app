export default function Note({ note }: { note: string }) {
  return (
    <div className="overflow-hidden hover:overflow-y-auto w-80 h-80 bg-blue-200 p-4 my-4 mx-6 rounded-md">
      <p className="text-blue-800">{note}</p>
    </div>
  );
}
