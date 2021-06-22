import React, { FC, useEffect, useState } from 'react';
import { AstronomyPicture } from '../nasa/types';
import { Container, Title } from '../components/theme';
import { Gallery } from '../components/Gallery';

interface Props {
    loadSavedPictures(): AstronomyPicture[];
}

export const Saved: FC<Props> = ({ loadSavedPictures }) => {
    const [pictures, setPictures] = useState<AstronomyPicture[]>([]);

    useEffect(() => {
        setPictures(loadSavedPictures());
    }, [loadSavedPictures]);

    return (
        <Container>
            <Title>Favorites pictures</Title>
            <Gallery pictures={pictures} />
        </Container>
    );
}
