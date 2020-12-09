import {ModifiedPictureType, Picture, PrimitiveType, SpecialPictureType} from "./picture";

export const renderPicture = (ctx: CanvasRenderingContext2D, picture: Picture): void => {
    switch (picture.type) {
        case PrimitiveType.BLANK:
            break;
        case ModifiedPictureType.COLORED:
            const prev = ctx.fillStyle
            ctx.fillStyle = picture.color
            renderPicture(ctx, picture.base)
            ctx.fillStyle = prev
            break;
        case ModifiedPictureType.COMBINED:
            renderPicture(ctx, picture.second)
            renderPicture(ctx, picture.first)
            break;
        case ModifiedPictureType.ROTATED:
            ctx.rotate(-picture.rotation)
            renderPicture(ctx, picture.base)
            ctx.rotate(picture.rotation)
            break;
        case ModifiedPictureType.SCALED:
            ctx.scale(picture.xScale, picture.yScale)
            renderPicture(ctx, picture.base)
            ctx.scale(1 / picture.xScale, 1 / picture.yScale)
            break;
        case ModifiedPictureType.TRANSLATED:
            ctx.translate(picture.x, picture.y)
            renderPicture(ctx, picture.base)
            ctx.translate(-picture.x, -picture.y)
            break;
        case PrimitiveType.CIRCLE:
            ctx.beginPath()
            ctx.arc(0, 0 , 0.5, 0, 2 * Math.PI)
            ctx.fill()
            break;
        case PrimitiveType.SQUARE:
            ctx.fillRect(-0.5, -0.5, 1, 1)
            break;
        case SpecialPictureType.LETTERING:
            ctx.fillText(picture.text, 0, 0)
            break;
    }
}