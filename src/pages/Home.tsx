import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
import { CarouselType } from "../core/types";
import carouselData from "../data/carousels";

function Home(){
    return <>
        <Nav />
        {carouselData.map((carousel : CarouselType) => <Carousel mediaType={carousel.mediaType} mediaUrl={carousel.mediaUrl} brand={carousel.brand} title={carousel.title} description={carousel.description} url={carousel.url} />)}
    </>
}

export default Home;