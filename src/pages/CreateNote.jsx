import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../hooks/useCreateDate";
import TopBar from "../components/TopBar";

export default function CreateNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const date = useCreateDate();

  const save = () => {
    if (!title.trim()) return;
    setNotes(prev => [{ id: uuid(), title, details, date }, ...prev]);
    navigate("/");
  };

  return (
    <>
      <TopBar />

      <section className="mt-10 max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Create New Note</h1>

        <div className="bg-[#1b2333] border border-[#2c364a] rounded-xl p-6">
          <input
            placeholder="Title"
            className="input-dark w-full mb-4"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows="10"
            placeholder="Start typing your note here..."
            className="input-dark w-full mb-6"
            onChange={(e) => setDetails(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button onClick={() => navigate("/")} className="btn-secondary">
              Cancel
            </button>

            {/* Only show "Create Note" if title and details have content */}
            {title.trim() && details.trim() && (
              <button onClick={save} className="btn-primary">
                Create Note
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
