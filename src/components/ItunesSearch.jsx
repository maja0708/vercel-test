import { useEffect, useState } from "react";
import { searchItunes } from "../data/api";

export default function ItunesSearch() {
  const [term, setTerm] = useState("The Beatles");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("The Beatles");

  useEffect(() => {
    async function load() {
      const data = await searchItunes(query);
      setResults(data.results);
    }

    load();
  }, [query]); 

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(term);
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className="form-wrapper">
            <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search for artist or song..."
            />
            <button type="submit">Search</button>
        </form>

      <ul>
        {results
          .filter(item => item.trackId)
          .map(item => (
            <li key={item.trackId}>
              {item.artistName} - {item.trackName}
            </li>
          ))}
      </ul>
    </div>
  );
}