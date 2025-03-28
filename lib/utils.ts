import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CONFIG from "./config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAssetUrl = (asset: string) => {
	return `${CONFIG.directusUrl}/assets/${asset}`;
};



