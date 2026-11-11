// shortcut: bits-ui ships no subpath exports, so these reach into its dist to
// keep dev SSR from compiling the whole barrel (~840 modules, ~4s). Drop once
// bits-ui exposes per-component entry points.
export { Dialog } from "../../node_modules/bits-ui/dist/bits/dialog/index.js";
export { Slider } from "../../node_modules/bits-ui/dist/bits/slider/index.js";
