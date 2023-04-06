import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with one class', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', function () {
        var expected = classNames('someClass', {}, ['class1', 'class2']);
        expect(expected).toBe('someClass class1 class2');
    });
    test('with mods', function () {
        var expected = classNames('someClass', { selected: true }, ['class1', 'class2']);
        expect(expected).toBe('someClass class1 class2 selected');
    });
    test('with mods undefined', function () {
        var expected = classNames('someClass', { selected: true, active: undefined }, ['class1', 'class2']);
        expect(expected).toBe('someClass class1 class2 selected');
    });
});
