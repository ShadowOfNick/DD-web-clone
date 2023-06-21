import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { RelatedProjectCard } from './related-project-card';

interface RelatedProjectDetailDataProps {
  title: string;
  subtitle: string;
  slug: string;
  image: string;
};

interface RelatedProjectsSliderProps {
  projectDetailPage: RelatedProjectDetailDataProps[];
  relatedArticlesTitle: string;
};

export const RelatedProjectsSlider: React.FC<RelatedProjectsSliderProps> = ({
  projectDetailPage,
  relatedArticlesTitle,
}) => {
  const sliderRef = React.useRef<Slider>(null);
  const [isSliderResponsive, setIsSliderResponsive] = React.useState(false);

  const settings = {
    infinite: true,
    slidesToShow: isSliderResponsive ? 2 : 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: isSliderResponsive,
  };

  React.useEffect(() => {
    if (window.innerWidth < 600) {
      setIsSliderResponsive(true);
    } else {
      setIsSliderResponsive(false);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 600) {
        setIsSliderResponsive(true);
      } else {
        setIsSliderResponsive(false);
      }
    })
  }, []);

  return (
    <div className="related-projects-slider">
      <h3 className="related-projects-slider__title">
        {relatedArticlesTitle}
      </h3>
      
      <button
        className="related-projects-slider__prev-button"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <span className="related-projects-slider__prev-button__arrow"/>
      </button>

      <button
        className="related-projects-slider__next-button"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <span className="related-projects-slider__next-button__arrow"/>
      </button>

      <Slider ref={sliderRef} {...settings}>
        {projectDetailPage.map((item, index) => (
          <RelatedProjectCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            link={item.slug}
          />
        ))}
      </Slider>
    </div>
  );
};
