export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  altHi: string;
  width: number;
  height: number;
}

export interface GalleryVideo {
  id: string;
  thumbnail: string;
  title: string;
  titleHi: string;
  url: string;
}

export const galleryData: {
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
} = {
  photos: [],
  videos: [],
};
