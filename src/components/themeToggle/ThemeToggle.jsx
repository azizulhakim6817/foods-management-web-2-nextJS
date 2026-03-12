"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("winter"); // ডিফল্ট

  // প্রথমে localStorage থেকে থিম লোড
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // theme পরিবর্তনের সাথে সাথে html এবং localStorage আপডেট
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "night" : "winter");
  };

  return (
    <div className="mr-2">
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "night"}
        onChange={(e) => handleTheme(e.target.checked)}
      />
    </div>
  );
};

export default ThemeToggle;