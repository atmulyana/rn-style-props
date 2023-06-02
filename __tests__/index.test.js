/**
 * https://github.com/atmulyana/rn-style-props
 *
 * @format
 */
import {
    isLayoutStyleProp,
    isTransformStyleProp,
    isShadowStyleProp,
    isViewStyleProp,
    isTextStyleProp,
    isImageStyleProp,
    
    isViewStyleValidProp,
    isTextStyleValidProp,
    isImageStyleValidProp,

    extractTextStyle,
    extractImageStyle,
} from '../index';

test('isLayoutStyleProp', () => {
    expect(isLayoutStyleProp('alignContent')).toBe(true);
    expect(isLayoutStyleProp('shadowColor')).toBe(false);
    expect(isLayoutStyleProp('transform')).toBe(false);
    expect(isLayoutStyleProp('backfaceVisibility')).toBe(false);
    expect(isLayoutStyleProp('color')).toBe(false);
    expect(isLayoutStyleProp('objectFit')).toBe(false);
});

test('isTransformStyleProp', () => {
    expect(isTransformStyleProp('alignContent')).toBe(false);
    expect(isTransformStyleProp('shadowColor')).toBe(false);
    expect(isTransformStyleProp('transform')).toBe(true);
    expect(isTransformStyleProp('backfaceVisibility')).toBe(false);
    expect(isTransformStyleProp('color')).toBe(false);
    expect(isTransformStyleProp('objectFit')).toBe(false);
});

test('isShadowStyleProp', () => {
    expect(isShadowStyleProp('alignContent')).toBe(false);
    expect(isShadowStyleProp('shadowColor')).toBe(true);
    expect(isShadowStyleProp('transform')).toBe(false);
    expect(isShadowStyleProp('backfaceVisibility')).toBe(false);
    expect(isShadowStyleProp('color')).toBe(false);
    expect(isShadowStyleProp('objectFit')).toBe(false);
});

test('isViewStyleProp', () => {
    expect(isViewStyleProp('alignContent')).toBe(false);
    expect(isViewStyleProp('shadowColor')).toBe(false);
    expect(isViewStyleProp('transform')).toBe(false);
    expect(isViewStyleProp('backfaceVisibility')).toBe(true);
    expect(isViewStyleProp('color')).toBe(false);
    expect(isViewStyleProp('objectFit')).toBe(false);
});

test('isTextStyleProp', () => {
    expect(isTextStyleProp('alignContent')).toBe(false);
    expect(isTextStyleProp('shadowColor')).toBe(false);
    expect(isTextStyleProp('transform')).toBe(false);
    expect(isTextStyleProp('backfaceVisibility')).toBe(false);
    expect(isTextStyleProp('color')).toBe(true);
    expect(isTextStyleProp('objectFit')).toBe(false);
});

test('isImageStyleProp', () => {
    expect(isImageStyleProp('alignContent')).toBe(false);
    expect(isImageStyleProp('shadowColor')).toBe(false);
    expect(isImageStyleProp('transform')).toBe(false);
    expect(isImageStyleProp('backfaceVisibility')).toBe(false);
    expect(isImageStyleProp('color')).toBe(false);
    expect(isImageStyleProp('objectFit')).toBe(true);
});

test('isViewStyleValidProp', () => {
    expect(isViewStyleValidProp('alignContent')).toBe(true);
    expect(isViewStyleValidProp('shadowColor')).toBe(true);
    expect(isViewStyleValidProp('transform')).toBe(true);
    expect(isViewStyleValidProp('backfaceVisibility')).toBe(true);
    expect(isViewStyleValidProp('color')).toBe(false);
    expect(isViewStyleValidProp('objectFit')).toBe(false);
});

test('isTextStyleValidProp', () => {
    expect(isTextStyleValidProp('alignContent')).toBe(true);
    expect(isTextStyleValidProp('shadowColor')).toBe(true);
    expect(isTextStyleValidProp('transform')).toBe(true);
    expect(isTextStyleValidProp('backfaceVisibility')).toBe(true);
    expect(isTextStyleValidProp('color')).toBe(true);
    expect(isTextStyleValidProp('objectFit')).toBe(false);
});

test('isImageStyleValidProp', () => {
    expect(isImageStyleValidProp('alignContent')).toBe(true);
    expect(isImageStyleValidProp('shadowColor')).toBe(true);
    expect(isImageStyleValidProp('transform')).toBe(true);
    expect(isImageStyleValidProp('backfaceVisibility')).toBe(true);
    expect(isImageStyleValidProp('color')).toBe(false);
    expect(isImageStyleValidProp('objectFit')).toBe(true);
});

test('extractTextStyle', () => {
    expect(
        extractTextStyle({
            borderWidth: 1,
            fontWeight: 'bold',
            padding: 3,
            xyz: true,
        })
    ).toStrictEqual({
        view: {
            borderWidth: 1,
            padding: 3,
        },
        text: {
            fontWeight: 'bold',
        },
        unknown: {
            xyz: true,
        },
    });

    expect(
        extractTextStyle({
            borderWidth: 1,
            fontWeight: 'bold',
            padding: 3,
            resizeMode: 'contain',
            xyz: true,
        }, 
        true)
    ).toStrictEqual({
        view: {
            borderWidth: 1,
        },
        text: {
            fontWeight: 'bold',
            padding: 3,
        },
        unknown: {
            resizeMode: 'contain',
            xyz: true,
        },
    });
});

test('extractImageStyle', () => {
    expect(
        extractImageStyle({
            borderWidth: 1,
            fontWeight: 'bold',
            padding: 3,
            resizeMode: 'contain',
            xyz: true,
        })
    ).toStrictEqual({
        view: {
            borderWidth: 1,
            padding: 3,
        },
        image: {
            resizeMode: 'contain',
        },
        unknown: {
            fontWeight: 'bold',
            xyz: true,
        },
    });
});