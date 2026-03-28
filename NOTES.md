# Interactive Practice Front-End Notes

Fonts used:
- Display serif: `Newsreader`
- UI sans-serif: `Inter`

Recommended substitutes if external font loading is unavailable:
- Serif substitute: `Iowan Old Style`, `Palatino Linotype`, or `Georgia`
- Sans substitute: `Helvetica Neue`, `Arial`, or the system sans stack

Approximations made:
- Icons are recreated as inline SVGs instead of using Material Symbols so the layout stays self-contained.
- The palette, border weights, and spacing are tuned against the provided screenshot and markup, but may vary slightly depending on browser font rendering.
- The page is implemented as a static screen with reusable JS render helpers so future phases can add module expansion, hover refinement, and scroll reveals without restructuring the layout.

Status note:
- The current build captures the general mood, but it still feels like an approximation. This pass tightens the reconstruction substantially, with the approved screenshot still serving as the source of truth for any final pixel-level refinements.
