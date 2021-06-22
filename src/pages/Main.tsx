import React, { FC, useCallback, useEffect, useState } from 'react';
import { AstronomyPicture } from '../nasa/types';
import { Picture } from '../components/Picture';
import { Button, ButtonsContainer, Container, PictureDetailsText, Title } from '../components/theme';
import { Link } from 'react-router-dom';

interface Props {
    nextImage(): Promise<AstronomyPicture>;
    saveFavorite(picture: AstronomyPicture): void
}

export const Main: FC<Props> = ({ nextImage, saveFavorite }) => {
    const [image, setImage] = useState<AstronomyPicture>();
    const [loading, setLoading] = useState(true);

    const loadNext = useCallback(async () => {
        setLoading(true);
        try {
            const result = await nextImage();
            setImage(result);
        } catch (err) {
            console.error(err);
            window.alert('Cannot load next image!');
        } finally {
            setLoading(false);
        }
    }, [setLoading, nextImage, setImage]);

    useEffect(() => {
        (async () => await loadNext())();
    }, [loadNext]);

    const onSave = () => {
        if (image) {
            saveFavorite(image);
            setImage({ ...image, isFavorite: true });
        }
    }

    return (
        <Container>
            <Title>{image?.title}</Title>
            {image ? (
                <ButtonsContainer>
                    <Button onClick={onSave} disabled={image.isFavorite}>
                        { image.isFavorite ? 'Saved' : 'Save' }
                    </Button>
                    <Link to="/zapisane">
                        <Button>Favorites</Button>
                    </Link>
                    <Button onClick={loadNext}>Next picture</Button>
                </ButtonsContainer>
            ) : null }
            <Picture isLoading={loading} imageUrl={image?.hdurl} />
            {image ? (
                <>
                    <PictureDetailsText><strong>Date: </strong>{image.date}</PictureDetailsText>
                    <PictureDetailsText><strong>Explanation: </strong>{image.explanation}</PictureDetailsText>
                </>
            ) : null}
        </Container>
    );
}
