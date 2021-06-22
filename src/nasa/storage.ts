import { AstronomyPicture } from './types';

const NASA_LOCAL_STORAGE_KEY = 'nasa_pictures';

export function isNew(picture: AstronomyPicture): boolean {
    const savedPictures = loadPictures();
    return !savedPictures.find(sp => sp.url === picture.url);
}

export function savePicture(picture: AstronomyPicture): void {
    let savedPictures = loadPictures();
    savedPictures = [...savedPictures, {...picture, isFavorite: false}];
    localStorage.setItem(NASA_LOCAL_STORAGE_KEY, JSON.stringify(savedPictures));
}

export function saveFavorite(picture: AstronomyPicture): void {
    let savedPictures = loadPictures();
    savedPictures = savedPictures.map(sp => {
        if(sp.url === picture.url) {
            return {...sp, isFavorite: true};
        }
        return sp;
    });
    localStorage.setItem(NASA_LOCAL_STORAGE_KEY, JSON.stringify(savedPictures));
}

export function getFavorites(): AstronomyPicture[] {
    const savedPictures = loadPictures();
    return savedPictures.filter(sp => sp.isFavorite);
}

export function clear(): void {
    localStorage.removeItem(NASA_LOCAL_STORAGE_KEY);
}

function loadPictures(): AstronomyPicture[] {
    const lsData = localStorage.getItem(NASA_LOCAL_STORAGE_KEY) || '[]';
    return JSON.parse(lsData) as AstronomyPicture[];
}
