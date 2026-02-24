import { useState } from "react";

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ username, setUsername ] = useState("");

    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <div className="p-6 bg-white shadow-md rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Conditional Rendering</h2>
      {!isLoggedIn && (
        <input
          type="text"
          placeholder="Unesi ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />
      )}

    
      {isLoggedIn ? (
        <p className="text-green-600 font-semibold">
          Dobrodošao {username || "User"} 👋
        </p>
      ) : (
        <p className="text-gray-500">Nisi prijavljen</p>
      )}

 
      <button
        onClick={toggleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
        </div>
    )

}

export default ConditionalRendering;