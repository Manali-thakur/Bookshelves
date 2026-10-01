// Picks a cover, forces https, removes the curled-page effect
export function getCover(volumeInfo, sizes = ["thumbnail", "smallThumbnail"]) {
  const links = volumeInfo?.imageLinks;
  const url = links && sizes.map((s) => links[s]).find(Boolean);
  return url
    ? url.replace("http://", "https://").replace("&edge=curl", "")
    : null;
}

// Link target that searches for an author
export const authorSearchPath = (name) =>
  `/?${new URLSearchParams({ q: name})}`;
