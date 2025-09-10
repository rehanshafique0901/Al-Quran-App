import React from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = ({
  title,
  currentPage,
  currentSurah,
  bgClr,
  textClr,
  juz,
  hizb,
}) => {
  return (
    <header className={`${bgClr} ${textClr} sticky top-0 z-50 shadow-md`}>
      {/* Header content */}
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Surah Title (left) */}
        <h1 className="text-lg font-semibold">{title}</h1>

        {/* Details (right) */}
        <p className="text-sm text-gray-400 flex items-center space-x-2">
          {juz && <span>Juz {juz}</span>}
          {hizb && (
            <>
              <span>•</span>
              <span>Hizb {hizb}</span>
            </>
          )}
          {currentPage && (
            <>
              <span>•</span>
              <span>Page {currentPage}</span>
            </>
          )}
        </p>
      </div>

      {/* Scroll progress bar */}
      <ScrollProgressBar
        bgClr="bg-teal-500 dark:bg-[#1f2125]"
        resetTrigger={currentSurah}
      />
    </header>
  );
};

export default Header;
