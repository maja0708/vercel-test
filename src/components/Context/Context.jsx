import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemedParagraph from "./ThemedParagraph";

export default function Contexts() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleTheme} className="theme-btn ">Theme ändern</button>

      <ThemedParagraph />
    </div>
  );
}