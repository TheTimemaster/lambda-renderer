import { renderPicture } from './rendering';
import { Picture } from './picture';

export type PictureAnimation = (time: number) => Picture;

export const connect = (anim: PictureAnimation, canvas: HTMLCanvasElement, step: number = 20) => {
    const ctx = canvas.getContext('2d');
    if (ctx) {
        let time = 0;
        setInterval(() => {
            time += step;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            renderPicture(ctx, anim(time / 1000));
        }, step);
    }
};
