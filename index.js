/**
 * rn-style-props
 * https://github.com/atmulyana/rn-style-props
 *
 * @format
 */
import {StyleSheet} from 'react-native';

const layoutStyle = {
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    aspectRatio: true,
    borderBottomWidth: true,
    borderEndWidth: true,
    borderLeftWidth: true,
    borderRightWidth: true,
    borderStartWidth: true,
    borderTopWidth: true,
    borderWidth: true,
    bottom: true,
    columnGap: true,
    direction: true,
    display: true,
    end: true,
    flex: true,
    flexBasis: true,
    flexGrow: true,
    flexShrink: true,
    gap: true,
    height: true,
    inset: true,
    insetBlock: true,
    insetBlockEnd: true,
    insetBlockStart: true,
    insetInline: true,
    insetInlineEnd: true,
    insetInlineStart: true,
    left: true,
    margin: true,
    marginBlock: true,
    marginBlockEnd: true,
    marginBlockStart: true,
    marginBottom: true,
    marginEnd: true,
    marginHorizontal: true,
    marginInline: true,
    marginInlineEnd: true,
    marginInlineStart: true,
    marginLeft: true,
    marginRight: true,
    marginStart: true,
    marginTop: true,
    marginVertical: true,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    overflow: true,
    padding: true,
    paddingBlock: true,
    paddingBlockEnd: true,
    paddingBlockStart: true,
    paddingBottom: true,
    paddingEnd: true,
    paddingHorizontal: true,
    paddingInline: true,
    paddingInlineEnd: true,
    paddingInlineStart: true,
    paddingLeft: true,
    paddingRight: true,
    paddingStart: true,
    paddingTop: true,
    paddingVertical: true,
    position: true,
    right: true,
    rowGap: true,
    start: true,
    top: true,
    width: true,
    flexDirection: true,
    flexWrap: true,
    justifyContent: true,
    zIndex: true,
};

const shadowStyle = {
    shadowColor: true,
    shadowOffset: true,
    shadowOpacity: true,
    shadowRadius: true,
};

const transformStyle = {
    rotation: true,
    scaleX: true,
    scaleY: true,
    transform: true,
    transformMatrix: true,
    translateX: true,
    translateY: true,
};

const viewStyle = {
    backfaceVisibility: true,
    backgroundColor: true,
    borderColor: true,
    borderCurve: true,
    borderBottomColor: true,
    borderEndColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderStartColor: true,
    borderTopColor: true,
    borderBlockColor: true,
    borderBlockEndColor: true,
    borderBlockStartColor: true,
    borderRadius: true,
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderEndEndRadius: true,
    borderEndStartRadius: true,
    borderStartEndRadius: true,
    borderStartStartRadius: true,
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    borderStyle: true,
    borderWidth: true,
    borderBottomWidth: true,
    borderEndWidth: true,
    borderLeftWidth: true,
    borderRightWidth: true,
    borderStartWidth: true,
    borderTopWidth: true,
    elevation: true,
    opacity: true,
    pointerEvents: true,
};

const textStyle = {
    color: true,
    fontFamily: true,
    fontSize: true,
    fontStyle: true,
    fontWeight: true,
    fontVariant: true,
    textShadowOffset: true,
    textShadowRadius: true,
    textShadowColor: true,
    letterSpacing: true,
    lineHeight: true,
    textAlign: true,
    textAlignVertical: true,
    includeFontPadding: true,
    textDecorationLine: true,
    textDecorationStyle: true,
    textDecorationColor: true,
    textTransform: true,
    userSelect: true,
    verticalAlign: true,
    writingDirection: true,
};

const imageStyle = {
    objectFit: true,
    overlayColor: true,
    resizeMode: true,
    tintColor: true,
};


export const layoutStyleProps = Object.keys(layoutStyle);
export const transformStyleProps = Object.keys(transformStyle);
export const shadowStyleProps = Object.keys(shadowStyle);
export const viewStyleProps = Object.keys(viewStyle);
export const textStyleProps = Object.keys(textStyle);
export const imageStyleProps = Object.keys(imageStyle);

export const isLayoutStyleProp = propName => layoutStyle[propName] || false;
export const isTransformStyleProp = propName => transformStyle[propName] || false;
export const isShadowStyleProp = propName => shadowStyle[propName] || false;
export const isViewStyleProp = propName => viewStyle[propName] || false;
export const isTextStyleProp = propName => textStyle[propName] || false;
export const isImageStyleProp = propName => imageStyle[propName] || false;

export const isViewStyleValidProp = propName =>
    isLayoutStyleProp(propName) || isTransformStyleProp(propName) || isShadowStyleProp(propName) || isViewStyleProp(propName);
export const isTextStyleValidProp = propName => isViewStyleValidProp(propName) || isTextStyleProp(propName);
export const isImageStyleValidProp = propName => isViewStyleValidProp(propName) || isImageStyleProp(propName);

export const extractTextStyle = (style, paddingForText = false, attrName='style') => {
    const text = {}, view = {}, unknown = {};
    style = StyleSheet.flatten(style);
    for (let propName in style) {
        if (!isTextStyleValidProp(propName)) {
            console.warn(`${propName} is not valid property for ${attrName}`);
            unknown[propName] = style[propName];
        }
        else if (isTextStyleProp(propName) || paddingForText && propName.indexOf('padding') > -1) {
            text[propName] = style[propName];
        }
        else {
            view[propName] = style[propName];
        }
    }
    return {view, text, unknown};
};

export const extractImageStyle = (style, attrName='style') => {
    const image = {}, view = {}, unknown = {};
    style = StyleSheet.flatten(style);
    for (let propName in style) {
        if (!isImageStyleValidProp(propName)) {
            console.warn(`${propName} is not valid property for ${attrName}`);
            unknown[propName] = style[propName];
        }
        else if (isImageStyleProp(propName)) {
            image[propName] = style[propName];
        }
        else {
            view[propName] = style[propName];
        }
    }
    return {view, image, unknown};
};

export default {
    layoutStyleProps,
    transformStyleProps,
    shadowStyleProps,
    viewStyleProps,
    textStyleProps,
    imageStyleProps,
    
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
};