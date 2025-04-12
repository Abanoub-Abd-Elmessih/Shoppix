import Image from "next/image";
import { SwiperCarousel } from "../Carousel";

export const AuthCarousel = () => {
  return (
    <SwiperCarousel pagination loop>
      <DivContainer
        imagePath="/images/auth/auth1.jpg"
        imagePosition="bottom"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti, aliquid?"
      />
      <DivContainer
        imagePath="/images/auth/auth2.jpg"
        imagePosition="bottom"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti, aliquid?"
      />
      <DivContainer
        imagePath="/images/auth/auth3.jpg"
        imagePosition="center"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti, aliquid?"
      />
    </SwiperCarousel>
  );
};
const DivContainer = ({
  imagePath,
  imagePosition,
  desc,
}: {
  imagePath: string;
  imagePosition: string;
  desc: string;
}) => {
  return (
    <div className="relative cursor-grab bg-black/30 h-full">
      <Image
        src={imagePath}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition={imagePosition}
        className="-z-10"
      />
      <div className=" absolute top-[70%] right-[50%] text-center translate-x-1/2">
        <span className="text-4xl text-white font-bold text-nowrap">
          Welcome to Shoppix
        </span>
        <p className="text-gray-200 text-lg xl:text-xl mt-3">{desc}</p>
      </div>
    </div>
  );
};
