import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function LoginButton() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Max Mustermann")}>
      Login
    </button>
  );
}