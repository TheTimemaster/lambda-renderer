import {
  blank, circle,
  colored,
  combined, lettering,
  rotated,
  scaled,
  square,
  translated
} from "../build/generation";
import {Picture} from "../build/picture";
import {connect} from "../build/animation";

export const range = (start: number, end: number) =>
  Array.from({length: end - start}, (v, k) => k + start);

const combineAll = (l: Picture[]) => l.reduce(combined, blank)

export const onLoad = () => {
  const randomSquare = (emptyChance: number) => colored(
    Math.random() < emptyChance ? 'transparent' : `rgb(0, ${Math.random() * 255}, 0)`,
    scaled(0.8, 0.8, square)
  )

  const row = (emptyChance: number) => range(0, 8)
    .map(n => translated(n, 0, randomSquare(emptyChance)))
    .reduce<Picture>(combined, blank)

  const rows = range(0, 40)
    .map(n => {
      const odl = Math.min(n, 39 - n)
      const filledChance = Math.min(1, odl / 13)
      return translated(0, n, row(1 - filledChance))
    })
    .reduce<Picture>(combined, blank)

  const animation = (t: number): Picture => {
    if (t > 2) return animation(t - 2);

    const commits = rotated (-0.45 - t / 10, scaled(25, 25, translated( -3.5, t * -40, rows)))

    const background = translated(
      180, 320,
      scaled(640, 640, colored('#89cff0', square))
    )

    const hillLeft =
      translated(0, 1240,
        scaled(1500, 1500,
          colored('#5f8c4a', circle)
        )
      )

    const hillRight =
      translated(500, 1200,
        scaled(1500, 1500,
          colored('#6fb407', circle)
        )
      )

    const text1 =
      translated(
        180, 400,
        scaled(50, 50,
          combined(
            lettering("2020 was a", 'center', 'Sans'),
            translated(0, 1.5,
              lettering("hard year", 'center', 'Sans')
            )
          )

        )
      )


    return combineAll([
      text1,
      translated(0, 640, commits),
      hillLeft,
      hillRight,
      background
    ])
  }

  connect(animation, document.getElementById('canvas') as HTMLCanvasElement)
}

onLoad()