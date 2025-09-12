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
  onBookmark,
  bgClr,
  textClr,
}) => {
  const handleCopy = () => {
    const textToCopy = `${arabicText}\n\n${translation}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show a small toast notification
      const toast = document.createElement("div");
      toast.textContent = "Copied to clipboard!";
      toast.className =
        "fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md text-sm animate-fade";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    });
  };

  return (
    <div
      className={`verse-item ${bgClr} ${textClr} px-6 py-6`}
      data-juz={juz}
      data-page={page}
      data-hizb={hizb}
    >
      <div className="flex items-start space-x-4 mx-auto max-w-[1440px] border-b border-gray-500">
        {/* ICONS - LEFT SIDE */}
        <div className="flex-shrink-0">
          <div className="flex flex-col space-y-4 text-gray-500">
            <button
              onClick={handleCopy}
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
          {/* Arabic text with verse number badge */}
          <div className="text-right mb-4">
            <p className="text-2xl font-arabic leading-relaxed mb-2 inline-flex items-center gap-2">
              <span>{arabicText}
              </span>


              {/* Verse number badge */}
              <span className="relative inline-flex items-center justify-center w-10 h-10 text-sm font-bold text-gray-800 dark:text-gray-200">
                <span className="absolute inset-0 rounded-full border-2 border-gray-400 dark:border-gray-600"></span>
                <span className="relative z-10 font-arabic">
                  {verseNumber.toLocaleString("ar-EG")}
                </span>
              </span>
            </p>
          </div>

          {/* Translation */}
          <div className="text-left">
            <p className="leading-relaxed text-gray-800 dark:text-gray-300">
              {translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verse;
