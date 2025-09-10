import React, { useState, useEffect } from "react";
import SurahCard from "./SurahCard";
import {Link} from "react-router-dom";

function Juz({ bgClr, textClr }) {
  const [juzs, setJuzs] = useState([]);

  useEffect(() => {
    let results = [];
    function fetchJuz(i) {
      if (i > 30) return; // stop after Juz 30

      setTimeout(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${i}/quran-uthmani`)
          .then((res) => res.json())
          .then((data) => {
            const surahs = data.data.surahs
              ? Object.values(data.data.surahs).map((s) => ({
                  number: s.number,
                  name: s.englishName,
                  meaning: s.englishNameTranslation,
                  nameArabic: s.name,
                }))
              : [];

            results.push({ juzNumber: i, surahs });
            setJuzs([...results]); // update state (append new juz)
            fetchJuz(i + 1); // fetch next Juz
          })
          .catch((err) => {
            console.error(`Failed to fetch Juz ${i}:`, err);
            fetchJuz(i + 1); // continue even if one fails
          });
      }, 200); // small delay to avoid rate-limit
    }
    fetchJuz(1); // Start with Juz 1
  }, []);

  return (
    <div className={`${bgClr} ${textClr} p-4`}>
      <div className="grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-4 max-w-[1440px] mx-auto">
        {juzs.map((juz) => (
          <div
            key={juz.juzNumber}
            className={`${bgClr} h-fit rounded-md p-2 sm:p-6`}
          >
            <div className="flex justify-between items-center border-b border-gray-600 mb-5">
              <h2 className="text-lg font-semibold">Juz {juz.juzNumber}</h2>
              <a href="#" className="text-sm hover:underline">
                Read Juz
              </a>
            </div>

            <div className="space-y-4">
              {juz.surahs.map((surah) => (
              <Link key={`${juz.juzNumber}-${surah.number}`} to={`/surah/${surah.number}`}>
                <SurahCard
                  key={`${juz.juzNumber}-${surah.number}`}
                  number={surah.number}
                  name={surah.name}
                  meaning={surah.meaning}
                  nameArabic={surah.nameArabic}
                  bg={bgClr}
                  text={textClr}
                  />
                  </Link>  
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Juz;
