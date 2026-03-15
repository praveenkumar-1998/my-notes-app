import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function NoteCard({ note, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.title);

  const save = () => {
    onUpdate(note.id, text);
    setEditing(false);
  };

  return (
    <div
      className="relative rounded-2xl p-5 h-[220px]"
      style={{ backgroundColor: note.color }}
    >
      {editing ? (
        <textarea
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={save}
          className="w-full h-full bg-transparent resize-none outline-none"
        />
      ) : (
        <p className="text-sm leading-relaxed">{note.title}</p>
      )}

      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
        >
          <FiEdit2 size={14} />
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
        >
          <RiDeleteBin6Line size={14} />
        </button>
      </div>
    </div>
  );
}
