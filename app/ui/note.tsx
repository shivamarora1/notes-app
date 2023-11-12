"use client";
export default function Note({
  note,
  removeNote,
}: {
  note: string;
  removeNote: ()=>void;
}) {
  return (
    <div className="note-card relative">
      <button
        className="absolute top-0 right-0 p-2 cursor-pointer"
        onClick={(e) => {
          removeNote();
        }}
      >
        <svg
          fill="#1f2937"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 512 512"
        >
          <polygon
            points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 
	256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 "
          />
          <path
            d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
          />
        </svg>
      </button>
      <p className="text-blue-800">{note}</p>
    </div>
  );
}
