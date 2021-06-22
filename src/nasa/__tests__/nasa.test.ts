import { loadNextAPOD } from '../nasa';
import { isNew } from '../storage';

function overrideFetchResponse(payload: any) {
    const response =  { json: () => Promise.resolve(payload)} as Response;
    global.fetch = () => Promise.resolve(response);
}

describe('nasa', () => {
    describe('loadNextAPOD', () => {
        it('should throw an error if fetch fails', async () => {
            global.fetch = () => Promise.reject('error');
            expect(loadNextAPOD()).rejects.toThrowError('error');
        });

        it('should throw an error if data is null', async () => {
            overrideFetchResponse(null);
            expect(loadNextAPOD()).rejects.toThrowError('cannot load next picture');
        });

        it('should throw an error if there is empty', async () => {
            overrideFetchResponse([]);
            expect(loadNextAPOD()).rejects.toThrowError('cannot load next picture');
        });

        it('should return picture', async () => {
            overrideFetchResponse([{ title: 'test_title'}]);  
            expect(loadNextAPOD()).resolves.toReturnWith({title: 'test_title'});
        });
    });
});
