/**
 * https://github.com/atmulyana/rn-style-props
 * @format
 */
//import type {ImageStyle, TextStyle, ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
type Arr = ReadonlyArray<string>;
type Obj = Readonly<{[prop: string]: any}>;
type StyleProps = null
    | undefined
    | Obj
    | false
    | ''
    | ReadonlyArray<StyleProps>;

export const layoutStyleProps: Arr;
export const transformStyleProps: Arr;
export const shadowStyleProps: Arr;
export const viewStyleProps: Arr;
export const textStyleProps: Arr;
export const imageStyleProps: Arr;

export function isLayoutStyleProp(propName: string): boolean;
export function isTransformStyleProp(propName: string): boolean;
export function isShadowStyleProp(propName: string): boolean;
export function isViewStyleProp(propName: string): boolean;
export function isTextStyleProp(propName: string): boolean;
export function isImageStyleProp(propName: string): boolean;

export function isViewStyleValidProp(propName: string): boolean;
export function isTextStyleValidProp(propName: string): boolean;
export function isImageStyleValidProp(propName: string): boolean;

export function extractTextStyle(style: StyleProps, paddingForText?: boolean, attrName?: string): {
    // view: Readonly<ViewStyle>,
    // text: Readonly<TextStyle>,
    view: Obj,
    text: Obj,
    unknown: Obj,
};

export function extractImageStyle(style: StyleProps, attrName?: string): {
    // view: Readonly<ViewStyle>,
    // image: Readonly<ImageStyle>,
    view: Obj,
    image: Obj,
    unknown: Obj,
};