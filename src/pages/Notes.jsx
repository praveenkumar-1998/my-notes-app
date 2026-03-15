import { useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteItem from "../components/NoteItem";
import TopBar from "../components/TopBar";

export default function Notes({ notes }) {
  const [query, setQuery] = useState("");

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <TopBar showCreate />

      <div className="mt-6">
        <div className="bg-[#1b2333] rounded-xl px-6 py-4 mb-5">
          <h1 className="text-xl font-semibold">My Notes</h1>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <SearchBar value={query} onChange={setQuery} />
        
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.length === 0 && (
            <p className="text-gray-400">No Notes</p>
          )}

          {filteredNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}
