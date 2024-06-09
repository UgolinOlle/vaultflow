import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @name cn
 * @description Combine classnames with tailwindcss
 * @param {ClassValue[]} inputs - Classnames to combine
 * @returns {string} - Combined classnames
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
