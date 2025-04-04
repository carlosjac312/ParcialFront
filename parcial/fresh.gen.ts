// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $city_la_ciudad_ from "./routes/city/[la_ciudad].tsx";
import * as $country_el_pais_ from "./routes/country/[el_pais].tsx";
import * as $index from "./routes/index.tsx";

import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/city/[la_ciudad].tsx": $city_la_ciudad_,
    "./routes/country/[el_pais].tsx": $country_el_pais_,
    "./routes/index.tsx": $index,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
