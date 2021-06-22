import { render, screen } from '@testing-library/react'
import React from 'react'
import { Saved } from '../Saved';

describe('Saved', () => {
    it('should call for saved pictures and render title', () => {
        const loadSavedPictures = jest.fn(() => []);
        render(<Saved loadSavedPictures={loadSavedPictures} />);
        expect(screen.getByText('Favorites pictures')).toBeInTheDocument();
        expect(loadSavedPictures).toBeCalledTimes(1);
    });
});
