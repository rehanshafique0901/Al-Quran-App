
import React, { useEffect, useState } from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = ({ title, currentSurah, bgClr, textClr, juz, hizb }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);

      // Detect current visible page
      const verses = document.querySelectorAll("[data-page]");
      let current = null;

      verses.forEach((verse) => {
        const rect = verse.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          current = verse.getAttribute("data-page");
        }
      });

      if (current) setActivePage(current);

      // Reset scrolling state after idle
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${bgClr} ${textClr} sticky top-0 z-50 shadow-md`}>
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Surah Title (left) */}
        <h1 className="text-lg font-semibold">{title}</h1>

        {/* Details (right) */}
        <p className={`text-sm ${textClr} flex items-center space-x-2`}>
          {!isScrolling ? (
            <>
              {juz && <span>Juz {juz}</span>}
              {hizb && (
                <>
                  <span>•</span>
                  <span>Hizb {hizb}</span>
                </>
              )}
              {activePage && (
                <>
                  <span>•</span>
                  <span>Page {activePage}</span>
                </>
              )}
            </>
          ) : (
            activePage && (
              <span className={`${textClr} font-bold`}>Page {activePage}</span>
            )
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
