import { AstronomyPicture } from './types';
import { isNew, savePicture } from './storage';

export async function loadNextAPOD(): Promise<AstronomyPicture> {
    for (; ;) {
        const response =
            await fetch(`https://api.nasa.gov/planetary/apod?count=1&api_key=${process.env.REACT_APP_NASA_ACCESS_TOKEN}`);
        const data: AstronomyPicture[] = await response.json();
        if (!data || !data.length) {
            break;
        }
        const apod = data[0];
        if (isNew(apod)) {
            savePicture(apod);
            return apod;
        }
    }
    throw new Error('cannot load next picture');
}

