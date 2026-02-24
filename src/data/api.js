export async function searchItunes(term) {
  const encodedTerm = encodeURIComponent(term);

  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodedTerm}&limit=5&entity=song`,
    );

    if (!res.ok) {
      throw new Error(`HTTP-Fehler: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Fehler beim Fetch:", error);
    throw error;
  }
}
