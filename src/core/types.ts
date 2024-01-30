import { BrandType, MediaType } from "./enums";

interface CarouselType{
    mediaType: MediaType;
    mediaUrl: string;
    brand: BrandType;
    title: string;
    description: string;
    url: string;
}

export type { CarouselType }