import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expected = classNames('someClass', {}, ['class1', 'class2']);
        expect(expected).toBe('someClass class1 class2');
    });

    test('with mods', () => {
        const expected = classNames(
            'someClass',
            { selected: true },
            ['class1', 'class2'],
        );
        expect(expected).toBe('someClass class1 class2 selected');
    });

    test('with mods undefined', () => {
        const expected = classNames(
            'someClass',
            { selected: true, active: undefined },
            ['class1', 'class2'],
        );
        expect(expected).toBe('someClass class1 class2 selected');
    });
});
