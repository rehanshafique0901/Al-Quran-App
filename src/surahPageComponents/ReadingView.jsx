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
import React from "react";

const ReadingView = ({ verses = [], bgClr = "", textClr = "" }) => {
  return (
    <div className={`${bgClr} ${textClr} px-6 py-6`}>
      <div className="mx-auto max-w-[1440px] leading-relaxed text-right font-arabic text-2xl space-y-8">
        {verses.map((verse, index) => {
          // robust key (prefer globally unique id if available)
          const key =
            verse.globalNumber ?? // API field `number` often mapped to globalNumber
            verse.number ??       // numberInSurah if you used that field
            verse.verseNumber ??  // alternative naming
            index;                // fallback (last resort)

          // robust arabic text selection
          const arabic =
            verse.arabicText ?? verse.arabic ?? verse.text ?? "";

          return (
            <div
              key={key}
              className="verse-item"
              data-juz={verse.juz}
              data-page={verse.page}
              data-hizb={verse.hizb}
            >
              <p className="mb-0">{arabic}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadingView;

