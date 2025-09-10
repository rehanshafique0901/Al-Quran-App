import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  
  const { toggleTheme } = Theme();
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
      <div className="bg-gray-200 dark:bg-black text-black dark:text-white flex flex-col justify-center items-center">
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
            <QuranInYear
              todayAyah="وَيُسَبِّحُ ٱلرَّعۡدُ بِحَمۡدِهِۦ وَٱلۡمَلَٰٓئِكَةُ مِنۡ خِيفَتِهِۦ وَيُرۡسِلُ ٱلصَّوَٰعِقَ فَيُصِيبُ بِهَا مَن يَشَآءُ وَهُمۡ يُجَٰدِلُونَ فِي ٱللَّهِ وَهُوَ شَدِيدُ ٱلۡمِحَالِ (١٣)"
              Translation="The thunder glorifies His praises, as do the angels in awe of Him. He sends thunderbolts, striking with them whoever He wills. Yet they dispute about Allah. And He is tremendous in might."
              Refrence="— Dr. Mustafa Khattab, The Clear Quran"
              bgClr="bg-gray-200 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
            />
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
