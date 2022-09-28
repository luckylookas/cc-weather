import reykjavik from "./reykjavik.jpg";
import vienna from "./vienna.jpg";
import hotan from "./hotan.jpg";

export interface City {
    img: string
    name: string
    lat: number
    lon: number
}

const REYKJAVIK = {
    img: reykjavik,
    name: 'Reykjavik',
    lat: 64.128288,
    lon:-21.827774
}
const VIENNA = {
    img: vienna,
    name: 'Vienna',
    lat: 48.2092,
    lon: 16.3728
}
const HOTAN = {
    img: hotan,
    name: 'Hotan',
    lat: 37.120632,
    lon: 79.923134
}

export const cities = [VIENNA, REYKJAVIK, HOTAN]
