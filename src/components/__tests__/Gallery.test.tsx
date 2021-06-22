import { render, screen } from '@testing-library/react'
import React from 'react'
import { AstronomyPicture } from '../../nasa/types';
import { Gallery } from '../Gallery';

describe('Gallery', () => {
    it('should show text if no pictures', () => {
        render(<Gallery pictures={[]} />);
        expect(screen.getByText('No saved pictures')).toBeInTheDocument();
    });

    it('should show render 3 elements', () => {
        const pictures = [
            { url: 'test_1', title: 'test_1'},
            { url: 'test_2', title: 'test_2'},
            { url: 'test_3', title: 'test_3'},
        ] as AstronomyPicture[];
        render(<Gallery pictures={pictures} />);
        expect(screen.getAllByRole('img').length).toEqual(3);
    });
});
