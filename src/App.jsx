import { HashRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [notes, setNotes] = useLocalStorage("notes", []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#070c16] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route path="/create" element={<CreateNote setNotes={setNotes} />} />
            <Route
              path="/edit/:id"
              element={<EditNote notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}