import { useContext } from "react";
import { UserContext } from "./UserContext";

 export default function CurrentUserBadge() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <p>Angemeldet als: {user}</p> : <p>Niemand angemeldet</p>}
    </div>
  );
}