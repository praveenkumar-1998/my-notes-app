import { CiSearch } from "react-icons/ci";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}  // ✅ FIX HERE
        placeholder="Search notes..."
        className="
          w-full h-10
          rounded-lg
          bg-[#1b2333]
          pl-11 pr-4
          text-sm text-gray-200
          placeholder-gray-400
          border border-[#2c364a]
          focus:outline-none
          focus:ring-2 focus:ring-purple-500/40
        "
      />
    </div>
  );
}
