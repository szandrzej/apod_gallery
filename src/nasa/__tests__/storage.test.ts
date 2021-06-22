import { isNew, saveFavorite, savePicture } from '../storage';
import { AstronomyPicture } from '../types';

describe('storage', () => {
    describe('isNew', () => {
        it('should return true if empty', () => {
            global.localStorage.__proto__.getItem = jest.fn(() => null);
            expect(isNew({ url: 'test_url' } as AstronomyPicture)).toBeTruthy()
        });

        it('should return true if new', () => {
            global.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify([{ url: 'another_test_url' }]));
            expect(isNew({ url: 'test_url' } as AstronomyPicture)).toBeTruthy();
        });

        it('should return false if not new', () => {
            global.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify([{ url: 'test_url' }]));
            expect(isNew({ url: 'test_url' } as AstronomyPicture)).toBeFalsy();
        });
    });

    describe('savePicture', () => {
        it('should call local storage with two items', () => {
            global.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify([{ url: 'another_test_url' }]));
            const mk = jest.fn();
            global.localStorage.__proto__.setItem = mk;

            savePicture({ url: 'test_url' } as AstronomyPicture);
            expect(mk).toBeCalledWith('nasa_pictures', JSON.stringify([{ url: 'another_test_url' }, { url: 'test_url', isFavorite: false }]));
        });
    });

    describe('saveFavorite', () => {
        it('should find pictures and set favorite for particular one', () => {
            global.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify([{ url: 'another_test_url', isFavorite: false }, { url: 'test_url', isFavorite: false }]));
            const mk = jest.fn();
            global.localStorage.__proto__.setItem = mk;

            saveFavorite({ url: 'test_url' } as AstronomyPicture);
            expect(mk).toBeCalledWith('nasa_pictures', JSON.stringify([{ url: 'another_test_url', isFavorite: false }, { url: 'test_url', isFavorite: true }]));
        })
    });
})
