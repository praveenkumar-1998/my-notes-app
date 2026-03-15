import { useParams, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../hooks/useCreateDate";
import TopBar from "../components/TopBar";

export default function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === id);

  const [title, setTitle] = useState(note?.title || "");
  const [details, setDetails] = useState(note?.details || "");
  const date = useCreateDate();

  if (!note) return <p className="mt-20 text-center text-gray-400">Note not found</p>;

  const save = () => {
    // Extra safety check
    if (!title.trim() || !details.trim()) return;

    setNotes(notes.map((n) => (n.id === id ? { ...n, title, details, date } : n)));
    navigate("/");
  };

  const remove = () => {
    setNotes(notes.filter((n) => n.id !== id));
    navigate("/");
  };

  return (
    <>
      <TopBar />

      <section className="mt-10 max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Edit Note</h1>

        <div className="bg-[#1b2333] border border-[#2c364a] rounded-xl p-6">
          <input
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="input-dark w-full mb-4"
          />

          <textarea
            rows="10"
            value={details}
            placeholder="Note details..."
            onChange={(e) => setDetails(e.target.value)}
            className="input-dark w-full mb-6"
          />

          <div className="flex justify-between items-center">
            <button onClick={remove} className="text-red-400 text-xl hover:text-red-300 transition-colors">
              <RiDeleteBin6Line />
            </button>

            <div className="flex gap-3">
              <button onClick={() => navigate("/")} className="btn-secondary">
                Cancel
              </button>
              
              {/* Option 2: Conditional Rendering */}
              {title.trim() && details.trim() && (
                <button onClick={save} className="btn-primary">
                  Update Note
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}