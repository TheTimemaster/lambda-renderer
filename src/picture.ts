export enum PrimitiveType {
    SQUARE= 0,
    CIRCLE= 1,
    BLANK = 2,
}

export enum ModifiedPictureType {
    COMBINED = 100,
    COLORED = 101,
    TRANSLATED = 102,
    ROTATED = 103,
    SCALED= 104
}

export enum SpecialPictureType {
    LETTERING = 1000,
}

export type Color = string;

export type CombinedPicture = {
    type: ModifiedPictureType.COMBINED,
    first: Picture,
    second: Picture
}

export type Square = {
    type: PrimitiveType.SQUARE
}

export type Circle = {
    type: PrimitiveType.CIRCLE
}

export type Blank = {
    type: PrimitiveType.BLANK
}

export type Lettering = {
    type: SpecialPictureType.LETTERING
    text: string,
    fontName: string,
    align: CanvasTextAlign
}

export type ColoredPicture = {
    type: ModifiedPictureType.COLORED
    color: Color
    base: Picture
}

export type ScaledPicture = {
    type: ModifiedPictureType.SCALED,
    xScale: number,
    yScale: number
    base: Picture
}

export type RotatedPicture = {
    type: ModifiedPictureType.ROTATED,
    rotation: number,
    base: Picture
}

export type TranslatedPicture = {
    type: ModifiedPictureType.TRANSLATED,
    x: number,
    y: number,
    base: Picture
}

export type Primitive = Square | Circle | Blank;

export type SpecialPicture = Lettering;

export type Picture = CombinedPicture | Primitive | ColoredPicture | RotatedPicture | ScaledPicture | TranslatedPicture | SpecialPicture;




