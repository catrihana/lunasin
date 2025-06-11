import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageAtr {
  src: string;
  alt: string;
  link?: string;
}
interface SliderProps {
  images: ImageAtr[];
  duration?: number;
  isShowNavigation?: boolean;
  isShowIndicators?: boolean;
}

const SimpleImageSlider: React.FC<SliderProps> = ({
  images,
  duration = 3000,
  isShowNavigation = true,
  isShowIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, duration);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, duration]);

  if (images?.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden group rounded-lg">
      <div
        className="flex w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {images.map((image, index) => (
          <div
            key={`images-${index}`}
            className="relative w-full h-52 2xl:h-[17rem] shrink-0">
            {image.link ? (
              <Link href={image.link} target="_blank" passHref>
                <Image
                  src={image.src}
                  alt={image.alt}
                  quality={100}
                  fill
                  className="object-cover cursor-pointer"
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {isShowNavigation && images?.length > 0 && (
        <>
          <button
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white hidden group-hover:block"
            onClick={goToPrevious}>
            <FaChevronLeft color="#444B55" />
          </button>
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white hidden group-hover:block"
            onClick={goToNext}>
            <FaChevronRight color="#444B55" />
          </button>
        </>
      )}

      {isShowIndicators && images?.length > 0 && (
        <div className="absolute bottom-3 left-3 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 delay-200 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-paletteText-active w-8'
                  : 'w-2 bg-paletteText-placeholder'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleImageSlider;
