import {
    Color,
    ColoredPicture, CombinedPicture, Lettering,
    ModifiedPictureType,
    Picture, PrimitiveType,
    RotatedPicture,
    ScaledPicture, SpecialPictureType,
    TranslatedPicture
} from "./picture";

export const translated = (x: number, y: number, base: Picture): TranslatedPicture => ({
    type: ModifiedPictureType.TRANSLATED,
    x, y, base
});

export const rotated = (rotation: number, base: Picture): RotatedPicture => ({
    type: ModifiedPictureType.ROTATED,
    rotation, base
});

export const scaled = (xScale: number, yScale: number, base: Picture): ScaledPicture => ({
    type: ModifiedPictureType.SCALED,
    xScale, yScale, base
});

export const colored = (color: Color, base: Picture): ColoredPicture => ({
    type: ModifiedPictureType.COLORED,
    color, base
});

export const combined = (first: Picture, second: Picture): CombinedPicture => ({
    type: ModifiedPictureType.COMBINED,
    first, second
});

export const circle = {
    type: PrimitiveType.CIRCLE
}

export const lettering = (text: string): Lettering => ({
    type: SpecialPictureType.LETTERING,
    text
});

export const square = {
    type: PrimitiveType.SQUARE
}

export const blank = {
    type: PrimitiveType.BLANK
}
