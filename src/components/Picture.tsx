import React, { FC } from 'react';
import { AstronomyImage, LoaderText } from './theme';

interface Props {
    isLoading: boolean;
    imageUrl?: string;
}

export const Picture: FC<Props> = ({isLoading, imageUrl}) => {
    if(isLoading) {
        return <LoaderText>Loading picture...</LoaderText>
    }

    return (
        <AstronomyImage src={imageUrl}/>
    );
}
