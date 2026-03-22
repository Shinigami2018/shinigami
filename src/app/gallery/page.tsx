import { fetchSpecificVideos } from "@/lib/youtube";
import { GALLERY_YOUTUBE_LINKS, extractYouTubeId } from "@/config/gallery";
import GalleryClient, { type GalleryMedia } from "./GalleryClient";
import { client } from '@/sanity/lib/client';
import { ALL_GALLERY_IMAGES_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 3600;

export default async function GalleryPage() {
  // 1. Fetch data concurrently
  const videoIds = GALLERY_YOUTUBE_LINKS.map(extractYouTubeId).filter(Boolean) as string[];
  
  const [fetchedVideos, sanityImages] = await Promise.all([
    fetchSpecificVideos(videoIds),
    client.fetch(ALL_GALLERY_IMAGES_QUERY) as Promise<any[]>
  ]);

  // 3. Map the raw YouTube API data into our generic GalleryMedia format
  const mappedVideos: GalleryMedia[] = fetchedVideos.map((video, idx) => ({
    id: `yt-${video.id}`,
    title: video.title,
    type: "VIDEO",
    date: new Date(video.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
    timestamp: new Date(video.publishedAt).getTime(),
    imgUrl: video.thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", // Fallback thumbnail
    tag: video.duration ? `DUR: ${video.duration}` : "EXTERNAL_FEED",
    videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
    // Make the first video twice as wide
    colSpan: idx === 0 ? "md:col-span-2 lg:col-span-3" : "",
    aspect: idx === 0 ? "h-64 lg:h-[400px]" : "h-64 md:h-[350px]",
  }));

  // 3. Map the raw Sanity API data
  const mappedImages: GalleryMedia[] = sanityImages.map((img) => ({
    id: img._id,
    title: img.title.toUpperCase(),
    type: "IMAGE",
    album: img.album || "UNCATEGORIZED",
    date: new Date(img.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
    timestamp: new Date(img.publishedAt).getTime(),
    imgUrl: urlFor(img.image).width(1200).url(), // Dynamic height preserves original aspect ratio
    tag: img.tag?.toUpperCase() || undefined,
    extraClasses: "group-hover:grayscale-0 grayscale opacity-80"
  }));

  // Combine fetched YouTube videos + Sanity images
  const allMedia = [...mappedImages, ...mappedVideos];

  return <GalleryClient initialMedia={allMedia} />;
}
