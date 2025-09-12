// components/QuranView.jsx
import React, { useState } from "react";
import NavigationTabs from "./NavigationTabs.jsx";
import Verse from "./Verse.jsx";
import ReadingView from "./ReadingView.jsx";
import "../dummy data/datadummyData.jsx";

export const QuranView = () => {
  const [activeTab, setActiveTab] = useState("translation");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handlePlay = (verseNumber) => {
    console.log("Play", verseNumber);
  };

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
    <div>
      <NavigationTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

          </div>
  );
};

export default QuranView;
