// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import NavBar from "./homePageComponents/Navbar.jsx";
// import InputField from "./homePageComponents/InputField.jsx";
// import Button from "./homePageComponents/Button.jsx";
// import ReadingCard from "./homePageComponents/ReadingCard.jsx";
// import SJRbutton from "./homePageComponents/SJButton.jsx";
// import QuranInYear from "./homePageComponents/QuranInYear.jsx";
// import PageFooter from "./homePageComponents/PageFooter.jsx";
// import Theme from "./homePageComponents/Theme.jsx";

// function Home() {
//   const [search, setSearch] = useState("");
//   const [surahs, setSurahs] = useState([]);
//   const navigate = useNavigate();

//   const { toggleTheme } = Theme();

//   // Fetch surah list once
//   useEffect(() => {
//     const fetchSurahs = async () => {
//       try {
//         const res = await fetch("https://api.alquran.cloud/v1/surah");
//         const data = await res.json();
//         setSurahs(data.data); // store all 114 surahs
//       } catch (err) {
//         console.error("Failed to fetch surahs:", err);
//       }
//     };
//     fetchSurahs();
//   }, []);

//   // Filter surahs by search input
//   const filtered = surahs.filter((s) =>
//     s.englishName.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleSelect = (surah) => {
//     navigate(`/surah/${surah.number}`);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div>
//         <NavBar
//           title="Quran.com"
//           bgClr="bg-white dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//           icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
//           onIconClick={(icon) => {
//             if (icon === "fa-globe") {
//               alert("Switch Language");
//             } else if (icon === "fa-gear") {
//               alert("Open Settings");
//             } else if (icon === "fa-magnifying-glass") {
//               alert("Search something");
//             }
//           }}
//         />
//       </div>

//       {/* Input Field */}
//       <div className="bg-gray-200 dark:bg-black text-black dark:text-white flex flex-col justify-center items-center relative">
//         <h1 className="text-center text-3xl md:text-5xl font-bold py-8 select-none">
//           Quran.com
//         </h1>
//         <InputField
//           bgClr="bg-white dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//           placeholderClr="placeholder:text-gray-500 dark:placeholder:text-gray-400"
//           placeHolder="Search the Surah..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* Search Results Dropdown */}
//         {search && (
//           <ul className="absolute top-[10.5rem] bg-white dark:bg-[#1f2125] w-[85%] max-w-2xl mx-auto rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
//             {filtered.length > 0 ? (
//               filtered.map((s) => (
//                 <li
//                   key={s.number}
//                   className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-black dark:text-white"
//                   onClick={() => handleSelect(s)}
//                 >
//                   {s.englishName}{" "}
//                   <span className="text-gray-500 text-sm">{s.name}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="px-4 py-2 text-gray-500">No matches found</li>
//             )}
//           </ul>
//         )}

//         <div className="mt-6 mb-10">
//           <Button
//             bgClr="bg-gray-100 dark:bg-[#1f2125]"
//             textClr="text-black dark:text-white"
//             varient="border"
//             click={() => alert("Button Clicked!")}
//             text="Navigate Quran"
//           />
//         </div>
//       </div>

//       {/* Reading Card */}
//       <div className="bg-gray-100 dark:bg-[#1f2125] py-5">
//         <div className="max-w-[1440px] mx-auto">
//           <div className="flex justify-between px-3">
//             <h2 className="font-bold text-2xl md:text-4xl text-black dark:text-white">
//               Continue Reading
//             </h2>
//             <Button
//               textClr="text-black dark:text-white"
//               varient="unborder"
//               click={() => alert("Button Clicked!")}
//               text="My Quran"
//               className="text-sm md:text-xl"
//             />
//           </div>
//           <div className="p-5">
//             <ReadingCard />
//           </div>
//         </div>
//       </div>

//       {/* Quran In Year */}
//       <div className="bg-gray-100 dark:bg-[#1f2125] py-5">
//         <div className="max-w-[1440px] mx-auto">
//           <div className="flex justify-between px-3">
//             <h2 className="font-bold md:text-3xl text-2xl text-black dark:text-white">
//               Quran in a Year
//             </h2>
//             <Button
//               textClr="text-black dark:text-white"
//               varient="unborder"
//               click={() =>
//                 (window.location.href = "https://quran.com/calendar")
//               }
//               text={
//                 <>
//                   <i className="fa-solid fa-calendar-days"></i> Calendar
//                 </>
//               }
//               className="text-base md:text-xl"
//             />
//           </div>
//           <div className="p-5">
//             <QuranInYear
//               todayAyah="وَيُسَبِّحُ ٱلرَّعۡدُ ..."
//               Translation="The thunder glorifies His praises..."
//               Refrence="— Dr. Mustafa Khattab, The Clear Quran"
//               bgClr="bg-gray-200 dark:bg-[#1f2125]"
//               textClr="text-black dark:text-white"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SJ Button */}
//       <div>
//         <SJRbutton
//           bgClr="bg-gray-100 dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//         />
//       </div>

//       {/* Footer */}
//       <div>
//         <PageFooter
//           bgClr="bg-gray-200 dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//           darkMode={toggleTheme}
//         />
//       </div>
//     </>
//   );
// }

// export default Home;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./homePageComponents/Navbar.jsx";
import InputField from "./homePageComponents/InputField.jsx";
import Button from "./homePageComponents/Button.jsx";
import ReadingCard from "./homePageComponents/ReadingCard.jsx";
import SJRbutton from "./homePageComponents/SJButton.jsx";
import QuranInYear from "./homePageComponents/QuranInYear.jsx";
import PageFooter from "./homePageComponents/PageFooter.jsx";
import Theme from "./homePageComponents/Theme.jsx";

function Home() {
  const [search, setSearch] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [dailyAyah, setDailyAyah] = useState(null);
  const navigate = useNavigate();

  const { toggleTheme } = Theme();

  // Fetch surah list once
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const res = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await res.json();
        setSurahs(data.data);
      } catch (err) {
        console.error("Failed to fetch surahs:", err);
      }
    };
    fetchSurahs();
  }, []);

  // Filter surahs by search input
  const filtered = surahs.filter((s) =>
    s.englishName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (surah) => {
    navigate(`/surah/${surah.number}`);
  };

  // Daily random ayah (stored in localStorage)
  useEffect(() => {
    const fetchDailyAyah = async () => {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      const saved = JSON.parse(localStorage.getItem("dailyAyah"));

      if (saved && saved.date === today) {
        setDailyAyah(saved.data);
        return;
      }

      try {
        const randomAyahNum = Math.floor(Math.random() * 6236) + 1;
        const res = await fetch(
          `https://api.alquran.cloud/v1/ayah/${randomAyahNum}/editions/quran-uthmani,en.asad`
        );
        const data = await res.json();

        const arabic = data.data[0].text;
        const english = data.data[1].text;
        const surahName = data.data[0].surah.englishName;
        const surahNum = data.data[0].surah.number;
        const ayahNum = data.data[0].numberInSurah;

        const ayahObj = {
          arabic,
          english,
          reference: `— ${surahName} (${surahNum}:${ayahNum})`,
        };

        setDailyAyah(ayahObj);
        localStorage.setItem(
          "dailyAyah",
          JSON.stringify({ date: today, data: ayahObj })
        );
      } catch (err) {
        console.error("Failed to fetch daily ayah:", err);
      }
    };

    fetchDailyAyah();
  }, []);

  return (
    <>
      {/* Navbar */}
      <div>
        <NavBar
          title="Quran.com"
          bgClr="bg-white dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
          icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
          onIconClick={(icon) => {
            if (icon === "fa-globe") {
              alert("Switch Language");
            } else if (icon === "fa-gear") {
              alert("Open Settings");
            } else if (icon === "fa-magnifying-glass") {
              alert("Search something");
            }
          }}
        />
      </div>

      {/* Input Field */}
      <div className="bg-gray-200 dark:bg-black text-black dark:text-white flex flex-col justify-center items-center relative">
        <h1 className="text-center text-3xl md:text-5xl font-bold py-8 select-none">
          Quran.com
        </h1>
        <InputField
          bgClr="bg-white dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
          placeholderClr="placeholder:text-gray-500 dark:placeholder:text-gray-400"
          placeHolder="Search the Surah..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Search Results Dropdown */}
        {search && (
          <ul className="absolute top-[10.5rem] bg-white dark:bg-[#1f2125] w-[85%] max-w-2xl mx-auto rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
            {filtered.length > 0 ? (
              filtered.map((s) => (
                <li
                  key={s.number}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-black dark:text-white"
                  onClick={() => handleSelect(s)}
                >
                  {s.englishName}{" "}
                  <span className="text-gray-500 text-sm">{s.name}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No matches found</li>
            )}
          </ul>
        )}

        <div className="mt-6 mb-10">
          <Button
            bgClr="bg-gray-100 dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
            varient="border"
            click={() => alert("Button Clicked!")}
            text="Navigate Quran"
          />
        </div>
      </div>

      {/* Reading Card */}
      <div className="bg-gray-100 dark:bg-[#1f2125] py-5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between px-3">
            <h2 className="font-bold text-2xl md:text-4xl text-black dark:text-white">
              Continue Reading
            </h2>
            <Button
              textClr="text-black dark:text-white"
              varient="unborder"
              click={() => alert("Button Clicked!")}
              text="My Quran"
              className="text-sm md:text-xl"
            />
          </div>
          <div className="p-5">
            <ReadingCard />
          </div>
        </div>
      </div>

      {/* Quran In Year */}
      <div className="bg-gray-100 dark:bg-[#1f2125] py-5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between px-3">
            <h2 className="font-bold md:text-3xl text-2xl text-black dark:text-white">
              Quran in a Year
            </h2>
            <Button
              textClr="text-black dark:text-white"
              varient="unborder"
              click={() =>
                (window.location.href = "https://quran.com/calendar")
              }
              text={
                <>
                  <i className="fa-solid fa-calendar-days"></i> Calendar
                </>
              }
              className="text-base md:text-xl"
            />
          </div>
          <div className="p-5">
            {dailyAyah ? (
              <QuranInYear
                todayAyah={dailyAyah.arabic}
                Translation={dailyAyah.english}
                Refrence={dailyAyah.reference}
                bgClr="bg-gray-200 dark:bg-[#1f2125]"
                textClr="text-black dark:text-white"
              />
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Loading today’s Ayah...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SJ Button */}
      <div>
        <SJRbutton
          bgClr="bg-gray-100 dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
        />
      </div>

      {/* Footer */}
      <div>
        <PageFooter
          bgClr="bg-gray-200 dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
          darkMode={toggleTheme}
        />
      </div>
    </>
  );
}

export default Home;
