import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { AstronomyPicture } from '../../nasa/types';
import { Main } from '../Main';

describe('Saved', () => {
    it('should call for next picture and renders all buttons and title', () => {
        const nextImage = jest.fn(() => Promise.resolve({ title: '123', url: 'test_url' } as AstronomyPicture));
        render(<Main nextImage={nextImage} saveFavorite={jest.fn()} />);
        setTimeout(async () => {
            await waitFor(() => expect(nextImage).toBeCalledTimes(1));
            expect(screen.getByRole('img')).toBeInTheDocument();
            expect(screen.getByText('123')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Next picture' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Favorites' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
        })
    });

    it('should call next picture after click next button', () => {
        const nextImage = jest.fn(() => Promise.resolve({ title: '123', url: 'test_url' } as AstronomyPicture));
        render(<Main nextImage={nextImage} saveFavorite={jest.fn()} />);
        setTimeout(async () => {
            const nextButton = screen.getByRole('button', { name: 'Next picture' });
            userEvent.click(nextButton);
    
            await waitFor(() => expect(nextImage).toBeCalledTimes(2));
        });
    });

    it('should call next picture after click next button', () => {
        const nextImage = jest.fn(() => Promise.resolve({ title: '123', url: 'test_url' } as AstronomyPicture));
        const saveFavorite = jest.fn();
        render(<Main nextImage={nextImage} saveFavorite={saveFavorite} />);
        setTimeout(async () => {
            const saveButton = screen.getByRole('button', { name: 'Save' });
            userEvent.click(saveButton);
    
            await waitFor(() => expect(saveButton).toBeCalledTimes(1));
            expect(screen.getByRole('button', { name: 'Saved'})).toBeInTheDocument();
        });
    });

    it('should redirects to favorites after click Favorites', () => {
        const nextImage = jest.fn(() => Promise.resolve({ title: '123', url: 'test_url' } as AstronomyPicture));

        render(<Main nextImage={nextImage} saveFavorite={jest.fn()} />, { wrapper: MemoryRouter});
        setTimeout(() => {
            const favorites = screen.getByRole('button', { name: 'Favorites' });
            userEvent.click(favorites);

            expect(screen.getByText('Favorites pictures')).toBeInTheDocument();
        });
    });
});
