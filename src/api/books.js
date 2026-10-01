const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = "https://www.googleapis.com/books/v1/volumes";

// type: "all" | "title" | "author"
// export function buildQuery(text, type = "all") {
//   const t = text.trim();
//   if (type === "author") return `inauthor:"${t}"`;
//   if (type === "title") return `intitle:"${t}"`;
//   return t;
// }

// small session cache so reloads and StrictMode don't spend quota
const memory = new Map();
function cacheGet(key) {
  if (memory.has(key)) return memory.get(key);
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function cacheSet(key, value) {
  memory.set(key, value);
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable */
  }
}

async function request(params, path = "", signal) {
  const p = new URLSearchParams(params);
  p.set("country", "IN");
  if (API_KEY) p.set("key", API_KEY);
  else
    console.warn(
      "VITE_API_KEY is undefined: check .env and restart npm run dev",
    );

  const cacheKey = `books:${path}?${params}`;
  const cached = cacheGet(cacheKey);
  if (cached) return cached;

  const res = await fetch(`${BASE}${path}?${p}`, { signal });
  if (!res.ok) {
    let reason = "";
    try {
      reason = (await res.json()).error?.message;
    } catch {
      /* not JSON */
    }
    console.log(
      "Books API ok:",
      data.items?.length ?? 0,
      "returned for",
      params.get("q") ?? path,
    );
    if (!data.items?.length)
      console.warn("Empty response body:", JSON.stringify(data));
  }

  const data = await res.json();
  console.log(
    "Books API ok:",
    data.items?.length ?? 0,
    "returned for",
    params.get("q") ?? path,
  );
  if (data.items?.length || path) cacheSet(cacheKey, data); // never cache empty searches
  return data;
}

export async function searchBooks(
  text,
  //   type = "all",
  { signal, maxResults = 20 } = {},
) {
  const data = await request(
    new URLSearchParams({ q: text.trim(), maxResults }),
    "",
    signal,
  );
  return data.items || [];
}

export function getBook(id, signal) {
  return request(new URLSearchParams(), `/${encodeURIComponent(id)}`, signal);
}
