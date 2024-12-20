import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/slider.css'
import VectorPrevious from '../icon/vector_previous.svg'
import VectorNext from '../icon/vector_next.svg'


interface CustomSliderProps {
  sliderData?: any;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ sliderData }) => {
  const slides = [
    {
      image: sliderData.imgNews,
      title: sliderData.newsHeader,
      description:sliderData.newsBody?.children[0].children[0].text,
      link: '#',
      linkText: sliderData.newsLink,
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-blk">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center w-full flex-shrink-0">
              <div className="md:w-1/2 p-5 flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-1/2 p-5">
                <div className='main-blk'>
                  <h3 className="font-bold mb-4 text-[32px]">{slide.title}</h3>
                  <p className="mb-6">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="text-white font-bold underline hover:text-white-400 transition duration-300"
                  >
                    {slide.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 focus:outline-none"
        >
          <VectorPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none"
        >
          <VectorNext />
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-5 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-blue-500'
              } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;