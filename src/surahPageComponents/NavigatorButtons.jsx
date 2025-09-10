import React from "react";
import Button from "../homePageComponents/Button";
import { useNavigate, useParams } from "react-router-dom";

function NavigatorButtons({ bgClr, textClr }) {
  const navigate = useNavigate();
  const { number } = useParams(); // 👈 use "number" instead of "surahNumber"
  const currentSurah = parseInt(number || 1, 10);
  const totalSurahs = 114;

  // Scroll to the beginning of the current Surah page
  const goToBeginning = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigate to previous surah (only if > 1)
  const goToPrevious = () => {
    if (currentSurah > 1) {
      navigate(`/surah/${currentSurah - 1}`);
    }
  };

  // Navigate to next surah (only if < 114)
  const goToNext = () => {
    if (currentSurah < totalSurahs) {
      navigate(`/surah/${currentSurah + 1}`);
    }
  };

  return (
    <div
      className={`${bgClr} flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pb-20 p-4 border-t-[1px] border-gray-500`}
    >
      {/* Previous Button (hidden on Surah 1) */}
      {currentSurah > 1 && (
        <Button
          text="← Previous Surah"
          varient="border"
          bgClr={bgClr}
          textClr={textClr}
          height="h-12"
          width="w-44"
          click={goToPrevious}
          className="border border-gray-500 rounded-lg"
        />
      )}

      {/* Beginning Button */}
      <Button
        text="Beginning of Surah"
        varient="border"
        bgClr={bgClr}
        textClr={textClr}
        height="h-16"
        width="w-44"
        click={goToBeginning}
        className="border border-gray-500 rounded-lg"
      />

      {/* Next Button (hidden on Surah 114) */}
      {currentSurah < totalSurahs && (
        <Button
          text="Next Surah →"
          varient="border"
          bgClr={bgClr}
          textClr={textClr}
          height="h-12"
          width="w-40"
          click={goToNext}
          className="border border-gray-500 rounded-lg"
        />
      )}
    </div>
  );
}

export default NavigatorButtons;
