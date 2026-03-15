import { Link } from "react-router-dom";

export default function NoteItem({ note }) {
  return (
    <Link
      to={`/edit/${note.id}`}
      className="
        block bg-white rounded-xl p-4
        shadow-sm transition
        active:bg-gray-100
      "
    >
      {/* Date */}
      <p className="text-xs text-gray-400 mb-1">
        {note.date}
      </p>

      {/* Title */}
      <h3 className="text-gray-900 font-medium leading-snug">
        {note.title.length > 60
          ? note.title.slice(0, 60) + "…"
          : note.title}
      </h3>

      {/* Optional preview (uncomment if you want content preview) */}
      {note.details && (
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {note.details}
        </p>
      )}
    </Link>
  );
}
