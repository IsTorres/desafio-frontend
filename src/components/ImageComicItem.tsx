import { Comic, Thumbnail } from "../types/Comic.type";

interface ImageComicItemProps {
  src: Thumbnail;
  description: string;
}

export default function ImageComicItem({
  src,
  description,
}: ImageComicItemProps) {
  const imageUrl = `${src.path}.${src.extension}`;

  return (
    <div>
      <img src={imageUrl} alt={description} />
    </div>
  );
}
