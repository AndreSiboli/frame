import styles from "@/styles/pages/home/Portraits.module.scss";

import Img from "@/components/utils/Img";
import img1 from "@/assets/scrollable-slide/pexels-stephany-lorena-276313736-15307926.jpg";
import img2 from "@/assets/scrollable-slide/pexels-eugenia-remark-17232235.jpg";
import img3 from "@/assets/scrollable-slide/pexels-stephen-audu-11856544.jpg";

export default function Portraits() {
  const images = [
    {
      src: img1,
      alt: "A brunette woman looking at camera.",
    },
    {
      src: img2,
      alt: "Woman standing with a sunlight on her.",
    },
    {
      src: img3,
      alt: "A man with his hand on face",
    },
  ];

  return (
    <div className={styles.portraits}>
      {images.map((image) => (
        <figure className={styles.image_container} key={image.alt}>
          <Img src={image.src} alt={image.alt} />
        </figure>
      ))}
    </div>
  );
}
