import {renderPicture} from "./rendering";
import {Picture} from "./picture";

export type PictureAnimation = (time: number) => Picture;

export const connect = (ctx: CanvasRenderingContext2D, anim: PictureAnimation, step: number) => {
    let time = 0;
    setInterval(() => {
        time += step
        ctx.clearRect(-250, -250, 500, 500)
        renderPicture(ctx, anim(time / 1000))
    }, step)
}