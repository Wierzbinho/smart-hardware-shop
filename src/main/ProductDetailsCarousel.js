import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import './ProductDetailsCarousel.css';

const handleDragStart = (e) => e.preventDefault();

export const ProductDetailsCarousel = ({images = []}) => {
  const items = images.map(imageSrc => <img className="carousel-image" alt="carousel" src={imageSrc} onDragStart={handleDragStart} />)
  
  return <AliceCarousel items={items} autoWidth={true} disableButtonsControls/>;
}