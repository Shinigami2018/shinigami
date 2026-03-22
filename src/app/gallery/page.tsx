import { fetchSpecificVideos, type YouTubeVideo } from "@/lib/youtube";
import { GALLERY_YOUTUBE_LINKS, extractYouTubeId } from "@/config/gallery";
import GalleryClient, { type GalleryMedia } from "./GalleryClient";

export const revalidate = 3600;

const STATIC_IMAGES: GalleryMedia[] = [
  {
    id: "img-1",
    title: "HARDWARE_ARCHETYPE_01.EXR",
    type: "IMAGE",
    date: "2024.04.12",
    imgUrl: "https://images.unsplash.com/photo-1592659762303-9008ce831f1f?q=80&w=800&auto=format&fit=crop",
    aspect: "h-64 md:h-[350px]"
  },
  {
    id: "img-2",
    title: "NANO_STRUCTURE_STUDY.TIFF",
    type: "IMAGE",
    date: "2024.02.19",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square md:aspect-auto md:h-[300px]",
    extraClasses: "filter hue-rotate-180 mix-blend-color-dodge opacity-60"
  },
  {
    id: "img-3",
    title: "INTERFACE_ERGONOMICS_PC4",
    type: "IMAGE",
    date: "2024.01.05",
    imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square md:aspect-auto md:h-[300px]",
    extraClasses: "grayscale group-hover:grayscale-0 opacity-60"
  }
];

export default async function GalleryPage() {
  // 1. Extract IDs from the config URLs
  const videoIds = GALLERY_YOUTUBE_LINKS.map(extractYouTubeId).filter(Boolean) as string[];
  
  // 2. Fetch specific videos from the API securely server-side
  const fetchedVideos: YouTubeVideo[] = await fetchSpecificVideos(videoIds);

  // 3. Map the raw YouTube API data into our generic GalleryMedia format
  const mappedVideos: GalleryMedia[] = fetchedVideos.map((video) => ({
    id: `yt-${video.id}`,
    title: video.title,
    type: "VIDEO",
    date: new Date(video.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
    imgUrl: video.thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", // Fallback thumbnail
    tag: video.duration ? `DUR: ${video.duration}` : "EXTERNAL_FEED",
    videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
    // Make the first video twice as wide
    colSpan: fetchedVideos.indexOf(video) === 0 ? "md:col-span-2" : "",
    aspect: "h-64 md:h-[350px]",
  }));

  // Combine fetched YouTube videos + static images
  const allMedia = [...mappedVideos, ...STATIC_IMAGES];

  return <GalleryClient initialMedia={allMedia} />;
}
