// // components/ReadingView.jsx
// import React from 'react';

// const ReadingView = ({ verses, bgClr, textClr }) => {
//   return (
//     <div className={`${bgClr} ${textClr} text-white px-6 py-6`}>
//       <div className="space-y-6 max-w-[1440px] mx-auto">
//         {verses.map((verse, index) => (
//           <p key={index} className="text-2xl font-arabic text-right leading-loose">
//             {verse}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReadingView;

// ReadingView.jsx
// import React from "react";

// const ReadingView = ({ verses = [], bgClr = "", textClr = "" }) => {
//   return (
//     <div className={`${bgClr} ${textClr} px-6 py-6`}>
//       <div className="mx-auto max-w-[1440px] leading-relaxed text-center font-arabic text-2xl space-y-8">
//         {verses.map((verse, index) => {
//           // robust key (prefer globally unique id if available)
//           const key =
//             verse.globalNumber ?? // API field `number` often mapped to globalNumber
//             verse.number ?? // numberInSurah if you used that field
//             verse.verseNumber ?? // alternative naming
//             index; // fallback (last resort)

//           // robust arabic text selection
//           const arabic = verse.arabicText ?? verse.arabic ?? verse.text ?? "";

//           return (
//             <div
//               key={key}
//               className="verse-item"
//               data-juz={verse.juz}
//               data-page={verse.page}
//               data-hizb={verse.hizb}
//             >
//               <p className="mb-0">
//                 {arabic} <span className="mx-2">({verse.number})</span>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ReadingView;


import React from "react";

const AyahMarker = ({ number }) => {
  return (
    <span className="ayah-number relative inline-flex items-center justify-center w-8 h-8 mx-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-yellow-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      >
        <circle cx="50" cy="50" r="45" className="fill-yellow-100" />
        <path d="M50 5 L60 20 L95 50 L60 80 L50 95 L40 80 L5 50 L40 20 Z" className="fill-none" />
      </svg>
      <span className="relative z-10 text-xs font-semibold text-yellow-800">
        {number}
      </span>
    </span>
  );
};

const ReadingView = ({ verses = [], bgClr = "", textClr = "" }) => {
  return (
    <div className={`${bgClr} ${textClr} px-6 py-6`}>
      <div
        className="mx-auto max-w-[1440px] leading-relaxed text-center font-arabic text-2xl space-y-8"
        dir="rtl"
      >
        {verses.map((verse, index) => {
          const key =
            verse.globalNumber ??
            verse.number ??
            verse.verseNumber ??
            index;

          const arabic = verse.arabicText ?? verse.arabic ?? verse.text ?? "";

          return (
            <div
              key={key}
              className="verse-item"
              data-juz={verse.juz}
              data-page={verse.page}
              data-hizb={verse.hizb}
            >
              <p className="mb-0 text-center">
                <span>{arabic}</span>
                <AyahMarker number={verse.number} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadingView;