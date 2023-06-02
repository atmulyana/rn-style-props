/**
 * https://github.com/atmulyana/rn-style-props
 * @format
 */
type Arr = ReadonlyArray<string>;
type Obj = Readonly<{[prop: string]: any}>;

declare export const layoutStyleProps: Arr;
declare export const transformStyleProps: Arr;
declare export const shadowStyleProps: Arr;
declare export const viewStyleProps: Arr;
declare export const textStyleProps: Arr;
declare export const imageStyleProps: Arr;

declare export function isLayoutStyleProp(propName: string): boolean;
declare export function isTransformStyleProp(propName: string): boolean;
declare export function isShadowStyleProp(propName: string): boolean;
declare export function isViewStyleProp(propName: string): boolean;
declare export function isTextStyleProp(propName: string): boolean;
declare export function isImageStyleProp(propName: string): boolean;

declare export function isViewStyleValidProp(propName: string): boolean;
declare export function isTextStyleValidProp(propName: string): boolean;
declare export function isImageStyleValidProp(propName: string): boolean;

declare export function extractTextStyle(style: Obj, paddingForText?: boolean, attrName?: string): {
    view: Obj,
    text: Obj,
    unknown: Obj,
};

declare export function extractImageStyle(style: Obj, attrName?: string): {
    view: Obj,
    image: Obj,
    unknown: Obj,
};