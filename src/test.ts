import {colored, combined, lettering, rotated, scaled, square, translated} from "./generation";


export const myAnim = (t: number) => translated(Math.sin(t) * 200, 0, combined(
    combined(
        scaled(5, 500, colored("blue", square)),
        scaled(500, 5, colored("blue", square))
    ),
    combined(
        translated(
            50 * Math.cos(t), 50 * Math.sin(t),
            scaled(10, 10, lettering("AnimationTest"))
        ),
        combined(
            rotated(Math.PI * t / 10,  translated(50, 50, scaled(100, 100, colored("red", square)))),
            rotated(Math.PI * t / 5,  translated(50, 50, scaled(100, 100, colored("pink", square))))
        )
    )

))