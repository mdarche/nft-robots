import { Traits } from './types';

/**
 * Each index of the rarity array corresponds with a variant value at the same index.
 * If all numbers in the rarity array are equal then the odds are neutral.
 *
 * @link https://chancejs.com/miscellaneous/weighted.html
 */

type RobotAttribute<T> = {
  variants: T extends 'base'
    ? Traits['base'][]
    : T extends 'background'
    ? Traits['background'][]
    : T extends 'color'
    ? Traits['color'][]
    : T extends 'display'
    ? Traits['display'][]
    : T extends 'head'
    ? Traits['head'][]
    : Traits['arms'][];
  rarity: number[];
};

/** Backgrounds */

export const background: RobotAttribute<'background'> = {
  variants: ['red', 'yellow', 'pink', '#bd5178', '#6c51bd', '#51bd8b'],
  rarity: [1, 1, 1, 1, 1, 1],
};

/** Base */

export const base: RobotAttribute<'base'> = {
  // variants: ['Devie', 'Johnny', 'Maggie', 'Swervie'],
  // rarity: [1, 1, 1, 1],
  variants: ['Devie'],
  rarity: [1],
};

/** head */

export const head: RobotAttribute<'head'> = {
  variants: ['number5', 'jumbo_screen', 'walkie_talkie', 'space_helmet'],
  rarity: [1, 1, 1, 1],
};

/** Color */

export const color: RobotAttribute<'color'> = {
  variants: ['gray'],
  rarity: [1],
};

/** Arms */

export const arms: RobotAttribute<'arms'> = {
  variants: ['buff', 'magnet', 'hinged_wrench', 'jumbo_wrench', 'magic'],
  rarity: [1, 1, 1, 1, 1],
};

/** display */

export const display: RobotAttribute<'display'> = {
  variants: ['heartbeat', 'gastank', 'lightwheel'],
  rarity: [1, 1, 1],
};
