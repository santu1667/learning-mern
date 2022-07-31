import '../css/Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel(){
    const images = [
    {
        id: 1,
        src:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-family-hero-banner-desktop-01-en-17jan22?$800px$",
        alt: "PlayStation"
    },
    {
        id: 2,
        src:"https://thumbs.dreamstime.com/b/apple-computer-logo-16497803.jpg",
        alt: "Apple"
    },
    { 
        id: 3,
        src:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        alt: "Laptop"
    }
];

    var settings = {
        dots: true,
        infinite: true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 100,
        lazyLoad: true,
        cssEase: "linear",
    };

return (
    <div className="carouselImages">
        <Slider {...settings}>
            {images.map((item) => (
                <div key={item.id}>
                <img src={item.src}  alt={item.alt} />
                </div>
            ))}
        </Slider>
    </div>
  );
}


export default Carousel;