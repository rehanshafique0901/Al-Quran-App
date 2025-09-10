import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ReadingCard({ bgClr, textClr }) {
  const [lastSurah, setLastSurah] = useState(null);
  
 // Load lastSurah from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem("lastSurah");

    if (stored) {
      setLastSurah(JSON.parse(stored));
    } else {
      // ✅ Fetch Surah 1 dynamically if no lastSurah
      const fetchFirstSurah = async () => {
        try {
          const res = await fetch("https://api.alquran.cloud/v1/surah/1");
          const data = await res.json();

          if (data.code === 200) {
            const surahMeta = {
              number: data.data.number,
              name: data.data.name, // Arabic
              englishName: data.data.englishName,
              englishNameTranslation: data.data.englishNameTranslation,
              revelationType: data.data.revelationType,
            };

            setLastSurah(surahMeta);
            localStorage.setItem("lastSurah", JSON.stringify(surahMeta));
          }
        } catch (err) {
          console.error("Error fetching Surah 1:", err);
        }
      };

      fetchFirstSurah();
    }
  }, []);

  // if (!lastSurah) return null; // loading state could also be added

  return (
    <div
      className={`max-w-full lg:max-w-[50%] rounded-xl py-3 px-6 flex flex-col space-y-4 ${bgClr} ${textClr}`}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Arabic Surah Name */}
      <h2 className="text-3xl text-left font-arabic">{lastSurah.name}</h2>

      <div className="flex justify-between items-center">
        {/* English Name + Translation */}
        <p className="text-sm md:text-lg font-semibold">
          {lastSurah.number}. {lastSurah.englishName}{" "}
          <span className="text-xs font-normal">
            ({lastSurah.englishNameTranslation})
          </span>
        </p>

        {/* Begin Button */}
        <Link to={`/surah/${lastSurah.number}`}>
          <Button
            bgClr="bg-black dark:bg-white"
            textClr="text-white dark:text-black"
            varient="border"
            text="Begin"
            className="h-8 w-16 flex justify-center items-center text-sm"
          />
        </Link>
      </div>
    </div>
  );
}

export default ReadingCard;
