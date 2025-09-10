// // SurahPage.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "./homePageComponents/Navbar.jsx";
// import Header from "./surahPageComponents/Header.jsx";
// import NavigationTabs from "./surahPageComponents/NavigationTabs.jsx";
// import SurahHeader from "./surahPageComponents/SurahHeader.jsx";
// import Verse from "./surahPageComponents/Verse.jsx";
// import PageFooter from "./homePageComponents/PageFooter.jsx";
// import ReadingView from "./surahPageComponents/ReadingView.jsx";

// import { headerData, tabs } from "./dummy data/datadummyData.jsx";
// import NavigatorButtons from "./surahPageComponents/NavigatorButtons.jsx";
// import Theme from "./homePageComponents/Theme.jsx";

// const SurahPage = () => {
//   const { number } = useParams(); // get surah number from URL
//   const { toggleTheme } = Theme();

//   const [activeTab, setActiveTab] = useState("translation");
//   const [verses, setVerses] = useState([]); // store verses from API
//   const [loading, setLoading] = useState(true);
//   const [surahInfo, setSurahInfo] = useState(null); // store surah name + translation

//   // Fetch surah verses + info when number changes
//   useEffect(() => {
//     if (!number) return;

//     const fetchSurah = async () => {
//       try {
//         setLoading(true);

//         // Arabic
//         const resArabic = await fetch(
//           `https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`
//         );
//         const dataArabic = await resArabic.json();

//         // English Translation
//         const resEnglish = await fetch(
//           `https://api.alquran.cloud/v1/surah/${number}/en.asad`
//         );
//         const dataEnglish = await resEnglish.json();


//         if (dataArabic.code === 200 && dataEnglish.code === 200) {
//           const arabicAyahs = dataArabic.data.ayahs;
//           const translationAyahs = dataEnglish.data.ayahs;

//           // merge arabic + translation
//           const merged = arabicAyahs.map((a, i) => ({
//             number: a.numberInSurah,
//             arabic: a.text,
//             translation: translationAyahs[i]?.text || "",
//           }));

//           setVerses(merged);

//           // ✅ correct surah details from API
//           const surahMeta = {
//             number: dataArabic.data.number,
//             name: dataArabic.data.name, // Arabic name
//             englishName: dataArabic.data.englishName,
//             englishNameTranslation: dataArabic.data.englishNameTranslation,
//             revelationType: dataArabic.data.revelationType,
//           };

//           // save in localStorage
//           localStorage.setItem("lastSurah", JSON.stringify(surahMeta));

//           // set for header
//           setSurahInfo({
//             name: dataArabic.data.name,
//             englishName: dataArabic.data.englishName,
//             translation: dataArabic.data.englishNameTranslation,
//             translator: "Muhammad Asad",
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching surah:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSurah();
//   }, [number]);

//   // Event handlers
//   const handleTabChange = (tabId) => setActiveTab(tabId);
//   const handleSurahInfo = () => console.log("Show surah info");
//   const handlePlayAudio = () => console.log("Play surah audio");
//   const handleVersePlay = (verseNumber) =>
//     console.log(`Play verse ${verseNumber}`);
//   const handleVerseCopy = (verseNumber) =>
//     console.log(`Copy verse ${verseNumber}`);
//   const handleVerseBookmark = (verseNumber) =>
//     console.log(`Bookmark verse ${verseNumber}`);

//   return (
//     <div>
//       {/* NAVBAR */}
//       <NavBar
//         title="Quran.com"
//         bgClr="bg-white dark:bg-[#1f2125]"
//         textClr="text-black dark:text-white"
//         icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
//         onIconClick={(icon) => {
//           if (icon === "fa-globe") alert("Switch Language");
//           else if (icon === "fa-gear") alert("Open Settings");
//           else if (icon === "fa-magnifying-glass") alert("Search something");
//         }}
//       />

//       <div className="min-h-screen bg-gray-900">
//         {/* HEADER */}
//         <Header
//           bgClr="bg-white dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//           title={surahInfo.englishName}
//           currentPage={headerData.currentPage}
//           totalPages={headerData.totalPages}
//         />

//         {/* NAV TABS */}
//         <NavigationTabs
//           bgClr="bg-white dark:bg-[#1f2125]"
//           textClr="text-black dark:text-white"
//           tabs={tabs}
//           activeTab={activeTab}
//           onTabChange={handleTabChange}
//         />

//         {/* SURAH HEADER */}
//         {surahInfo && (
//           <SurahHeader
//             bgClr="bg-white dark:bg-[#1f2125]"
//             textClr="text-black dark:text-white"
//             name={`${surahInfo.name} (${surahInfo.translation})`}
//             translation={surahInfo.translation}
//             translator={surahInfo.translator}
//             onSurahInfo={handleSurahInfo}
//             onPlayAudio={handlePlayAudio}
//           />
//         )}

//         {/* VERSES */}
//         <div className="border-t border-gray-700">
//           {loading ? (
//             <p className="text-white text-center p-4">Loading verses...</p>
//           ) : activeTab === "translation" ? (
//             verses.map((verse) => (
//               <Verse
//                 key={verse.number}
//                 bgClr="bg-white dark:bg-[#1f2125]"
//                 textClr="text-black dark:text-white"
//                 verseNumber={verse.number}
//                 arabicText={verse.arabic}
//                 translation={verse.translation}
//                 onPlay={handleVersePlay}
//                 onCopy={handleVerseCopy}
//                 onBookmark={handleVerseBookmark}
//               />
//             ))
//           ) : activeTab === "reading" ? (
//             <ReadingView
//               bgClr="bg-white dark:bg-[#1f2125]"
//               textClr="text-black dark:text-white"
//               verses={verses.map((v) => v.arabic)}
//             />
//           ) : null}

//           {/* NAVIGATION + FOOTER */}
//           <NavigatorButtons
//             bgClr="bg-white dark:bg-[#1f2125]"
//             textClr="text-black dark:text-white"
//           />
//           <PageFooter
//             bgClr="bg-white dark:bg-[#1f2125]"
//             textClr="text-black dark:text-white"
//             darkMode={toggleTheme}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SurahPage;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./homePageComponents/Navbar.jsx";
import Header from "./surahPageComponents/Header.jsx";
import NavigationTabs from "./surahPageComponents/NavigationTabs.jsx";
import SurahHeader from "./surahPageComponents/SurahHeader.jsx";
import Verse from "./surahPageComponents/Verse.jsx";
import PageFooter from "./homePageComponents/PageFooter.jsx";
import ReadingView from "./surahPageComponents/ReadingView.jsx";

import { tabs } from "./dummy data/datadummyData.jsx";
import NavigatorButtons from "./surahPageComponents/NavigatorButtons.jsx";
import Theme from "./homePageComponents/Theme.jsx";

const SurahPage = () => {
  const { number } = useParams(); // get surah number from URL
  const { toggleTheme } = Theme();

  const [activeTab, setActiveTab] = useState("translation");
  const [verses, setVerses] = useState([]); // store verses from API
  const [loading, setLoading] = useState(true);
  const [surahInfo, setSurahInfo] = useState(null); // store surah details
  const [currentMeta, setCurrentMeta] = useState({
    juz: null,
    page: null,
    hizb: null,
  });

  // Fetch surah verses + info when number changes
  useEffect(() => {
    if (!number) return;

    const fetchSurah = async () => {
      try {
        setLoading(true);

        // Arabic
        const resArabic = await fetch(
          `https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`
        );
        const dataArabic = await resArabic.json();

        // English Translation
        const resEnglish = await fetch(
          `https://api.alquran.cloud/v1/surah/${number}/en.asad`
        );
        const dataEnglish = await resEnglish.json();

        if (dataArabic.code === 200 && dataEnglish.code === 200) {
          const arabicAyahs = dataArabic.data.ayahs;
          const translationAyahs = dataEnglish.data.ayahs;

          // merge arabic + translation with metadata
          const merged = arabicAyahs.map((a, i) => ({
            number: a.numberInSurah,
            arabic: a.text,
            translation: translationAyahs[i]?.text || "",
            juz: a.juz,
            page: a.page,
            hizb: a.hizbQuarter, // <-- hizbQuarter from API
          }));

          setVerses(merged);

          // unique pages, juz and hizbQuarter sets
          const pages = [...new Set(arabicAyahs.map((a) => a.page))];
          const juzSet = [...new Set(arabicAyahs.map((a) => a.juz))];
          const hizbQuarters = [...new Set(arabicAyahs.map((a) => a.hizbQuarter))];

          // ✅ surah metadata including totals for pages/juz/hizbQuarter
          const surahMeta = {
            number: dataArabic.data.number,
            name: dataArabic.data.name,
            englishName: dataArabic.data.englishName,
            englishNameTranslation: dataArabic.data.englishNameTranslation,
            revelationType: dataArabic.data.revelationType,
            totalPages: pages.length,
            totalJuz: juzSet.length,
            totalHizbQuarters: hizbQuarters.length,
          };

          localStorage.setItem("lastSurah", JSON.stringify(surahMeta));

          setSurahInfo({
            ...surahMeta,
            translator: "Muhammad Asad",
          });

          // set initial visible meta from first verse (pre-scroll)
          if (merged.length > 0) {
            setCurrentMeta({
              juz: merged[0].juz,
              page: merged[0].page,
              hizb: merged[0].hizb,
            });
          }
        }
      } catch (err) {
        console.error("Error fetching surah:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [number]);

  // Track visible verse with IntersectionObserver (topmost intersecting)
  useEffect(() => {
    if (!verses.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // pick the top-most visible element (smallest boundingClientRect.top)
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const topMost = visible[0];
          const { juz, page, hizb } = topMost.target.dataset;
          setCurrentMeta({
            juz: Number(juz),
            page: Number(page),
            hizb: Number(hizb),
          });
        }
      },
      { threshold: [0.5, 0.75] } // verse considered active when about half-visible
    );

    const verseEls = document.querySelectorAll(".verse-item");
    verseEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [verses]);

  // Event handlers
  const handleTabChange = (tabId) => setActiveTab(tabId);
  const handleSurahInfo = () => console.log("Show surah info");
  const handlePlayAudio = () => console.log("Play surah audio");
  const handleVersePlay = (verseNumber) => console.log(`Play verse ${verseNumber}`);
  const handleVerseCopy = (verseNumber) => console.log(`Copy verse ${verseNumber}`);
  const handleVerseBookmark = (verseNumber) => console.log(`Bookmark verse ${verseNumber}`);

  return (
    <div>
      {/* NAVBAR */}
      <NavBar
        title="Quran.com"
        bgClr="bg-white dark:bg-[#1f2125]"
        textClr="text-black dark:text-white"
        icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
        onIconClick={(icon) => {
          if (icon === "fa-globe") alert("Switch Language");
          else if (icon === "fa-gear") alert("Open Settings");
          else if (icon === "fa-magnifying-glass") alert("Search something");
        }}
      />

      <div className="min-h-screen bg-gray-900">
        {/* HEADER */}
        <Header
          bgClr="bg-white dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
          title={`${surahInfo?.englishName} (${surahInfo?.name})`}
          currentPage={currentMeta.page}
          totalPages={surahInfo?.totalPages}
          currentSurah={surahInfo?.number}
          juz={currentMeta.juz}
          hizb={currentMeta.hizb}
          totalJuz={surahInfo?.totalJuz}
          totalHizbQuarters={surahInfo?.totalHizbQuarters}
        />

        {/* NAV TABS */}
        <NavigationTabs
          bgClr="bg-white dark:bg-[#1f2125]"
          textClr="text-black dark:text-white"
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* SURAH HEADER */}
        {surahInfo && (
          <SurahHeader
            bgClr="bg-white dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
            name={`${surahInfo.name} (${surahInfo.englishNameTranslation})`}
            translation={surahInfo.englishNameTranslation}
            translator={surahInfo.translator}
            onSurahInfo={handleSurahInfo}
            onPlayAudio={handlePlayAudio}
          />
        )}

        {/* VERSES */}
        <div className="border-t border-gray-700">
          {loading ? (
            <p className="text-white text-center p-4">Loading verses...</p>
          ) : activeTab === "translation" ? (
            verses.map((verse) => (
              <Verse
                key={verse.number}
                verseNumber={verse.number}
                arabicText={verse.arabic}
                translation={verse.translation}
                juz={verse.juz}
                page={verse.page}
                hizb={verse.hizb}
                onPlay={handleVersePlay}
                onCopy={handleVerseCopy}
                onBookmark={handleVerseBookmark}
                bgClr="bg-white dark:bg-[#1f2125]"
                textClr="text-black dark:text-white"
              />
            ))
          ) : activeTab === "reading" ? (
            <ReadingView
              bgClr="bg-white dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              verses={verses}
            />
          ) : null}

          {/* NAVIGATION + FOOTER */}
          <NavigatorButtons
            bgClr="bg-white dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
          />
          <PageFooter
            bgClr="bg-white dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
            darkMode={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default SurahPage;
