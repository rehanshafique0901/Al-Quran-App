import React from 'react';
import './QuranView';

const NavigationTabs = ({ tabs, activeTab, onTabChange, bgClr = "bg-[#1F2125]", textClr = "text-white" }) => {
  return (
    <nav className={`${bgClr} px-6`}>
      <div className="flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`mt-3 flex items-center space-x-2 py-2 px-5 rounded-full border transition-all duration-200 ${
              activeTab === tab.id
                ? `border-blue-400 ${textClr} shadow-md`
                : 'border-gray-600 text-gray-400 hover:text-white hover:border-blue-400'
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;
