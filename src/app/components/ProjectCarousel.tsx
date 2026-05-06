import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProjectCarouselProps {
  images: string[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-[var(--muted-foreground)] hover:bg-[var(--glow-blue)] transition-colors" />
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="relative group">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none">
            <div className="aspect-video bg-[var(--cosmos-deep)] overflow-hidden">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--cosmos-panel)]/80 border border-[var(--border)] hover:border-[var(--glow-blue)] transition-all opacity-0 group-hover:opacity-100"
        style={{ borderRadius: '2px' }}
      >
        <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--cosmos-panel)]/80 border border-[var(--border)] hover:border-[var(--glow-blue)] transition-all opacity-0 group-hover:opacity-100"
        style={{ borderRadius: '2px' }}
      >
        <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
      </button>

      <style>{`
        .custom-dots {
          bottom: -40px !important;
          display: flex !important;
          justify-content: center;
          gap: 8px;
          list-style: none;
          padding: 0;
        }

        .custom-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .custom-dots li.slick-active div {
          background-color: var(--glow-blue);
          width: 8px;
          height: 8px;
        }

        .custom-dots li button {
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .custom-dots li button::before {
          display: none;
        }
      `}</style>
    </div>
  );
}
