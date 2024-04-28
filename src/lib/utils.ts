import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert a number in seconds to a readable format
 * e.g. a few seconds ago, 4 minutes ago, 2 hours ago, 4 days ago
 * @param time a number in seconds
 */
export const getFormattedTime = (time: number) => {
  const now = Math.floor(new Date().getTime() / 1000);
  const diff = now - time;

  if (diff < 60) 
    return `${diff} seconds ago`;

  if (diff < 3600)
    return `${Math.floor(diff / 60)} minutes ago`;

  if (diff < 86400)
    return `${Math.floor(diff / 3600)} hours ago`;

  return `${Math.floor(diff / 86400)} days ago`;
}