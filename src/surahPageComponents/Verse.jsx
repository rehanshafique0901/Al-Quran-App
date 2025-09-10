// // inside a React component, e.g., VerseContainer.jsx
// import React, { useEffect, useState } from 'react';
// import Verse from './Verse';

// function VerseContainer({ surahNumber }) {
//   const [verses, setVerses] = useState([]);

//   useEffect(() => {
//     async function fetchVerses() {
//       const res = await fetch(
//         `https://api.alquran.cloud/v1/surah/${surahNumber}/quran-uthmani,en.asad`
//       );
//       const json = await res.json();
//       if (json.code === 200) {
//         const data = json.data.ayahs.map((ayah) => ({
//           verseNumber: ayah.numberInSurah,
//           arabicText: ayah.text,
//           translation: ayah.text,     // from en.asad edition
//         }));
//         setVerses(data);
//       }
//     }
//     fetchVerses();
//   }, [surahNumber]);

//   return (
//     <>
//       {verses.map((v) => (
//         <Verse
//           key={v.verseNumber}
//           verseNumber={v.verseNumber}
//           arabicText={v.arabicText}
//           translation={v.translation}
//           onPlay={() => {}}
//           onCopy={() => {}}
//           onBookmark={() => {}}
//           bgClr="bg-gray-800"
//           textClr="text-white"
//         />
//       ))}
//     </>
//   );
// }

// export default VerseContainer;
// components/Verse.jsx
// import React from 'react';
// import {
//   DocumentDuplicateIcon,
//   BookmarkIcon,
//   PlayIcon,
//   ChatBubbleOvalLeftIcon,
//   EllipsisVerticalIcon,
// } from '@heroicons/react/24/outline';

// const Verse = ({ verseNumber, arabicText, translation, onPlay, onCopy, onBookmark, bgClr, textClr }) => {
//   return (
//     <div className={`${bgClr} ${textClr} px-6 py-6`} >
//       <div className="flex items-start space-x-4 mx-auto max-w-[1440px] border-t-[1px] border-gray-500">
//         {/* ICONS - LEFT SIDE */}
//         <div className="flex-shrink-0">
//           <div className="flex flex-col space-y-4 text-gray-500">
//             <button
//               onClick={() => onCopy(verseNumber)}
//               className="p-2 hover:text-white transition-colors"
//               title="Copy verse"
//             >
//               <DocumentDuplicateIcon className="h-5 w-5" />
//             </button>

//             <button
//               onClick={() => onBookmark(verseNumber)}
//               className="p-2 hover:text-white transition-colors"
//               title="Bookmark verse"
//             >
//               <BookmarkIcon className="h-5 w-5" />
//             </button>

//             <button
//               onClick={() => onPlay(verseNumber)}
//               className="p-2 hover:text-white transition-colors"
//               title="Play verse"
//             >
//               <PlayIcon className="h-5 w-5" />
//             </button>

//             <button
//               className="p-2 hover:text-white transition-colors"
//               title="Comment"
//             >
//               <ChatBubbleOvalLeftIcon className="h-5 w-5" />
//             </button>

//             <button
//               className="p-2 hover:text-white transition-colors"
//               title="More options"
//             >
//               <EllipsisVerticalIcon className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         {/* VERSE CONTENT */}
//         <div className="flex-1">


//           {/* Arabic text */}
//           <div className="text-right mb-6">
//             <p className="text-2xl font-arabic leading-relaxed mb-2">
//               {arabicText}
//             </p>
//           </div>


//           {/* Translation */}
//           <div className="text-left">
//             <p className="leading-relaxed mb-4">
//               {translation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Verse;



import React from "react";
import {
  DocumentDuplicateIcon,
  BookmarkIcon,
  PlayIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const Verse = ({
  verseNumber,
  arabicText,
  translation,
  juz,
  page,
  hizb,
  onPlay,
  onCopy,
  onBookmark,
  bgClr,
  textClr,
}) => {
  return (
    <div
      className={`verse-item ${bgClr} ${textClr} px-6 py-6`}
      data-juz={juz}
      data-page={page}
      data-hizb={hizb}
    >
      <div className="flex items-start space-x-4 mx-auto max-w-[1440px] border-t-[1px] border-gray-500">
        {/* ICONS - LEFT SIDE */}
        <div className="flex-shrink-0">
          <div className="flex flex-col space-y-4 text-gray-500">
            <button
              onClick={() => onCopy(verseNumber)}
              className="p-2 hover:text-white transition-colors"
              title="Copy verse"
            >
              <DocumentDuplicateIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => onBookmark(verseNumber)}
              className="p-2 hover:text-white transition-colors"
              title="Bookmark verse"
            >
              <BookmarkIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => onPlay(verseNumber)}
              className="p-2 hover:text-white transition-colors"
              title="Play verse"
            >
              <PlayIcon className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:text-white transition-colors"
              title="Comment"
            >
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:text-white transition-colors"
              title="More options"
            >
              <EllipsisVerticalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* VERSE CONTENT */}
        <div className="flex-1">
          {/* Arabic text */}
          <div className="text-right mb-6">
            <p className="text-2xl font-arabic leading-relaxed mb-2">
              {arabicText}
            </p>
          </div>

          {/* Translation */}
          <div className="text-left">
            <p className="leading-relaxed mb-4">{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verse;
