import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photosStyle from "../styles/Photos.module.scss";
import Link from "next/link";

const photos = ({ photos }) => {
  console.log("photos 진입");
  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>Photos</h1>
      <ul className={photosStyle.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={100}
                  height={100}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: { photos },
  };
};

export default photos;
