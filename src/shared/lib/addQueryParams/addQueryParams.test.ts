import { getQueryParams } from './addQueryParams';

describe('getQueryParams,test', () => {
    test('one param', () => {
        const params = { search: 'lorem' };
        expect(getQueryParams(params)).toBe('?search=lorem');
    });

    test('one param', () => {
        const params = { search: 'lorem' };
        expect(getQueryParams(params)).toBe('?search=lorem');
    });

    test('with undefined', () => {
        const params = { search: 'lorem', sort: '' };
        expect(getQueryParams(params)).toBe('?search=lorem');
    });

    test('no params', () => {
        const params = {};
        expect(getQueryParams(params)).toBe('');
    });
});
