import fMajorScaleImage from './f-major-two-octaves-hands-together.svg';
import gMajorScaleImage from './g-major-two-octaves-hands-together.svg';

type Scale = {
    name: string;
    image: string; // TODO: SVG? JSX element?
    description: string;
}

const fMajor: Scale = {
    name: "F major",
    image: fMajorScaleImage,
    description: "F major two octave hands together"
}

const gMajor: Scale = {
    name: "G major",
    image: gMajorScaleImage,
    description: "G major two octave hands together"
}

const allScales = [fMajor, gMajor];

export const getRandomScale = () => {
    const randomIndex = Math.floor(Math.random() * allScales.length);
    return allScales[randomIndex];
}