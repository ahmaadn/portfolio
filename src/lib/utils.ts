import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null)[]) {
	return twMerge(clsx(inputs));
}
