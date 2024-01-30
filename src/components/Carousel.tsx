import "../app/css/carousel.css";
import Actions from "../core/actions";
import { BrandType, MediaType } from "../core/enums";
import { CarouselType } from "../core/types";

function Carousel({ mediaType, mediaUrl, brand, description, title, url } : CarouselType){
    return <div className="carousel" onClick={()=>{
        Actions.goTo(url);
    }}>
        {mediaType == MediaType.VIDEO ? <video src={mediaUrl} playsInline autoPlay muted></video> : mediaType == MediaType.IMAGE ? <img src={mediaUrl} title={title} loading="lazy" /> : null}
        
        <div className="carousel-desscription">
            <div className="carousel-text">
                <div className="carousel-logo-container">
                    {brand == BrandType.WEARTHIRSTY ? <img src="/assets/icons/wearthirsty.png" alt="wearthirsty" /> : brand == BrandType.THIRSTYLABORATORY ? <img src="/assets/icons/thirstylaboratory.png" alt="Thirsty Laboratory" /> : brand == BrandType.THIRSTYNALIA ? <img src="/assets/icons/thirstynalia.png" alt="Thirstynalia" /> : brand == BrandType.THIRSTYSONICS ? <img src="/assets/icons/thirstysonics.png" alt="Thirstysonics" /> : <img src="/assets/icons/thirsty.png" alt="Thirsty" />}
                </div>
                <div className="day">{title}</div>
            </div>
            <div className="carousel-info">{description}</div>
        </div>
    </div>
}

export default Carousel;