// components/SurahHeader.jsx
import React from 'react';
import { Info, Play } from 'lucide-react';

const SurahHeader = ({
  name,
  translation,
  translator,
  onSurahInfo,
  onPlayAudio,
  bgClr,
  textClr,
}) => {
  return (
    <div className={`${bgClr} ${textClr} px-6 py-8`}>
      <div className="text-center mb-6">
        <h2 className="text-3xl mb-4">{name}</h2>
      </div>
      <div className="flex justify-around items-center">
        <div className="text-sm text-gray-300">
          <p>Translation by</p>
          <p className={textClr}>
            {translator}
            <span className="text-blue-400 ml-1 cursor-pointer hover:underline">
              (Change)
            </span>
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onSurahInfo}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <Info size={20} />
            <span>Surah Info</span>
          </button>
          <button
            onClick={onPlayAudio}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Play size={20} />
            <span>Play Audio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurahHeader;
