import React, { useState } from "react";

/**
 * Left navigation panel (surah / juz / page / verse).
 * This component is designed to render inside a fixed left column (w-72).
 */
export default function SurahNavigator({
  surahs = [],
  totalJuz = 30,
  totalPages = 604,
  onNavigate = () => {},
  bgClr,
  textClr,
}) {
  const [tab, setTab] = useState("surah");

  return (
    <div className={`h-full flex flex-col ${textClr}`}>
      {/* Tabs */}
      <div className={`flex justify-around border-b border-gray-700 text-sm font-medium bg-[#141617]`}>
        {["Surah", "Juz", "Page", "Verse"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t.toLowerCase())}
            className={`px-3 py-3 w-full ${
              tab === t.toLowerCase()
                ? `${textClr} border-b-2 border-white`
                : "text-gray-400 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className={`p-3 overflow-y-auto flex-1 ${bgClr}`}>
        {tab === "surah" && (
          <ul className="divide-y divide-gray-700">
            {surahs.length === 0 && (
              <li className="text-gray-400 px-2 py-4">No surahs provided</li>
            )}
            {surahs.map((s, i) => (
              <li
                key={i}
                className="py-3 px-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => onNavigate({ type: "surah", value: s })}
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">
                    {i + 1}. {s.englishName}
                  </div>
                  <div className="text-lg font-arabic">{s.arabicName}</div>
                </div>
                <div className="text-xs text-gray-400">
                  {s.translation} • Juz {s.juz} • Page {s.page}
                </div>
              </li>
            ))}
          </ul>
        )}

        {tab === "juz" && (
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: totalJuz }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate({ type: "juz", value: i + 1 })}
                className="bg-gray-800 py-2 rounded text-sm hover:bg-gray-700"
              >
                Juz {i + 1}
              </button>
            ))}
          </div>
        )}

        {tab === "page" && (
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: Math.min(totalPages, 200) }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate({ type: "page", value: i + 1 })}
                className="bg-gray-800 py-2 rounded text-xs hover:bg-gray-700"
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div className="space-y-2">
            <input
              id="nav-surah"
              type="number"
              placeholder="Surah #"
              className="w-full px-3 py-2 bg-gray-800 rounded"
            />
            <input
              id="nav-verse"
              type="number"
              placeholder="Verse #"
              className="w-full px-3 py-2 bg-gray-800 rounded"
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const s =
                    Number(document.getElementById("nav-surah").value) || 1;
                  const v =
                    Number(document.getElementById("nav-verse").value) || 1;
                  onNavigate({ type: "verse", value: { surah: s, verse: v } });
                }}
                className="bg-blue-600 px-3 py-2 rounded"
              >
                Go
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
