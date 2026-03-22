export const GALLERY_YOUTUBE_LINKS = [
  "https://youtu.be/FFd4sqIW9N0", // Replace these with your actual links!
  "https://youtu.be/IvYyzvZxOxc",
  "https://youtu.be/lGd_hg0wDFA",
  "https://youtu.be/oOxng7ybfgQ",
  "https://youtu.be/8F-JkxO275Y?si=u4K1iWPtjm5dNng3",
  "https://youtu.be/3Vwe1gCi4no?si=3g_dJn1Js9qiAvUb"
];

// We extract just the 11 character video ID from standard links
export function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
  return match ? match[1] : null;
}
