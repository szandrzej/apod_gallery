import { FC } from 'react';
import { AstronomyPicture } from '../nasa/types';
import { GalleryLayout, GalleryThumbnail, LoaderText } from './theme';

interface Props { 
    pictures: AstronomyPicture[];
}
export const Gallery: FC<Props> = ({ pictures }) => {
  
    if(!pictures.length) {
        return <LoaderText>No saved pictures</LoaderText>
    }
    return (
        <GalleryLayout>
            {pictures.map(pic => <GalleryThumbnail key={pic.url} src={pic.url} alt={pic.title} />)} 
        </GalleryLayout>
    )
}
