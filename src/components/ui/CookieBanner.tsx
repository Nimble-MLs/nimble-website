"use client";
import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" && localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-dark text-tertiary p-4 flex justify-between items-center z-50 text-sm">
      <span>This site uses cookies to improve your experience.</span>
      <button className="bg-secondary text-dark px-3 py-1" onClick={accept}>
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
