import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "white" : "black"
  };

  return <p style={style}> Das ist ein Bespiel.</p>;
}