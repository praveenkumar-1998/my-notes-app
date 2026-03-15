import { Link } from "react-router-dom";

export default function TopBar({ showCreate }) {
  return (
    <header className="flex items-center justify-between h-14">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-purple-400">▢</span>
        NoteTaking
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-300">
        <span>Welcome, user</span>

        {showCreate && (
          <Link
            to="/create"
            className="bg-purple-600 hover:bg-purple-500 px-3 py-1.5 rounded-md text-xs"
          >
            + New Note
          </Link>
        )}

        
      </div>
    </header>
  );
}
