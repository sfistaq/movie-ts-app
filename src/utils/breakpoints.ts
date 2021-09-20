import { Breakpoints } from "../types/types";
import * as contants from "./constants";

export const breakpoints: Breakpoints = {
  xl: `screen and (max-width: ${contants.SCREEN_XL}px)`,
  l: `screen and (max-width: ${contants.SCREEN_L}px)`,
  m: `screen and (max-width: ${contants.SCREEN_M}px)`,
  s: `screen and (max-width: ${contants.SCREEN_S}px)`,
};
