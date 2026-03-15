import { Link } from "react-router-dom";

export default function NoteItem({ note }) {
  return (
    <Link
      to={`/edit/${note.id}`}
      className="
        bg-[#1b2333]
        border border-[#2c364a]
        rounded-xl p-4
        hover:border-purple-500/50
        transition
      "
    >
      <h3 className="font-semibold mb-1">{note.title}</h3>

      {note.details && (
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {note.details}
        </p>
      )}

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">
          Personal
        </span>
        <span>{note.date}</span>
      </div>
    </Link>
  );
}
